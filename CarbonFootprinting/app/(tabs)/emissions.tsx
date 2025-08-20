import React, { useState, useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  ActivityIndicator 
} from "react-native";
import { PieChart, Activity } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import RadarChart from "@/components/RadarChart";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";
import { router } from "expo-router";

type TimeRange = "week" | "month" | "year" | "all";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function EmissionsScreen() {
  const { entries, isLoading } = useCarbonData();
  const [timeRange, setTimeRange] = useState<TimeRange>("month");
  
  // Calculate category totals based on time range
  const categoryData = useMemo(() => {
    let filteredEntries = entries;
    const now = new Date();
    
    // Filter entries based on time range
    switch (timeRange) {
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= weekAgo);
        break;
      case "month":
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= monthAgo);
        break;
      case "year":
        const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= yearAgo);
        break;
      case "all":
        // Use all entries
        break;
    }
    
    // Calculate totals by category
    const totals = {
      transport: 0,
      food: 0,
      energy: 0,
      waste: 0,
      other: 0,
    };
    
    filteredEntries.forEach(entry => {
      totals[entry.category] += entry.carbonValue;
    });
    
    return [
      { category: "Transport", value: totals.transport, color: colors.transport },
      { category: "Food", value: totals.food, color: colors.food },
      { category: "Energy", value: totals.energy, color: colors.energy },
      { category: "Waste", value: totals.waste, color: colors.waste },
      { category: "Other", value: totals.other, color: colors.other },
    ];
  }, [entries, timeRange]);
  
  const totalEmissions = categoryData.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate dynamic chart size based on screen dimensions
  // Account for header, tabs, and other UI elements
  const chartSize = Math.min(screenWidth - 70, screenHeight * 0.35);
  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  
  if (entries.length === 0) {
    return (
      <View style={styles.container}>
        <EmptyState
          title="No Emissions Data"
          message="Start tracking your activities to see your carbon footprint visualized here."
          icon={<Activity size={48} color={colors.primary} />}
          actionLabel="Track Now"
          onAction={() => router.push('/(tabs)/track')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Emissions Analysis</Text>
          <Text style={styles.subtitle}>
            Your carbon footprint breakdown by category
          </Text>
        </View>
        
        {/* Time Range Selector */}
        <View style={styles.timeRangeContainer}>
          {(["week", "month", "year", "all"] as TimeRange[]).map((range) => (
            <TouchableOpacity
              key={range}
              style={[styles.timeRangeButton, timeRange === range && styles.activeTimeRange]}
              onPress={() => setTimeRange(range)}
            >
              <Text style={[styles.timeRangeText, timeRange === range && styles.activeTimeRangeText]}>
                {range === "all" ? "All" : range.charAt(0).toUpperCase() + range.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <PieChart size={20} color={colors.primary} />
            <Text style={styles.summaryLabel}>Total Emissions</Text>
          </View>
          <Text style={styles.summaryValue}>{totalEmissions.toFixed(1)} kg CO₂e</Text>
          <View style={styles.breakdownContainer}>
            {categoryData.map((item, index) => {
              const percentage = totalEmissions > 0 ? (item.value / totalEmissions) * 100 : 0;
              return (
                <View key={index} style={styles.breakdownItem}>
                  <View style={[styles.breakdownDot, { backgroundColor: item.color }]} />
                  <Text style={styles.breakdownText}>
                    {item.category}: {percentage.toFixed(0)}%
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        
        {/* Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Categories</Text>
          <RadarChart 
            data={categoryData}
            size={chartSize}
            showGrid={true}
            showLabels={true}
            fillOpacity={0.25}
          />
        </View>
        
        {/* Insights Section */}
        <View style={styles.insightsContainer}>
          <Text style={styles.insightsTitle}>Quick Insights</Text>
          {(() => {
            const maxCategory = categoryData.reduce((max, item) => 
              item.value > max.value ? item : max
            );
            const nonZeroCategories = categoryData.filter(item => item.value > 0);
            
            return (
              <>
                {maxCategory.value > 0 && (
                  <Text style={styles.insightText}>
                    • <Text style={styles.insightHighlight}>{maxCategory.category}</Text> is your highest emission source
                  </Text>
                )}
                <Text style={styles.insightText}>
                  • You're tracking {nonZeroCategories.length} out of 5 categories
                </Text>
                <Text style={styles.insightText}>
                  • Total emissions for {timeRange === "all" ? "all time" : `this ${timeRange}`}: {totalEmissions.toFixed(1)} kg
                </Text>
              </>
            );
          })()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  timeRangeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 6,
  },
  timeRangeButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  activeTimeRange: {
    backgroundColor: colors.primary,
  },
  timeRangeText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600" as const,
  },
  activeTimeRangeText: {
    color: "#FFFFFF",
  },
  summaryCard: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500" as const,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 16,
  },
  breakdownContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  breakdownItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  breakdownDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  breakdownText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500" as const,
  },
  chartContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 16,
  },
  insightsContainer: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  insightsTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 12,
  },
  insightText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
    lineHeight: 20,
  },
  insightHighlight: {
    color: colors.primary,
    fontWeight: "600" as const,
  },
});