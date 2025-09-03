// import createContextHook from "@nkzw/create-context-hook";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState, useEffect } from "react";
// import { Alert } from "react-native";
// import { CarbonEntry, DailyTotal, WeeklyTotal, MonthlyTotal, CarbonCategory } from "@/types";
// import { useAuth } from "@/providers/AuthProvider";
// import { carbonActivities } from "@/data/carbonActivities";

// export const [CarbonDataProvider, useCarbonData] = createContextHook(() => {
//   const { user } = useAuth();
//   const queryClient = useQueryClient();
//   const userId = user?.id;

//   // Fetch all carbon entries for the current user
//   const entriesQuery = useQuery({
//     queryKey: ["carbonEntries", userId],
//     queryFn: async () => {
//       if (!userId) return [];
      
//       try {
//         const storedEntries = await AsyncStorage.getItem(`carbonEntries-${userId}`);
//         return storedEntries ? JSON.parse(storedEntries) as CarbonEntry[] : [];
//       } catch (error) {
//         console.error("Failed to load carbon entries:", error);
//         return [];
//       }
//     },
//     enabled: !!userId,
//   });

//   // Add a new carbon entry
//   const addEntryMutation = useMutation({
//     mutationFn: async (entry: Omit<CarbonEntry, "id" | "userId" | "createdAt">) => {
//       if (!userId) throw new Error("User not authenticated");
      
//       const newEntry: CarbonEntry = {
//         ...entry,
//         id: "entry-" + Math.random().toString(36).substr(2, 9),
//         userId,
//         createdAt: Date.now(),
//       };
      
//       const currentEntries = entriesQuery.data || [];
//       const updatedEntries = [...currentEntries, newEntry];
      
//       await AsyncStorage.setItem(`carbonEntries-${userId}`, JSON.stringify(updatedEntries));
//       return newEntry;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
//       queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
//       queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
//       queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
//     },
//     onError: (error) => {
//       Alert.alert("Error", "Failed to add carbon entry: " + (error instanceof Error ? error.message : "Unknown error"));
//     },
//   });

//   // Delete a carbon entry
//   const deleteEntryMutation = useMutation({
//     mutationFn: async (entryId: string) => {
//       if (!userId) throw new Error("User not authenticated");
      
//       const currentEntries = entriesQuery.data || [];
//       const updatedEntries = currentEntries.filter(entry => entry.id !== entryId);
      
//       await AsyncStorage.setItem(`carbonEntries-${userId}`, JSON.stringify(updatedEntries));
//       return entryId;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
//       queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
//       queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
//       queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
//     },
//     onError: (error) => {
//       Alert.alert("Error", "Failed to delete carbon entry: " + (error instanceof Error ? error.message : "Unknown error"));
//     },
//   });

//   // Calculate daily totals
//   const dailyTotalsQuery = useQuery({
//     queryKey: ["dailyTotals", userId],
//     queryFn: () => {
//       if (!entriesQuery.data) return [];
      
//       const entries = entriesQuery.data;
//       const dailyMap = new Map<string, DailyTotal>();
      
//       entries.forEach(entry => {
//         const date = entry.date.split("T")[0]; // Get YYYY-MM-DD part
        
//         if (!dailyMap.has(date)) {
//           dailyMap.set(date, {
//             date,
//             total: 0,
//             transport: 0,
//             food: 0,
//             energy: 0,
//             waste: 0,
//             other: 0,
//           });
//         }
        
//         const daily = dailyMap.get(date)!;
//         daily.total += entry.carbonValue;
//         daily[entry.category] += entry.carbonValue;
//       });
      
//       return Array.from(dailyMap.values()).sort((a, b) => 
//         new Date(b.date).getTime() - new Date(a.date).getTime()
//       );
//     },
//     enabled: !!entriesQuery.data,
//   });

//   // Calculate weekly totals
//   const weeklyTotalsQuery = useQuery({
//     queryKey: ["weeklyTotals", userId],
//     queryFn: () => {
//       if (!entriesQuery.data) return [];
      
//       const entries = entriesQuery.data;
//       const weeklyMap = new Map<string, WeeklyTotal>();
      
