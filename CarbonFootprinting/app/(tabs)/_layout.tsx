import { Tabs } from "expo-router";
import { BarChart3, Plus, BookOpen, User, PieChart } from "lucide-react-native";
import React from "react";
import colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <BarChart3 size={24} color={color} />,
          tabBarLabel: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: "Track",
          tabBarIcon: ({ color }) => <Plus size={24} color={color} />,
          tabBarLabel: "Track",
        }}
      />
      <Tabs.Screen
        name="emissions"
        options={{
          title: "Emissions",
          tabBarIcon: ({ color }) => <PieChart size={24} color={color} />,
          tabBarLabel: "Analysis",
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => <BookOpen size={24} color={color} />,
          tabBarLabel: "Learn",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}