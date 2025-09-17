import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, Line, Polygon, Text as SvgText, G } from "react-native-svg";
import colors from "@/constants/colors";

type DataPoint = {
  category: string;
  value: number;
  color: string;
  optimalValue?: number;
};

type RadarChartProps = {
  data: DataPoint[];
  maxValue?: number;
  size?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  fillOpacity?: number;
  showOptimalLevel?: boolean;
  optimalTotal?: number;
  labelFontSize?: number;
};

export default function RadarChart({
  data,
  maxValue,
  size = Dimensions.get("window").width - 40,
  showGrid = true,
  showLabels = true,
  fillOpacity = 0.3,
  showOptimalLevel = false,
  optimalTotal,
  labelFontSize = 13,
}: RadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.3; // slightly smaller radius for padding
  const angleStep = (2 * Math.PI) / data.length;

  // Calculate max value if not provided
  const chartMaxValue =
    maxValue || Math.max(...data.map((d) => d.value), optimalTotal || 10, 10);

  // Helper to compute point coords
  const getPointCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const normalizedValue = Math.min(value / chartMaxValue, 1);
    const pointRadius = radius * normalizedValue;
    return {
      x: centerX + pointRadius * Math.cos(angle),
      y: centerY + pointRadius * Math.sin(angle),
    };
  };

  // Optimal polygon
  let optimalPolygonPoints = "";
  if (showOptimalLevel && optimalTotal) {
    const optimalPerCategory = optimalTotal / data.length;
    optimalPolygonPoints = data
      .map((_, i) => {
        const point = getPointCoordinates(
          data[i].optimalValue || optimalPerCategory,
          i
        );
        return `${point.x},${point.y}`;
      })
      .join(" ");
  }

  // Grid circles & labels
  const gridLevels = 5;
  const gridCircles = [];
  const gridLabels = [];

  for (let i = 1; i <= gridLevels; i++) {
    const levelRadius = (radius * i) / gridLevels;
    const levelValue = (chartMaxValue * i) / gridLevels;

    gridCircles.push(
      <Circle
        key={`grid-${i}`}
        cx={centerX}
        cy={centerY}
        r={levelRadius}
        fill="none"
        stroke="#E0E0E0"
        strokeWidth={i === gridLevels ? 1.5 : 1}
        strokeDasharray={i === gridLevels ? "0" : "3,3"}
        opacity={i === gridLevels ? 0.8 : 0.4}
      />
    );

    if (i % 2 === 0 || i === gridLevels) {
      gridLabels.push(
        <SvgText
          key={`grid-label-${i}`}
          x={centerX + 5}
          y={centerY - levelRadius - 4}
          fontSize={10}
          fill="#999"
          fontWeight="500"
        >
          {levelValue.toFixed(0)}kg
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
        stroke="#D0D0D0"
        strokeWidth={1}
        opacity={0.5}
      />
    );
  });

  // Polygon points
  const polygonPoints = data
    .map((d, i) => {
      const point = getPointCoordinates(d.value, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  // Labels with adaptive offset
  const labelOffset = 25; // distance from edge
  const labels = data.map((d, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = centerX + (radius + labelOffset) * Math.cos(angle);
    const y = centerY + (radius + labelOffset) * Math.sin(angle);

    let textAnchor: "start" | "middle" | "end" = "middle";
    if (x < centerX - 15) textAnchor = "end";
    else if (x > centerX + 15) textAnchor = "start";

    return (
      <G key={`label-${index}`}>
        <SvgText
          x={x}
          y={y - 6}
          fontSize={labelFontSize}
          fontWeight="600"
          fill={colors.text}
          textAnchor={textAnchor}
        >
          {d.category}
        </SvgText>
        <SvgText
          x={x}
          y={y + 10}
          fontSize={labelFontSize - 1}
          fill={
            d.value > (d.optimalValue || 0) ? colors.error : colors.success
          }
          textAnchor={textAnchor}
        >
          {d.value.toFixed(1)}kg
        </SvgText>
        {showOptimalLevel && d.optimalValue && (
          <SvgText
            x={x}
            y={y + 22}
            fontSize={11}
            fill="#999"
            textAnchor={textAnchor}
          >
            (target {d.optimalValue.toFixed(1)}kg)
          </SvgText>
        )}
      </G>
    );
  });

  // Data points
  const dataPoints = data.map((d, index) => {
    const point = getPointCoordinates(d.value, index);
    const isOverTarget = d.optimalValue ? d.value > d.optimalValue : false;
    return (
      <Circle
        key={`point-${index}`}
        cx={point.x}
        cy={point.y}
        r={5}
        fill={isOverTarget ? colors.error : d.color}
        stroke="#FFF"
        strokeWidth={1.5}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {showGrid && <G>{gridCircles}{axisLines}{gridLabels}</G>}
        {showOptimalLevel && optimalPolygonPoints && (
          <Polygon
            points={optimalPolygonPoints}
            fill="none"
            stroke={colors.success}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={0.8}
          />
        )}
        <Polygon
          points={polygonPoints}
          fill={colors.primary}
          fillOpacity={fillOpacity}
          stroke={colors.primary}
          strokeWidth={2}
        />
        {dataPoints}
        {showLabels && labels}
        <Circle cx={centerX} cy={centerY} r={3} fill={colors.text} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
