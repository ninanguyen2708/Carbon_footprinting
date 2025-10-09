import React, { useState, useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  ActivityIndicator,
  Alert,
  Linking
} from "react-native";
import { PieChart, Activity, Target, TrendingUp, AlertCircle, BarChart3, Radar, Info, TreePine, ExternalLink } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import EmissionsBarChart from "@/components/EmissionsBarChart";
import ImprovedRadarChart from "@/components/ImprovedRadarChart";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";
import { router } from "expo-router";

type TimeRange = "daily" | "weekly";
type ChartType = "bar" | "radar";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Optimal carbon targets based on IPCC recommendations for 1.5°C warming limit
// Source: IPCC SR15 (2018) and UK Committee on Climate Change
const OPTIMAL_TARGETS = {
  daily: 5.5,      // 5.5 kg/day (2 tons/year target)
  weekly: 38.5,    // 38.5 kg/week
  
  // Category-specific daily targets (proportional breakdown)
  categories: {
    daily: {
      transport: 1.65,  // 30% of daily
      food: 1.38,        // 25% of daily
      energy: 1.1,       // 20% of daily
      waste: 0.55,       // 10% of daily
      other: 0.82,       // 15% of daily
    },
    weekly: {
      transport: 11.55,  // 30% of weekly
      food: 9.63,        // 25% of weekly
      energy: 7.7,       // 20% of weekly
      waste: 3.85,       // 10% of weekly
      other: 5.77,       // 15% of weekly
    }
  }
};