//       entries.forEach(entry => {
//         const date = new Date(entry.date);
//         const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
//         const startOfWeek = new Date(date);
//         startOfWeek.setDate(date.getDate() - dayOfWeek); // Set to Sunday
        
//         const endOfWeek = new Date(startOfWeek);
//         endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to Saturday
        
//         const weekKey = startOfWeek.toISOString().split("T")[0];
        
//         if (!weeklyMap.has(weekKey)) {
//           weeklyMap.set(weekKey, {
//             weekStart: startOfWeek.toISOString().split("T")[0],
//             weekEnd: endOfWeek.toISOString().split("T")[0],
//             total: 0,
//             transport: 0,
//             food: 0,
//             energy: 0,
//             waste: 0,
//             other: 0,
//           });
//         }
        
//         const weekly = weeklyMap.get(weekKey)!;
//         weekly.total += entry.carbonValue;
//         weekly[entry.category] += entry.carbonValue;
//       });
      
//       return Array.from(weeklyMap.values()).sort((a, b) => 
//         new Date(b.weekStart).getTime() - new Date(a.weekStart).getTime()
//       );
//     },
//     enabled: !!entriesQuery.data,
//   });

//   // Calculate monthly totals
//   const monthlyTotalsQuery = useQuery({
//     queryKey: ["monthlyTotals", userId],
//     queryFn: () => {
//       if (!entriesQuery.data) return [];
      
//       const entries = entriesQuery.data;
//       const monthlyMap = new Map<string, MonthlyTotal>();
      
//       entries.forEach(entry => {
//         const month = entry.date.substring(0, 7); // Get YYYY-MM part
        
//         if (!monthlyMap.has(month)) {
//           monthlyMap.set(month, {
//             month,
//             total: 0,
//             transport: 0,
//             food: 0,
//             energy: 0,
//             waste: 0,
//             other: 0,
//           });
//         }
        
//         const monthly = monthlyMap.get(month)!;
//         monthly.total += entry.carbonValue;
//         monthly[entry.category] += entry.carbonValue;
//       });
      
//       return Array.from(monthlyMap.values()).sort((a, b) => 
//         b.month.localeCompare(a.month)
//       );
//     },
//     enabled: !!entriesQuery.data,
//   });

//   // Get carbon activities
//   const getActivitiesByCategory = (category: CarbonCategory) => {
//     return carbonActivities.filter(activity => activity.category === category);
//   };

//   return {
//     entries: entriesQuery.data || [],
//     dailyTotals: dailyTotalsQuery.data || [],
//     weeklyTotals: weeklyTotalsQuery.data || [],
//     monthlyTotals: monthlyTotalsQuery.data || [],
//     isLoading: entriesQuery.isLoading,
//     addEntry: addEntryMutation.mutate,
//     deleteEntry: deleteEntryMutation.mutate,
//     getActivitiesByCategory,
//     carbonActivities,
//   };
// });

