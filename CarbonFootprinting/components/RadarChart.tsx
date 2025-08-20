import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, Line, Polygon, Text as SvgText, G } from "react-native-svg";
import colors from "@/constants/colors";

type DataPoint = {
  category: string;
  value: number;
  color: string;
};

type RadarChartProps = {
  data: DataPoint[];
  maxValue?: number;
  size?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  fillOpacity?: number;
};

export default function RadarChart({
  data,
  maxValue,
  size = Dimensions.get("window").width - 80,
  showGrid = true,
  showLabels = true,
  fillOpacity = 0.25,
}: RadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.30; // Adjusted for better label spacing
  const angleStep = (2 * Math.PI) / data.length;
  
  // Calculate max value if not provided
  const chartMaxValue = maxValue || Math.max(...data.map(d => d.value), 10);
  
  // Helper function to get point coordinates
  const getPointCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const normalizedValue = Math.min(value / chartMaxValue, 1);
    const pointRadius = radius * normalizedValue;
    
    return {
      x: centerX + pointRadius * Math.cos(angle),
      y: centerY + pointRadius * Math.sin(angle),
    };
  };
  
  // Generate grid circles with better visibility
  const gridLevels = 4;
  const gridCircles = [];
  for (let i = 1; i <= gridLevels; i++) {
    const levelRadius = (radius * i) / gridLevels;
    gridCircles.push(
      <Circle
        key={`grid-${i}`}
        cx={centerX}
        cy={centerY}
        r={levelRadius}
        fill="none"
        stroke="#D0D0D0"
        strokeWidth={i === gridLevels ? 1.5 : 1}
        strokeDasharray={i === gridLevels ? "0" : "4,4"}
        opacity={i === gridLevels ? 1 : 0.5}
      />
    );
  }
  
  // Generate axis lines with better visibility
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
        stroke="#D0D0D0"
        strokeWidth={1}
        opacity={0.6}
      />
    );
  });
  
  // Generate data polygon points
  const polygonPoints = data
    .map((d, i) => {
      const point = getPointCoordinates(d.value, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");
  
  // Generate labels with better readability
  const labels = data.map((d, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const labelRadius = radius + 25; // Slightly more space for readability
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    
    // Determine text anchor based on position
    let textAnchor: "start" | "middle" | "end" = "middle";
    if (x < centerX - 10) {
      textAnchor = "end";
    } else if (x > centerX + 10) {
      textAnchor = "start";
    }
    
    // Adjust vertical alignment for top and bottom labels
    let dy = 0;
    if (y < centerY - radius + 10) {
      dy = -8; // Move up for top labels
    } else if (y > centerY + radius - 10) {
      dy = 8; // Move down for bottom labels
    }
    
    return (
      <G key={`label-${index}`}>
        <SvgText
          x={x}
          y={y + dy}
          fontSize={14}
          fontWeight="600"
          fill={colors.text}
          textAnchor={textAnchor}
          alignmentBaseline="middle"
        >
          {d.category}
        </SvgText>
        <SvgText
          x={x}
          y={y + dy + 16}
          fontSize={12}
          fill="#555"
          textAnchor={textAnchor}
          alignmentBaseline="middle"
          fontWeight="500"
        >
          {d.value.toFixed(1)}kg
        </SvgText>
      </G>
    );
  });
  
  // Generate data points (circles at vertices) with better visibility
  const dataPoints = data.map((d, index) => {
    const point = getPointCoordinates(d.value, index);
    return (
      <Circle
        key={`point-${index}`}
        cx={point.x}
        cy={point.y}
        r={5}
        fill={d.color}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    );
  });
  
  // Grid level labels with better readability
  const gridLabels = [];
  for (let i = 1; i <= gridLevels; i++) {
    const value = (chartMaxValue * i) / gridLevels;
    gridLabels.push(
      <SvgText
        key={`grid-label-${i}`}
        x={centerX + 5}
        y={centerY - (radius * i) / gridLevels - 3}
        fontSize={11}
        fill="#666"
        fontWeight="500"
        alignmentBaseline="middle"
      >
        {value.toFixed(0)}
      </SvgText>
    );
  }

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Grid */}
        {showGrid && (
          <G>
            {gridCircles}
            {axisLines}
            {gridLabels}
          </G>
        )}
        
        {/* Data polygon with better visibility */}
        <Polygon
          points={polygonPoints}
          fill={colors.primary}
          fillOpacity={fillOpacity}
          stroke={colors.primary}
          strokeWidth={2.5}
        />
        
        {/* Data points */}
        {dataPoints}
        
        {/* Labels */}
        {showLabels && labels}
        
        {/* Center point */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={3}
          fill={colors.text}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    backgroundColor: "transparent",
  },
});