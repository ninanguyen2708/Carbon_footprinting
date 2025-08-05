import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "@/constants/colors";
import { DailyTotal, WeeklyTotal, MonthlyTotal } from "@/types";

type CarbonSummaryCardProps = {
  data: DailyTotal | WeeklyTotal | MonthlyTotal;
  type: "daily" | "weekly" | "monthly";
};

export default function CarbonSummaryCard({ data, type }: CarbonSummaryCardProps) {
  const formatDate = () => {
    if ("date" in data) {
      // Daily
      const date = new Date(data.date);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } else if ("weekStart" in data) {
      // Weekly
      const start = new Date(data.weekStart);
      const end = new Date(data.weekEnd);
      return `${start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} - ${end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}`;
    } else if ("month" in data) {
      // Monthly
      const [year, month] = data.month.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
    return "";
  };

  const getCarbonIntensityColor = (value: number) => {
    if (value < 10) return colors.lowCarbon;
    if (value < 30) return colors.mediumCarbon;
    return colors.highCarbon;
  };

  const getCarbonIntensityLabel = (value: number) => {
    if (value < 10) return "Low";
    if (value < 30) return "Medium";
    return "High";
  };

  return (
    <View style={styles.card} testID="carbon-summary-card">
      <View style={styles.header}>
        <Text style={styles.title}>{formatDate()}</Text>
        <View style={styles.intensityContainer}>
          <View 
            style={[
              styles.intensityIndicator, 
              { backgroundColor: getCarbonIntensityColor(data.total) }
            ]} 
          />
          <Text style={styles.intensityLabel}>
            {getCarbonIntensityLabel(data.total)}
          </Text>
        </View>
      </View>
      
      <Text style={styles.totalValue}>
        {data.total.toFixed(2)} kg CO₂e
      </Text>
      
      <View style={styles.categoriesContainer}>
        <CategoryBar 
          label="Transport" 
          value={data.transport} 
          total={data.total} 
          color={colors.transport} 
        />
        <CategoryBar 
          label="Food" 
          value={data.food} 
          total={data.total} 
          color={colors.food} 
        />
        <CategoryBar 
          label="Energy" 
          value={data.energy} 
          total={data.total} 
          color={colors.energy} 
        />
        <CategoryBar 
          label="Waste" 
          value={data.waste} 
          total={data.total} 
          color={colors.waste} 
        />
        <CategoryBar 
          label="Other" 
          value={data.other} 
          total={data.total} 
          color={colors.other} 
        />
      </View>
    </View>
  );
}

type CategoryBarProps = {
  label: string;
  value: number;
  total: number;
  color: string;
};

function CategoryBar({ label, value, total, color }: CategoryBarProps) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  
  return (
    <View style={styles.categoryRow}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <View style={styles.barContainer}>
        <View 
          style={[
            styles.barFill, 
            { 
              width: `${percentage}%`, 
              backgroundColor: color 
            }
          ]} 
        />
      </View>
      <Text style={styles.categoryValue}>{value.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  intensityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  intensityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  intensityLabel: {
    fontSize: 12,
    color: "#666",
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 16,
  },
  categoriesContainer: {
    marginTop: 8,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryLabel: {
    width: 70,
    fontSize: 12,
    color: colors.text,
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
    marginHorizontal: 8,
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  categoryValue: {
    width: 40,
    fontSize: 12,
    color: "#666",
    textAlign: "right",
  },
});