// providers/CarbonDataProvider.tsx - Firebase Version (Dynamic Data Only)
import createContextHook from "@nkzw/create-context-hook";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";
import { CarbonEntry, DailyTotal, WeeklyTotal, MonthlyTotal, CarbonCategory, CarbonActivity } from "@/types";
import { useAuth } from "@/providers/AuthProvider";
import { 
  collection, 
  doc, 
  addDoc, 
  deleteDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { db } from '@/constants/firebase';

export const [CarbonDataProvider, useCarbonData] = createContextHook(() => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;

  // Fetch carbon activities from Firebase (static data)
  const activitiesQuery = useQuery({
    queryKey: ["carbonActivities"],
    queryFn: async () => {
      try {
        const categoriesDoc = await getDoc(doc(db, 'categories', 'default'));
        if (!categoriesDoc.exists()) return [];

        const categoriesData = categoriesDoc.data();
        const activities: CarbonActivity[] = [];

        // Convert Firebase structure to CarbonActivity array
        Object.keys(categoriesData).forEach(category => {
          const categoryData = categoriesData[category];
          Object.keys(categoryData.activities || {}).forEach(activityId => {
            const activity = categoryData.activities[activityId];
            activities.push({
              id: activityId,
              name: activity.name,
              category: category as CarbonCategory,
              carbonValue: activity.carbonValue,
              unit: activity.unit,
              description: activity.description || ''
            });
          });
        });

        return activities;
      } catch (error) {
        console.error("Failed to load carbon activities:", error);
        return [];
      }
    },
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes since this is static data
  });

  // Fetch user carbon entries (dynamic data)
  const entriesQuery = useQuery({
    queryKey: ["carbonEntries", userId],
    queryFn: async () => {
      if (!userId) return [];
      
      try {
        const q = query(
          collection(db, 'users', userId, 'entries'),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const entries: CarbonEntry[] = [];
        
        querySnapshot.forEach((doc) => {
          entries.push({
            id: doc.id,
            ...doc.data()
          } as CarbonEntry);
        });
        
        return entries;
      } catch (error) {
        console.error("Failed to load carbon entries:", error);
        return [];
      }
    },
    enabled: !!userId,
  });

  // Add new carbon entry
  const addEntryMutation = useMutation({
    mutationFn: async (entry: Omit<CarbonEntry, "id" | "userId" | "createdAt">) => {
      if (!userId) throw new Error("User not authenticated");
      
      const cleanEntry: any = {
        createdAt: Date.now(),
        date: entry.date,
        category: entry.category,
        activity: entry.activity,
        carbonValue: entry.carbonValue,
      };
      
      // Chỉ thêm notes nếu có
      if (entry.notes && entry.notes.trim()) {
        cleanEntry.notes = entry.notes.trim();
      }
      
      const docRef = await addDoc(
        collection(db, 'users', userId, 'entries'),
        cleanEntry
      );
      return { ...cleanEntry, id: docRef.id };
    },
    onSuccess: () => {
      // Force refetch all queries
      queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
      queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
    },
    onError: (error) => {
      console.error("Failed to add entry:", error);
      Alert.alert("Error", "Failed to add carbon entry: " + (error instanceof Error ? error.message : "Unknown error"));
    },
  });

  // Delete carbon entry
  const deleteEntryMutation = useMutation({
    mutationFn: async (entryId: string) => {
      if (!userId) throw new Error("User not authenticated");
      await deleteDoc(doc(db, 'users', userId, 'entries', entryId));
      return entryId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carbonEntries", userId] });
      queryClient.invalidateQueries({ queryKey: ["dailyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["weeklyTotals", userId] });
      queryClient.invalidateQueries({ queryKey: ["monthlyTotals", userId] });
    },
    onError: (error) => {
      Alert.alert("Error", "Failed to delete entry: " + (error instanceof Error ? error.message : "Unknown error"));
    },
  });

  // Calculate daily totals (computed from entries)
  const dailyTotalsQuery = useQuery({
    queryKey: ["dailyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const dailyMap = new Map<string, DailyTotal>();
      
      entries.forEach(entry => {
        const date = entry.date.split("T")[0];
        
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

  // Calculate weekly totals (computed from entries)
  const weeklyTotalsQuery = useQuery({
    queryKey: ["weeklyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const weeklyMap = new Map<string, WeeklyTotal>();
      
      entries.forEach(entry => {
        const date = new Date(entry.date);
        const dayOfWeek = date.getDay();
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - dayOfWeek);
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        
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

  // Calculate monthly totals (computed from entries)
  const monthlyTotalsQuery = useQuery({
    queryKey: ["monthlyTotals", userId],
    queryFn: () => {
      if (!entriesQuery.data) return [];
      
      const entries = entriesQuery.data;
      const monthlyMap = new Map<string, MonthlyTotal>();
      
      entries.forEach(entry => {
        const month = entry.date.substring(0, 7);
        
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

  // Get activities by category (from static data)
  const getActivitiesByCategory = (category: CarbonCategory) => {
    return activitiesQuery.data?.filter(activity => activity.category === category) || [];
  };

  return {
    entries: entriesQuery.data || [],
    dailyTotals: dailyTotalsQuery.data || [],
    weeklyTotals: weeklyTotalsQuery.data || [],
    monthlyTotals: monthlyTotalsQuery.data || [],
    carbonActivities: activitiesQuery.data || [],
    isLoading: entriesQuery.isLoading || activitiesQuery.isLoading,
    addEntry: addEntryMutation.mutate,
    addEntryAsync: addEntryMutation.mutateAsync,
    deleteEntry: deleteEntryMutation.mutate,
    getActivitiesByCategory,
  };
});