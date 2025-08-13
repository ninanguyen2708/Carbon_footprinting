import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { Leaf, Calendar, TrendingDown, TrendingUp } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import { useAuth } from "@/providers/AuthProvider";
import CarbonSummaryCard from "@/components/CarbonSummaryCard";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";

type TimeRange = "daily" | "weekly" | "monthly";

export default function DashboardScreen() {
  const { user } = useAuth();
  const { dailyTotals, weeklyTotals, monthlyTotals, isLoading } = useCarbonData();
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: ["carbonEntries", user?.id] });
    setRefreshing(false);
  };

  const getTimeRangeData = () => {
    switch (timeRange) {
      case "daily":
        return dailyTotals;
      case "weekly":
        return weeklyTotals;
      case "monthly":
        return monthlyTotals;
      default:
        return dailyTotals;
    }
  };

  const calculateTrend = () => {
    const data = getTimeRangeData();
    if (data.length < 2) return null;
    
    const current = data[0].total;
    const previous = data[1].total;
    
    if (previous === 0) return { isUp: false, percentage: 0 };
    
    const difference = current - previous;
    const percentage = Math.abs((difference / previous) * 100);
    
    return {
      isUp: difference > 0,
      percentage: Math.round(percentage),
    };
  };

  const trend = calculateTrend();

  const renderContent = () => {
    const data = getTimeRangeData();
    
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }
    
    if (data.length === 0) {
      return (
        <EmptyState
          title="No Data Yet"
          message="Start tracking your carbon footprint to see your impact over time."
          icon={<Leaf size={48} color={colors.primary} />}
          actionLabel="Track Now"
          onAction={() => {"./track"}}
        />
      );
    }
    
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data.map((item, index) => (
          <CarbonSummaryCard
            key={index}
            data={item}
            type={timeRange}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container} testID="dashboard-screen">
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello, {user?.displayName || "User"}
        </Text>
        <Text style={styles.date}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>
      
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryIconContainer}>
            <Calendar size={24} color={colors.primary} />
          </View>
          <View>
            <Text style={styles.summaryLabel}>Current Period</Text>
            <Text style={styles.summaryValue}>
              {getTimeRangeData()[0]?.total.toFixed(2) || "0.00"} kg CO₂e
            </Text>
          </View>
        </View>
        
        {trend && (
          <View style={styles.summaryCard}>
            <View style={[
              styles.summaryIconContainer,
              { backgroundColor: trend.isUp ? "#FFEBEE" : "#E8F5E9" }
            ]}>
              {trend.isUp ? (
                <TrendingUp size={24} color={colors.error} />
              ) : (
                <TrendingDown size={24} color={colors.success} />
              )}
            </View>
            <View>
              <Text style={styles.summaryLabel}>vs Previous</Text>
              <Text style={[
                styles.summaryValue,
                { color: trend.isUp ? colors.error : colors.success }
              ]}>
                {trend.isUp ? "+" : "-"}{trend.percentage}%
              </Text>
            </View>
          </View>
        )}
      </View>
      
      <View style={styles.timeRangeContainer}>
        <TouchableOpacity
          style={[
            styles.timeRangeButton,
            timeRange === "daily" && styles.activeTimeRangeButton,
          ]}
          onPress={() => setTimeRange("daily")}
          testID="daily-button"
        >
          <Text
            style={[
              styles.timeRangeText,
              timeRange === "daily" && styles.activeTimeRangeText,
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.timeRangeButton,
            timeRange === "weekly" && styles.activeTimeRangeButton,
          ]}
          onPress={() => setTimeRange("weekly")}
          testID="weekly-button"
        >
          <Text
            style={[
              styles.timeRangeText,
              timeRange === "weekly" && styles.activeTimeRangeText,
            ]}
          >
            Weekly
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.timeRangeButton,
            timeRange === "monthly" && styles.activeTimeRangeButton,
          ]}
          onPress={() => setTimeRange("monthly")}
          testID="monthly-button"
        >
          <Text
            style={[
              styles.timeRangeText,
              timeRange === "monthly" && styles.activeTimeRangeText,
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  summaryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: colors.text,
  },
  timeRangeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  timeRangeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  activeTimeRangeButton: {
    backgroundColor: colors.primary,
  },
  timeRangeText: {
    fontSize: 14,
    color: "#666",
  },
  activeTimeRangeText: {
    color: "#FFFFFF",
    fontWeight: "600" as const,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});