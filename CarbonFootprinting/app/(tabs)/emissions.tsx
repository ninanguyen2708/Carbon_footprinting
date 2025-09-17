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
import { PieChart, Activity, Target, TrendingUp, AlertCircle } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import RadarChart from "@/components/RadarChart";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";
import { router } from "expo-router";

type TimeRange = "week" | "month" | "year" | "all";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Optimal carbon targets (in kg CO2e) for university students
const OPTIMAL_TARGETS = {
  daily: 10,      // 10 kg/day
  weekly: 70,     // 70 kg/week  
  monthly: 300,   // 300 kg/month
  yearly: 3650,   // 3.65 tons/year
  
  // Category-specific monthly targets
  categories: {
    transport: 90,   // 30% of monthly
    food: 75,        // 25% of monthly
    energy: 60,      // 20% of monthly
    waste: 30,       // 10% of monthly
    other: 45,       // 15% of monthly
  }
};

export default function EmissionsScreen() {
  const { entries, isLoading, resetEntries } = useCarbonData();
  const [timeRange, setTimeRange] = useState<TimeRange>("month");
  
  // Calculate current optimal target based on time range
  const getOptimalTarget = () => {
    switch (timeRange) {
      case "week": return OPTIMAL_TARGETS.weekly;
      case "month": return OPTIMAL_TARGETS.monthly;
      case "year": return OPTIMAL_TARGETS.yearly;
      default: return OPTIMAL_TARGETS.monthly;
    }
  };
  
  // Calculate category totals and optimal values based on time range
  const categoryData = useMemo(() => {
    let filteredEntries = entries;
    const now = new Date();
    let timeMultiplier = 1; // Used to scale optimal targets
    
    // Filter entries based on time range
    switch (timeRange) {
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= weekAgo);
        timeMultiplier = 7 / 30; // Week is roughly 7/30 of a month
        break;
      case "month":
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= monthAgo);
        timeMultiplier = 1;
        break;
      case "year":
        const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        filteredEntries = entries.filter(e => new Date(e.date) >= yearAgo);
        timeMultiplier = 12; // Year is 12 months
        break;
      case "all":
        // Calculate months since first entry for scaling
        if (entries.length > 0) {
          const firstDate = new Date(entries[entries.length - 1].date);
          const monthsSince = (now.getTime() - firstDate.getTime()) / (30 * 24 * 60 * 60 * 1000);
          timeMultiplier = Math.max(1, monthsSince);
        }
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
    
    // Create data with optimal values
    return [
      { 
        category: "Transport", 
        value: totals.transport, 
        color: colors.transport,
        optimalValue: OPTIMAL_TARGETS.categories.transport * timeMultiplier
      },
      { 
        category: "Food", 
        value: totals.food, 
        color: colors.food,
        optimalValue: OPTIMAL_TARGETS.categories.food * timeMultiplier
      },
      { 
        category: "Energy", 
        value: totals.energy, 
        color: colors.energy,
        optimalValue: OPTIMAL_TARGETS.categories.energy * timeMultiplier
      },
      { 
        category: "Waste", 
        value: totals.waste, 
        color: colors.waste,
        optimalValue: OPTIMAL_TARGETS.categories.waste * timeMultiplier
      },
      { 
        category: "Other", 
        value: totals.other, 
        color: colors.other,
        optimalValue: OPTIMAL_TARGETS.categories.other * timeMultiplier
      },
    ];
  }, [entries, timeRange]);
  
  const totalEmissions = categoryData.reduce((sum, item) => sum + item.value, 0);
  const optimalTotal = getOptimalTarget();
  const percentageOfTarget = optimalTotal > 0 ? (totalEmissions / optimalTotal) * 100 : 0;
  
  // Calculate daily average for projections
  const dailyAverage = useMemo(() => {
    if (entries.length === 0) return 0;
    const daysSinceFirst = Math.max(1, 
      (new Date().getTime() - new Date(entries[entries.length - 1].date).getTime()) / 
      (24 * 60 * 60 * 1000)
    );
    return totalEmissions / daysSinceFirst;
  }, [entries, totalEmissions]);
  
  // Projections
  const monthlyProjection = dailyAverage * 30;
  const yearlyProjection = dailyAverage * 365;
  
  // Dynamic chart size - bigger for better visibility
  const chartSize = Math.min(screenWidth - 40, screenHeight * 0.35);
  
  // Determine achievement status
  const getAchievementStatus = () => {
    if (percentageOfTarget <= 75) return { color: colors.success, text: "Excellent! 🌱", message: "You're well below your target!" };
    if (percentageOfTarget <= 100) return { color: colors.success, text: "Good job! ✅", message: "You're within your carbon budget." };
    if (percentageOfTarget <= 125) return { color: colors.warning, text: "Close! ⚠️", message: "Slightly over target. Small changes can help." };
    return { color: colors.error, text: "Over target ❌", message: "Time to review your high-emission activities." };
  };
  
  const achievementStatus = getAchievementStatus();
  
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
            Track your progress toward sustainable living
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
        
        {/* Target Progress Card */}
        <View style={[styles.targetCard, { borderLeftColor: achievementStatus.color }]}>
          <View style={styles.targetHeader}>
            <Target size={20} color={achievementStatus.color} />
            <Text style={styles.targetTitle}>Carbon Target Progress</Text>
          </View>
          
          <View style={styles.targetContent}>
            <View style={styles.targetValues}>
              <View>
                <Text style={styles.targetLabel}>Your Emissions</Text>
                <Text style={[styles.targetValue, { color: achievementStatus.color }]}>
                  {totalEmissions.toFixed(1)} kg
                </Text>
              </View>
              <View style={styles.targetDivider} />
              <View>
                <Text style={styles.targetLabel}>Optimal Target</Text>
                <Text style={styles.targetValue}>{optimalTotal.toFixed(0)} kg</Text>
              </View>
              <View style={styles.targetDivider} />
              <View>
                <Text style={styles.targetLabel}>% of Target</Text>
                <Text style={[styles.targetValue, { color: achievementStatus.color }]}>
                  {percentageOfTarget.toFixed(0)}%
                </Text>
              </View>
            </View>
            
            <Text style={[styles.achievementText, { color: achievementStatus.color }]}>
              {achievementStatus.text}
            </Text>
            <Text style={styles.achievementMessage}>{achievementStatus.message}</Text>
          </View>
          
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { 
                    width: `${Math.min(percentageOfTarget, 150)}%`,
                    backgroundColor: achievementStatus.color 
                  }
                ]} 
              />
              <View style={styles.optimalMarker} />
            </View>
            <Text style={styles.progressLabel}>0%</Text>
            <Text style={[styles.progressLabel, styles.progressLabelMiddle]}>100%</Text>
            <Text style={[styles.progressLabel, styles.progressLabelEnd]}>150%</Text>
          </View>
        </View>
        
        {/* Enhanced Radar Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Emissions by Category</Text>
          <Text style={styles.chartSubtitle}>
            Actual vs Optimal Levels (dotted line)
          </Text>
          <RadarChart 
            data={categoryData}
            size={chartSize}
            showGrid={true}
            showLabels={true}
            fillOpacity={0.3}
            showOptimalLevel={true}
            optimalTotal={optimalTotal}
            labelFontSize={12}
          />

          {/* Legend */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendLine, { backgroundColor: colors.primary }]} />
              <Text style={styles.legendText}>Your Emissions</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendLine, { borderStyle: 'dashed', borderWidth: 2, borderColor: colors.success, backgroundColor: 'transparent' }]} />
              <Text style={styles.legendText}>Optimal Target</Text>
            </View>
          </View>
        </View>

        {/* ✅ Reset Button */}
        <TouchableOpacity style={styles.resetButton} onPress={() => resetEntries()}>
          <Text style={styles.resetButtonText}>Reset Data</Text>
        </TouchableOpacity>
        
        {/* Projections Card */}
        <View style={styles.projectionsCard}>
          <View style={styles.projectionsHeader}>
            <TrendingUp size={20} color={colors.primary} />
            <Text style={styles.projectionsTitle}>Projections Based on Current Usage</Text>
          </View>
          
          <View style={styles.projectionRow}>
            <Text style={styles.projectionLabel}>Daily Average:</Text>
            <Text style={styles.projectionValue}>{dailyAverage.toFixed(1)} kg</Text>
            <Text style={[
              styles.projectionStatus, 
              { color: dailyAverage <= OPTIMAL_TARGETS.daily ? colors.success : colors.error }
            ]}>
              (Target: {OPTIMAL_TARGETS.daily} kg)
            </Text>
          </View>
          
          <View style={styles.projectionRow}>
            <Text style={styles.projectionLabel}>Monthly Projection:</Text>
            <Text style={styles.projectionValue}>{monthlyProjection.toFixed(0)} kg</Text>
            <Text style={[
              styles.projectionStatus, 
              { color: monthlyProjection <= OPTIMAL_TARGETS.monthly ? colors.success : colors.error }
            ]}>
              (Target: {OPTIMAL_TARGETS.monthly} kg)
            </Text>
          </View>
          
          <View style={styles.projectionRow}>
            <Text style={styles.projectionLabel}>Yearly Projection:</Text>
            <Text style={styles.projectionValue}>{(yearlyProjection / 1000).toFixed(1)} tons</Text>
            <Text style={[
              styles.projectionStatus, 
              { color: yearlyProjection <= OPTIMAL_TARGETS.yearly ? colors.success : colors.error }
            ]}>
              (Target: {(OPTIMAL_TARGETS.yearly / 1000).toFixed(1)} tons)
            </Text>
          </View>
        </View>
        
        {/* Action Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <AlertCircle size={20} color={colors.primary} />
            <Text style={styles.tipsTitle}>Tips to Achieve Your Target</Text>
          </View>
          
          {(() => {
            const maxCategory = categoryData.reduce((max, item) => 
              item.value > max.value ? item : max
            );
            const overTargetCategories = categoryData.filter(
              item => item.optimalValue && item.value > item.optimalValue
            );
            
            return (
              <View>
                {overTargetCategories.length > 0 ? (
                  <>
                    <Text style={styles.tipText}>
                      • Focus on reducing <Text style={styles.tipHighlight}>{maxCategory.category}</Text> emissions - your highest category
                    </Text>
                    {overTargetCategories.map(cat => (
                      <Text key={cat.category} style={styles.tipText}>
                        • {cat.category}: Reduce by {(cat.value - (cat.optimalValue || 0)).toFixed(1)} kg to meet target
                      </Text>
                    ))}
                  </>
                ) : (
                  <Text style={styles.tipText}>
                    • Great job! You're meeting all category targets. Keep it up! 🌱
                  </Text>
                )}
                <Text style={styles.tipText}>
                  • Small daily changes add up: walk more, eat local, save energy
                </Text>
              </View>
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
    fontSize: 26,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
  },
  timeRangeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  timeRangeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  activeTimeRange: {
    backgroundColor: colors.primary,
  },
  timeRangeText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600" as const,
  },
  activeTimeRangeText: {
    color: "#FFFFFF",
  },
  
  // Target Card Styles
  targetCard: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  targetHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  targetTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  targetContent: {
    marginBottom: 12,
  },
  targetValues: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  targetDivider: {
    width: 1,
    backgroundColor: "#E0E0E0",
  },
  targetLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    textAlign: "center",
  },
  targetValue: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: colors.text,
    textAlign: "center",
  },
  achievementText: {
    fontSize: 18,
    fontWeight: "700" as const,
    textAlign: "center",
    marginBottom: 4,
  },
  achievementMessage: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  progressContainer: {
    position: "relative",
    marginTop: 8,
  },
  progressBar: {
    height: 12,
    backgroundColor: "#F0F0F0",
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
  },
  progressFill: {
    height: "100%",
    borderRadius: 6,
  },
  optimalMarker: {
    position: "absolute",
    left: "66.67%", // 100% position
    width: 2,
    height: "100%",
    backgroundColor: colors.text,
  },
  progressLabel: {
    position: "absolute",
    fontSize: 10,
    color: "#999",
    top: 15,
  },
  progressLabelMiddle: {
    left: "66.67%",
    transform: [{ translateX: -15 }],
  },
  progressLabelEnd: {
    right: 0,
  },
  
  // Chart Styles
  chartContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    paddingBottom: 40,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 16,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendLine: {
    width: 20,
    height: 3,
  },
  legendText: {
    fontSize: 13,
    color: "#666",
  },
  
  // Projections Card
  projectionsCard: {
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
  projectionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  projectionsTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  projectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  projectionLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  projectionValue: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginRight: 8,
  },
  projectionStatus: {
    fontSize: 13,
  },
  
  // Tips Card
  tipsCard: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  tipText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
    lineHeight: 20,
  },
  tipHighlight: {
    color: colors.primary,
    fontWeight: "600" as const,
  },
  // ✅ Reset Button
  resetButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.error,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});