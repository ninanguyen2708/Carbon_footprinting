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
import { PieChart, BarChart3, Activity } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import RadarChart from "@/components/RadarChart";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";
import { router } from "expo-router";

type TimeRange = "week" | "month" | "year" | "all";
type ChartType = "radar" | "scope" | "trend";

export default function EmissionsScreen() {
  const { entries, dailyTotals, weeklyTotals, monthlyTotals, isLoading } = useCarbonData();
  const [timeRange, setTimeRange] = useState<TimeRange>("month");
  const [chartType, setChartType] = useState<ChartType>("radar");
  
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
  
  // Calculate scope-based grouping (simplified for student context)
  const scopeData = useMemo(() => {
    const totals = {
      scope1: 0, // Direct emissions (e.g., personal vehicle)
      scope2: 0, // Energy consumption
      scope3: 0, // Indirect (food, waste, public transport, etc.)
    };
    
    entries.forEach(entry => {
      // Simplified scope mapping for students
      if (entry.category === "energy") {
        totals.scope2 += entry.carbonValue;
      } else if (entry.category === "transport" && entry.activity.toLowerCase().includes("car")) {
        totals.scope1 += entry.carbonValue;
      } else {
        totals.scope3 += entry.carbonValue;
      }
    });
    
    return [
      { category: "Direct", value: totals.scope1, color: "#FF6B6B" },
      { category: "Energy", value: totals.scope2, color: "#4ECDC4" },
      { category: "Indirect", value: totals.scope3, color: "#45B7D1" },
    ];
  }, [entries]);
  
  const totalEmissions = categoryData.reduce((sum, item) => sum + item.value, 0);
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }
    
    if (entries.length === 0) {
      return (
        <EmptyState
          title="No Emissions Data"
          message="Start tracking your activities to see your carbon footprint visualized here."
          icon={<Activity size={48} color={colors.primary} />}
          actionLabel="Track Now"
          onAction={() => router.push('/(tabs)/track')}
        />
      );
    }
    
    return (
      <>
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Emissions ({timeRange})</Text>
          <Text style={styles.summaryValue}>{totalEmissions.toFixed(1)} kg CO₂e</Text>
          <View style={styles.summaryBreakdown}>
            {categoryData.map((item, index) => (
              <View key={index} style={styles.breakdownItem}>
                <View style={[styles.breakdownDot, { backgroundColor: item.color }]} />
                <Text style={styles.breakdownText}>
                  {item.category}: {((item.value / totalEmissions) * 100).toFixed(0)}%
                </Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Chart Type Selector */}
        <View style={styles.chartTypeContainer}>
          <TouchableOpacity
            style={[styles.chartTypeButton, chartType === "radar" && styles.activeChartType]}
            onPress={() => setChartType("radar")}
          >
            <PieChart size={16} color={chartType === "radar" ? "#FFF" : "#666"} />
            <Text style={[styles.chartTypeText, chartType === "radar" && styles.activeChartTypeText]}>
              Categories
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.chartTypeButton, chartType === "scope" && styles.activeChartType]}
            onPress={() => setChartType("scope")}
          >
            <BarChart3 size={16} color={chartType === "scope" ? "#FFF" : "#666"} />
            <Text style={[styles.chartTypeText, chartType === "scope" && styles.activeChartTypeText]}>
              By Scope
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Chart */}
        <View style={styles.chartContainer}>
          {chartType === "radar" ? (
            <RadarChart 
              data={categoryData}
              size={Dimensions.get("window").width - 40}
              showGrid={true}
              showLabels={true}
              fillOpacity={0.3}
            />
          ) : (
            <View style={styles.scopeChartContainer}>
              <Text style={styles.scopeTitle}>Emissions by Scope</Text>
              <RadarChart 
                data={scopeData}
                size={Dimensions.get("window").width - 60}
                showGrid={true}
                showLabels={true}
                fillOpacity={0.4}
              />
              <View style={styles.scopeLegend}>
                <Text style={styles.scopeLegendTitle}>Understanding Scopes:</Text>
                <Text style={styles.scopeLegendItem}>
                  <Text style={{ color: "#FF6B6B", fontWeight: "600" }}>Direct:</Text> Emissions you control (personal vehicle)
                </Text>
                <Text style={styles.scopeLegendItem}>
                  <Text style={{ color: "#4ECDC4", fontWeight: "600" }}>Energy:</Text> Electricity and heating
                </Text>
                <Text style={styles.scopeLegendItem}>
                  <Text style={{ color: "#45B7D1", fontWeight: "600" }}>Indirect:</Text> Food, waste, public transport, purchases
                </Text>
              </View>
            </View>
          )}
        </View>
      </>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Emissions Analysis</Text>
        <Text style={styles.subtitle}>
          Visualize your carbon footprint across different categories
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
              {range === "all" ? "All Time" : range.charAt(0).toUpperCase() + range.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {renderContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
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
    marginTop: 12,
    marginBottom: 16,
  },
  timeRangeButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#F5F5F5",
  },
  activeTimeRange: {
    backgroundColor: colors.primary,
  },
  timeRangeText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500" as const,
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
  summaryLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 12,
  },
  summaryBreakdown: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  breakdownItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 4,
  },
  breakdownDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  breakdownText: {
    fontSize: 12,
    color: "#666",
  },
  chartTypeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  chartTypeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    gap: 6,
  },
  activeChartType: {
    backgroundColor: colors.primary,
  },
  chartTypeText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500" as const,
  },
  activeChartTypeText: {
    color: "#FFFFFF",
  },
  chartContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scopeChartContainer: {
    alignItems: "center",
  },
  scopeTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 16,
  },
  scopeLegend: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    width: "100%",
  },
  scopeLegendTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 8,
  },
  scopeLegendItem: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    lineHeight: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 300,
  },
});