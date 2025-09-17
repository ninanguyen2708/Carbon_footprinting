import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, Line, Polygon, Text as SvgText, G, Defs, LinearGradient, Stop, Path } from "react-native-svg";
import colors from "@/constants/colors";

type DataPoint = {
  category: string;
  value: number;
  color: string;
  optimalValue?: number;
};

type ImprovedRadarChartProps = {
  data: DataPoint[];
  size?: number;
};

export default function ImprovedRadarChart({ 
  data, 
  size = Math.min(Dimensions.get("window").width - 40, Dimensions.get("window").height * 0.4)
}: ImprovedRadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.28; // Slightly smaller for label space
  const angleStep = (2 * Math.PI) / data.length;
  
  // Calculate max value for scaling
  const maxValue = Math.max(
    ...data.map(d => d.value),
    ...data.map(d => d.optimalValue || 0),
    10
  ) * 1.2; // Add 20% padding

  // Helper functions
  const getPointCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const normalizedValue = Math.min(value / maxValue, 1);
    const pointRadius = radius * normalizedValue;
    return {
      x: centerX + pointRadius * Math.cos(angle),
      y: centerY + pointRadius * Math.sin(angle),
    };
  };

  // Create polygon points for actual values
  const actualPolygonPoints = data
    .map((d, i) => {
      const point = getPointCoordinates(d.value, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  // Create polygon points for optimal values
  const optimalPolygonPoints = data
    .map((d, i) => {
      const point = getPointCoordinates(d.optimalValue || 0, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  // Grid circles
  const gridLevels = 5;
  const gridCircles = [];
  const gridLabels = [];

  for (let i = 1; i <= gridLevels; i++) {
    const levelRadius = (radius * i) / gridLevels;
    const levelValue = (maxValue * i) / gridLevels;

    gridCircles.push(
      <Circle
        key={`grid-${i}`}
        cx={centerX}
        cy={centerY}
        r={levelRadius}
        fill="none"
        stroke="#E5E5E5"
        strokeWidth={1}
        strokeDasharray={i === gridLevels ? "0" : "2,2"}
        opacity={i === gridLevels ? 1 : 0.3}
      />
    );

    // Add grid value labels
    if (i % 2 === 0 || i === gridLevels) {
      gridLabels.push(
        <SvgText
          key={`grid-label-${i}`}
          x={centerX + 3}
          y={centerY - levelRadius - 2}
          fontSize={9}
          fill="#999"
          fontWeight="400"
        >
          {levelValue.toFixed(0)}
        </SvgText>
      );
    }
  }

  // Axis lines
  const axisLines = data.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const endX = centerX + radius * Math.cos(angle);
    const endY = centerY + radius * Math.sin(angle);
    return (
      <Line
        key={`axis-${index}`}
        x1={centerX}
        y1={centerY}
        x2={endX}
        y2={endY}
        stroke="#E5E5E5"
        strokeWidth={1}
        opacity={0.5}
      />
    );
  });

  // Category labels with improved positioning
  const labelOffset = size * 0.15; // Dynamic offset based on chart size
  const labels = data.map((d, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const labelX = centerX + (radius + labelOffset) * Math.cos(angle);
    const labelY = centerY + (radius + labelOffset) * Math.sin(angle);
    
    // Calculate difference from target
    const difference = d.value - (d.optimalValue || 0);
    const differenceText = difference > 0 
      ? `+${difference.toFixed(1)} kg`
      : `${difference.toFixed(1)} kg`;
    const differenceColor = difference > 0 ? colors.error : colors.success;

    // Adjust text anchor based on position
    let textAnchor: "start" | "middle" | "end" = "middle";
    let xOffset = 0;
    
    if (labelX < centerX - 20) {
      textAnchor = "end";
      xOffset = -5;
    } else if (labelX > centerX + 20) {
      textAnchor = "start";
      xOffset = 5;
    }

    return (
      <G key={`label-${index}`}>
        {/* Category name */}
        <SvgText
          x={labelX + xOffset}
          y={labelY - 8}
          fontSize={12}
          fontWeight="600"
          fill={colors.text}
          textAnchor={textAnchor}
        >
          {d.category}
        </SvgText>
        
        {/* Actual value */}
        <SvgText
          x={labelX + xOffset}
          y={labelY + 4}
          fontSize={11}
          fill={d.color}
          textAnchor={textAnchor}
          fontWeight="500"
        >
          {d.value.toFixed(1)} kg
        </SvgText>
        
        {/* Difference from target */}
        <SvgText
          x={labelX + xOffset}
          y={labelY + 16}
          fontSize={10}
          fill={differenceColor}
          textAnchor={textAnchor}
          fontWeight="500"
        >
          {differenceText}
        </SvgText>
      </G>
    );
  });

  // Data point dots
  const dataPoints = data.map((d, index) => {
    const actualPoint = getPointCoordinates(d.value, index);
    const optimalPoint = getPointCoordinates(d.optimalValue || 0, index);
    
    return (
      <G key={`points-${index}`}>
        {/* Optimal point */}
        <Circle
          cx={optimalPoint.x}
          cy={optimalPoint.y}
          r={4}
          fill={colors.success}
          stroke="#FFF"
          strokeWidth={1.5}
        />
        
        {/* Actual point */}
        <Circle
          cx={actualPoint.x}
          cy={actualPoint.y}
          r={5}
          fill={d.value > (d.optimalValue || 0) ? colors.error : d.color}
          stroke="#FFF"
          strokeWidth={2}
        />
      </G>
    );
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="actualGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={colors.primary} stopOpacity={0.2} />
            <Stop offset="100%" stopColor={colors.primary} stopOpacity={0.4} />
          </LinearGradient>
        </Defs>
        
        {/* Grid */}
        <G>{gridCircles}</G>
        <G>{axisLines}</G>
        <G>{gridLabels}</G>
        
        {/* Optimal polygon (dotted) */}
        <Polygon
          points={optimalPolygonPoints}
          fill="none"
          stroke={colors.success}
          strokeWidth={2}
          strokeDasharray="5,3"
          opacity={0.8}
        />
        
        {/* Actual polygon (solid) */}
        <Polygon
          points={actualPolygonPoints}
          fill="url(#actualGradient)"
          stroke={colors.primary}
          strokeWidth={2.5}
          opacity={0.9}
        />
        
        {/* Center point */}
        <Circle cx={centerX} cy={centerY} r={3} fill={colors.text} opacity={0.5} />
        
        {/* Data points */}
        {dataPoints}
        
        {/* Labels */}
        {labels}
      </Svg>
      
      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendLine, { backgroundColor: colors.primary }]} />
          <Text style={styles.legendText}>Your Emissions (Actual)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendLine, { 
            borderStyle: 'dashed',
            borderWidth: 1,
            borderColor: colors.success,
            backgroundColor: 'transparent'
          }]} />
          <Text style={styles.legendText}>Optimal Target</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 12,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendLine: {
    width: 20,
    height: 3,
  },
  legendText: {
    fontSize: 11,
    color: "#666",
  },
});