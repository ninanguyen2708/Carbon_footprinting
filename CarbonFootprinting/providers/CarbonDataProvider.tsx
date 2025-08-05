import createContextHook from "@nkzw/create-context-hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { CarbonEntry, DailyTotal, WeeklyTotal, MonthlyTotal, CarbonCategory } from "@/types";
import { useAuth } from "@/providers/AuthProvider";
import { carbonActivities } from "@/data/carbonActivities";

export const [CarbonDataProvider, useCarbonData] = createContextHook(() => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;

  // Fetch all carbon entries for the current user
  const entriesQuery = useQuery({
    queryKey: ["carbonEntries", userId],
    queryFn: async () => {
      if (!userId) return [];
      
      try {
        const storedEntries = await AsyncStorage.getItem(`carbonEntries-${userId}`);
        return storedEntries ? JSON.parse(storedEntries) as CarbonEntry[] : [];
      } catch (error) {
        console.error("Failed to load carbon entries:", error);
        return [];
      }
    },
    enabled: !!userId,
  });

  // Add a new carbon entry
  const addEntryMutation = useMutation({
    mutationFn: async (entry: Omit<CarbonEntry, "id" | "userId" | "createdAt">) => {
      if (!userId) throw new Error("User not authenticated");
      
      const newEntry: CarbonEntry = {
        ...entry,
        id: "entry-" + Math.random().toString(36).substr(2, 9),
        userId,
        createdAt: Date.now(),
      };
      
      const currentEntries = entriesQuery.data || [];
      const updatedEntries = [...currentEntries, newEntry];
      
      await AsyncStorage.setItem(`carbonEntries-${userId}`, JSON.stringify(updatedEntries));
      return newEntry;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
      queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
    },
    onError: (error) => {
      Alert.alert("Error", "Failed to add carbon entry: " + (error instanceof Error ? error.message : "Unknown error"));
    },
  });

  // Delete a carbon entry
  const deleteEntryMutation = useMutation({
    mutationFn: async (entryId: string) => {
      if (!userId) throw new Error("User not authenticated");
      
      const currentEntries = entriesQuery.data || [];
      const updatedEntries = currentEntries.filter(entry => entry.id !== entryId);
      
      await AsyncStorage.setItem(`carbonEntries-${userId}`, JSON.stringify(updatedEntries));
      return entryId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
      queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
    },
    onError: (error) => {
      Alert.alert("Error", "Failed to delete carbon entry: " + (error instanceof Error ? error.message : "Unknown error"));
    },
  });

  // Calculate daily totals
  const dailyTotalsQuery = useQuery({
    queryKey: ["dailyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const dailyMap = new Map<string, DailyTotal>();
      
      entries.forEach(entry => {
        const date = entry.date.split("T")[0]; // Get YYYY-MM-DD part
        
        if (!dailyMap.has(date)) {
          dailyMap.set(date, {
            date,
            total: 0,
            transport: 0,
            food: 0,
            energy: 0,
            waste: 0,
            other: 0,
          });
        }
        
        const daily = dailyMap.get(date)!;
        daily.total += entry.carbonValue;
        daily[entry.category] += entry.carbonValue;
      });
      
      return Array.from(dailyMap.values()).sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },
    enabled: !!entriesQuery.data,
  });

  // Calculate weekly totals
  const weeklyTotalsQuery = useQuery({
    queryKey: ["weeklyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const weeklyMap = new Map<string, WeeklyTotal>();
      
      entries.forEach(entry => {
        const date = new Date(entry.date);
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - dayOfWeek); // Set to Sunday
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to Saturday
        
        const weekKey = startOfWeek.toISOString().split("T")[0];
        
        if (!weeklyMap.has(weekKey)) {
          weeklyMap.set(weekKey, {
            weekStart: startOfWeek.toISOString().split("T")[0],
            weekEnd: endOfWeek.toISOString().split("T")[0],
            total: 0,
            transport: 0,
            food: 0,
            energy: 0,
            waste: 0,
            other: 0,
          });
        }
        
        const weekly = weeklyMap.get(weekKey)!;
        weekly.total += entry.carbonValue;
        weekly[entry.category] += entry.carbonValue;
      });
      
      return Array.from(weeklyMap.values()).sort((a, b) => 
        new Date(b.weekStart).getTime() - new Date(a.weekStart).getTime()
      );
    },
    enabled: !!entriesQuery.data,
  });

  // Calculate monthly totals
  const monthlyTotalsQuery = useQuery({
    queryKey: ["monthlyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const monthlyMap = new Map<string, MonthlyTotal>();
      
      entries.forEach(entry => {
        const month = entry.date.substring(0, 7); // Get YYYY-MM part
        
        if (!monthlyMap.has(month)) {
          monthlyMap.set(month, {
            month,
            total: 0,
            transport: 0,
            food: 0,
            energy: 0,
            waste: 0,
            other: 0,
          });
        }
        
        const monthly = monthlyMap.get(month)!;
        monthly.total += entry.carbonValue;
        monthly[entry.category] += entry.carbonValue;
      });
      
      return Array.from(monthlyMap.values()).sort((a, b) => 
        b.month.localeCompare(a.month)
      );
    },
    enabled: !!entriesQuery.data,
  });

  // Get carbon activities
  const getActivitiesByCategory = (category: CarbonCategory) => {
    return carbonActivities.filter(activity => activity.category === category);
  };

  return {
    entries: entriesQuery.data || [],
    dailyTotals: dailyTotalsQuery.data || [],
    weeklyTotals: weeklyTotalsQuery.data || [],
    monthlyTotals: monthlyTotalsQuery.data || [],
    isLoading: entriesQuery.isLoading,
    addEntry: addEntryMutation.mutate,
    deleteEntry: deleteEntryMutation.mutate,
    getActivitiesByCategory,
    carbonActivities,
  };
});