export default function EmissionsScreen() {
  const { entries, isLoading, resetEntries } = useCarbonData();
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [showOptimalExplanation, setShowOptimalExplanation] = useState(false);
  
  // Open reference link
  const openReferenceLink = () => {
    Linking.openURL('https://www.ipcc.ch/sr15/chapter/spm/');
  };
  
  // Calculate current optimal target based on time range
  const getOptimalTarget = () => {
    return timeRange === "daily" ? OPTIMAL_TARGETS.daily : OPTIMAL_TARGETS.weekly;
  };
  
  // Calculate category totals and optimal values based on time range
  const categoryData = useMemo(() => {
    let filteredEntries = entries;
    const now = new Date();
    
    // Filter entries based on time range
    if (timeRange === "daily") {
      // Today's entries only
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      filteredEntries = entries.filter(e => {
        const entryDate = new Date(e.date);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === today.getTime();
      });
    } else {
      // This week's entries
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      filteredEntries = entries.filter(e => new Date(e.date) >= weekAgo);
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
    
    // Get appropriate optimal values
    const optimalCategories = OPTIMAL_TARGETS.categories[timeRange];
    
    // Create data with optimal values
    return [
      { 
        category: "Transport", 
        value: totals.transport, 
        color: colors.transport,
        optimalValue: optimalCategories.transport
      },
      { 
        category: "Food", 
        value: totals.food, 
        color: colors.food,
        optimalValue: optimalCategories.food
      },
      { 
        category: "Energy", 
        value: totals.energy, 
        color: colors.energy,
        optimalValue: optimalCategories.energy
      },
      { 
        category: "Waste", 
        value: totals.waste, 
        color: colors.waste,
        optimalValue: optimalCategories.waste
      },
      { 
        category: "Other", 
        value: totals.other, 
        color: colors.other,
        optimalValue: optimalCategories.other
      },
    ];
  }, [entries, timeRange]);
  
  const totalEmissions = categoryData.reduce((sum, item) => sum + item.value, 0);
  const optimalTotal = getOptimalTarget();
  const percentageOfTarget = optimalTotal > 0 ? (totalEmissions / optimalTotal) * 100 : 0;
  const totalDifference = totalEmissions - optimalTotal;
  
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
        
        {/* Time Range Selector - Daily/Weekly only */}
        <View style={styles.timeRangeContainer}>
          <TouchableOpacity
            style={[styles.timeRangeButton, timeRange === "daily" && styles.activeTimeRange]}
            onPress={() => setTimeRange("daily")}
          >
            <Text style={[styles.timeRangeText, timeRange === "daily" && styles.activeTimeRangeText]}>
              Today
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.timeRangeButton, timeRange === "weekly" && styles.activeTimeRange]}
            onPress={() => setTimeRange("weekly")}
          >
            <Text style={[styles.timeRangeText, timeRange === "weekly" && styles.activeTimeRangeText]}>
              This Week
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Target Progress Card */}
        <View style={[styles.targetCard, { borderLeftColor: achievementStatus.color }]}>
          <View style={styles.targetHeader}>
            <Target size={20} color={achievementStatus.color} />
            <Text style={styles.targetTitle}>Carbon Target Progress</Text>
            <TouchableOpacity onPress={() => setShowOptimalExplanation(!showOptimalExplanation)}>
              <Info size={16} color="#666" />
            </TouchableOpacity>
          </View>
          
          {showOptimalExplanation && (
            <View style={styles.explanationBox}>
              <Text style={styles.explanationTitle}>How Targets are Calculated 📊</Text>
              <Text style={styles.explanationText}>
                Based on IPCC recommendations for limiting warming to 1.5°C:
              </Text>
              <Text style={styles.explanationBullet}>• Individual annual budget: 2 tons CO₂e/year</Text>
              <Text style={styles.explanationBullet}>• Daily target: 5.5 kg CO₂e</Text>
              <Text style={styles.explanationBullet}>• Weekly target: 38.5 kg CO₂e</Text>
              <Text style={styles.explanationNote}>
                Distribution across categories based on average consumption patterns.
              </Text>
              <TouchableOpacity onPress={openReferenceLink} style={styles.referenceLink}>
                <ExternalLink size={12} color={colors.primary} />
                <Text style={styles.referenceLinkText}>IPCC SR15 Report</Text>
              </TouchableOpacity>
            </View>
          )}
          
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
                <Text style={styles.targetValue}>{optimalTotal.toFixed(1)} kg</Text>
              </View>
              <View style={styles.targetDivider} />
              <View>
                <Text style={styles.targetLabel}>Difference</Text>
                <Text style={[styles.targetValue, { color: achievementStatus.color }]}>
                  {totalDifference > 0 ? '+' : ''}{totalDifference.toFixed(1)} kg
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
        
        {/* Chart Type Toggle */}
        <View style={styles.chartToggleContainer}>
          <Text style={styles.toggleLabel}>Chart Type:</Text>
          <View style={styles.toggleButtons}>
            <TouchableOpacity
              style={[styles.toggleButton, chartType === "bar" && styles.activeToggle]}
              onPress={() => setChartType("bar")}
            >
              <BarChart3 size={16} color={chartType === "bar" ? "#FFF" : "#666"} />
              <Text style={[styles.toggleText, chartType === "bar" && styles.activeToggleText]}>Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, chartType === "radar" && styles.activeToggle]}
              onPress={() => setChartType("radar")}
            >
              <Radar size={16} color={chartType === "radar" ? "#FFF" : "#666"} />
              <Text style={[styles.toggleText, chartType === "radar" && styles.activeToggleText]}>Radar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Emissions Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Emissions by Category</Text>
          <Text style={styles.chartSubtitle}>
            {chartType === "bar" ? "Compare your actual emissions with optimal targets" : "Visualize your emission patterns"}
          </Text>
          
          {chartType === "bar" ? (
            <EmissionsBarChart data={categoryData} />
          ) : (
            <ImprovedRadarChart data={categoryData} />
          )}
        </View>

        {/* Reset Button */}
        <TouchableOpacity style={styles.resetButton} onPress={() => resetEntries()}>
          <Text style={styles.resetButtonText}>Reset Data</Text>
        </TouchableOpacity>

        {/* Combined Action Items & Tips */}
        <View style={styles.actionCard}>
          <View style={styles.actionHeader}>
            <TreePine size={20} color={colors.primary} />
            <Text style={styles.actionTitle}>Actions to Reach Your Target</Text>
          </View>
          
          {(() => {
            // Find categories over target and identify highest
            const overTargetCategories = categoryData
              .map(cat => ({
                ...cat,
                overAmount: cat.value - (cat.optimalValue || 0)
              }))
              .filter(cat => cat.overAmount > 0)
              .sort((a, b) => b.overAmount - a.overAmount);
            
            const highestOverCategory = overTargetCategories[0];
            
            if (overTargetCategories.length === 0) {
              return (
                <Text style={styles.actionSuccess}>
                  🎉 Excellent! You're meeting all targets. Keep up the sustainable lifestyle!
                </Text>
              );
            }
            
            return (
              <>
                {highestOverCategory && (
                  <View style={styles.priorityAlert}>
                    <AlertCircle size={16} color={colors.error} />
                    <Text style={styles.priorityText}>
                      <Text style={styles.priorityCategory}>{highestOverCategory.category}</Text> is your highest priority 
                      ({highestOverCategory.overAmount.toFixed(1)} kg over target)
                    </Text>
                  </View>
                )}
                
                {overTargetCategories.map((category) => {
                  const categoryKey = category.category.toLowerCase() as string;
                  const getActionText = () => {
                    switch(categoryKey) {
                      case 'transport':
                        return `Walk/bike for trips under 3km, or take public transport`;
                      case 'food':
                        return `Try ${Math.ceil(category.overAmount / 2)} plant-based meals`;
                      case 'energy':
                        return `Reduce heating/cooling by 1°C, unplug unused devices`;
                      case 'waste':
                        return `Recycle ${Math.ceil(category.overAmount * 2)} kg more materials`;
                      case 'other':
                        return `Buy secondhand or reduce new purchases`;
                      default:
                        return `Reduce consumption in this category`;
                    }
                  };
                  
                  const isHighest = category.category === highestOverCategory?.category;
                  
                  return (
                    <View key={category.category} style={[styles.actionItem, isHighest && styles.highestActionItem]}>
                      <Text style={[styles.actionCategory, isHighest && styles.highestActionCategory]}>
                        {category.category}:
                      </Text>
                      <Text style={styles.actionAmount}>
                        Reduce by {category.overAmount.toFixed(1)} kg:
                      </Text>
                      <Text style={styles.actionText}>{getActionText()}</Text>
                    </View>
                  );
                })}
              </>
            );
          })()}
          
          <View style={styles.quickTips}>
            <Text style={styles.quickTipsTitle}>Quick Daily Wins:</Text>
            <Text style={styles.tipText}>• 5-min shorter shower saves 0.5 kg CO₂</Text>
            <Text style={styles.tipText}>• Skipping one meat meal saves 2-3 kg CO₂</Text>
            <Text style={styles.tipText}>• Working from home saves 2-8 kg CO₂ (no commute)</Text>
            <Text style={styles.tipText}>• Air-drying clothes saves 0.7 kg CO₂ per load</Text>
          </View>
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
  
  // Time Range Styles
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
    flex: 1,
  },
  
  // Explanation Box
  explanationBox: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  explanationTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 6,
  },
  explanationText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  explanationBullet: {
    fontSize: 12,
    color: "#666",
    marginLeft: 8,
    marginBottom: 2,
  },
  explanationNote: {
    fontSize: 11,
    color: colors.primary,
    fontStyle: "italic",
    marginTop: 4,
  },
  referenceLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 6,
  },
  referenceLinkText: {
    fontSize: 11,
    color: colors.primary,
    textDecorationLine: "underline",
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
  
  // Progress Bar
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
    left: "66.67%",
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
  
  // Chart Toggle
  chartToggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
    gap: 12,
  },
  toggleLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500" as const,
  },
  toggleButtons: {
    flexDirection: "row",
    gap: 8,
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  activeToggle: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500" as const,
  },
  activeToggleText: {
    color: "#FFFFFF",
  },
  
  // Chart Container
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
    fontSize: 18,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  
  // Reset Button
  resetButton: {
    marginTop: 8,
    marginBottom: 16,
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
    fontWeight: "600" as const,
  },
  
  // Combined Action Card
  actionCard: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    marginBottom: 16,
  },
  actionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  priorityAlert: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFF3E0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.error,
  },
  priorityText: {
    fontSize: 13,
    color: "#333",
    flex: 1,
  },
  priorityCategory: {
    fontWeight: "700" as const,
    color: colors.error,
  },
  actionItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  highestActionItem: {
    backgroundColor: "#FFF8E1",
    padding: 10,
    borderRadius: 6,
    marginHorizontal: -10,
    borderBottomWidth: 0,
  },
  actionCategory: {
    fontSize: 14,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 2,
  },
  highestActionCategory: {
    color: colors.error,
  },
  actionAmount: {
    fontSize: 13,
    fontWeight: "600" as const,
    color: "#555",
    marginBottom: 2,
  },
  actionText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
  actionSuccess: {
    fontSize: 14,
    color: colors.success,
    fontWeight: "500" as const,
    textAlign: "center",
    marginVertical: 8,
  },
  quickTips: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)",
  },
  quickTipsTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 6,
  },
  tipText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 3,
    lineHeight: 16,
  },
});