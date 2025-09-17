import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect, Line, Circle, G } from "react-native-svg";
import colors from "@/constants/colors";

type DataPoint = {
  category: string;
  value: number;
  color: string;
  optimalValue?: number;
};

type EmissionsBarChartProps = {
  data: DataPoint[];
  height?: number;
};

const { width: screenWidth } = Dimensions.get("window");

export default function EmissionsBarChart({ 
  data, 
  height = 320 
}: EmissionsBarChartProps) {
  // Calculate dimensions
  const chartWidth = screenWidth - 40; // 20px padding on each side
  const barHeight = 36;
  const barSpacing = 20;
  const labelWidth = 80;
  const chartAreaWidth = chartWidth - labelWidth - 60; // 60px for value labels
  
  // Find max value for scaling
  const maxValue = Math.max(
    ...data.map(d => d.value),
    ...data.map(d => d.optimalValue || 0)
  );
  
  // Add 10% padding to max value for better visualization
  const scaledMax = maxValue * 1.1;
  
  const getBarWidth = (value: number) => {
    return (value / scaledMax) * chartAreaWidth;
  };
  
  const getPercentageOfTarget = (actual: number, target: number) => {
    if (target === 0) return 0;
    return Math.round((actual / target) * 100);
  };

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={height}>
        {data.map((item, index) => {
          const y = index * (barHeight + barSpacing) + 20;
          const barWidth = getBarWidth(item.value);
          const targetX = item.optimalValue ? getBarWidth(item.optimalValue) + labelWidth : 0;
          const percentage = item.optimalValue ? getPercentageOfTarget(item.value, item.optimalValue) : 0;
          const isOverTarget = item.optimalValue ? item.value > item.optimalValue : false;
          
          return (
            <G key={item.category}>
              {/* Category label */}
              <SvgText
                x={labelWidth - 10}
                y={y + barHeight / 2 + 5}
                fontSize={14}
                fontWeight="600"
                fill={colors.text}
                textAnchor="end"
              >
                {item.category}
              </SvgText>
              
              {/* Background bar */}
              <Rect
                x={labelWidth}
                y={y}
                width={chartAreaWidth}
                height={barHeight}
                fill="#F5F5F5"
                rx={4}
              />
              
              {/* Actual value bar */}
              <Rect
                x={labelWidth}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                opacity={0.8}
                rx={4}
              />
              
              {/* Target marker line */}
              {item.optimalValue && (
                <>
                  <Line
                    x1={targetX}
                    y1={y - 4}
                    x2={targetX}
                    y2={y + barHeight + 4}
                    stroke={colors.success}
                    strokeWidth={3}
                    strokeDasharray="0"
                  />
                  
                  {/* Target marker circle */}
                  <Circle
                    cx={targetX}
                    cy={y + barHeight / 2}
                    r={4}
                    fill={colors.success}
                    stroke="#FFFFFF"
                    strokeWidth={2}
                  />
                </>
              )}
              
              {/* Value label inside bar */}
              {barWidth > 50 && (
                <SvgText
                  x={labelWidth + barWidth - 8}
                  y={y + barHeight / 2 + 5}
                  fontSize={12}
                  fontWeight="600"
                  fill="#FFFFFF"
                  textAnchor="end"
                >
                  {item.value.toFixed(1)}
                </SvgText>
              )}
              
              {/* Value label outside if bar is too small */}
              {barWidth <= 50 && (
                <SvgText
                  x={labelWidth + barWidth + 5}
                  y={y + barHeight / 2 + 5}
                  fontSize={12}
                  fontWeight="600"
                  fill={item.color}
                  textAnchor="start"
                >
                  {item.value.toFixed(1)}
                </SvgText>
              )}
              
              {/* Percentage and status on the right */}
              <G>
                <SvgText
                  x={chartWidth - 20}
                  y={y + barHeight / 2 - 2}
                  fontSize={11}
                  fill={isOverTarget ? colors.error : colors.success}
                  textAnchor="end"
                  fontWeight="500"
                >
                  {percentage}%
                </SvgText>
                <SvgText
                  x={chartWidth - 20}
                  y={y + barHeight / 2 + 12}
                  fontSize={10}
                  fill="#999"
                  textAnchor="end"
                >
                  of target
                </SvgText>
              </G>
            </G>
          );
        })}
        
        {/* Legend at bottom */}
        <G transform={`translate(${labelWidth}, ${data.length * (barHeight + barSpacing) + 30})`}>
          {/* Your emissions legend */}
          <Rect
            x={0}
            y={0}
            width={30}
            height={8}
            fill={colors.primary}
            opacity={0.8}
            rx={2}
          />
          <SvgText
            x={35}
            y={7}
            fontSize={11}
            fill="#666"
          >
            Your Emissions
          </SvgText>
          
          {/* Target legend */}
          <Line
            x1={150}
            y1={4}
            x2={165}
            y2={4}
            stroke={colors.success}
            strokeWidth={3}
          />
          <Circle
            cx={157.5}
            cy={4}
            r={3}
            fill={colors.success}
            stroke="#FFFFFF"
            strokeWidth={1}
          />
          <SvgText
            x={170}
            y={7}
            fontSize={11}
            fill="#666"
          >
            Optimal Target
          </SvgText>
        </G>
      </Svg>
    </View>
  );
}

// Fix for React Native SVG Text component
const SvgText = ({ children, ...props }: any) => {
  const Text = require('react-native-svg').Text;
  return <Text {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
});