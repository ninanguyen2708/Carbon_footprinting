import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Car, Utensils, Lightbulb, Trash2, Package } from "lucide-react-native";
import colors from "@/constants/colors";
import { CarbonCategory } from "@/types";

type CategoryPickerProps = {
  selectedCategory: CarbonCategory | null;
  onSelectCategory: (category: CarbonCategory) => void;
};

export default function CategoryPicker({
  selectedCategory,
  onSelectCategory,
}: CategoryPickerProps) {
  const categories: { id: CarbonCategory; label: string; icon: React.ReactNode }[] = [
    {
      id: "transport",
      label: "Transport",
      icon: <Car size={24} color={selectedCategory === "transport" ? "#FFFFFF" : colors.transport} />,
    },
    {
      id: "food",
      label: "Food",
      icon: <Utensils size={24} color={selectedCategory === "food" ? "#FFFFFF" : colors.food} />,
    },
    {
      id: "energy",
      label: "Energy",
      icon: <Lightbulb size={24} color={selectedCategory === "energy" ? "#FFFFFF" : colors.energy} />,
    },
    {
      id: "waste",
      label: "Waste",
      icon: <Trash2 size={24} color={selectedCategory === "waste" ? "#FFFFFF" : colors.waste} />,
    },
    {
      id: "other",
      label: "Other",
      icon: <Package size={24} color={selectedCategory === "other" ? "#FFFFFF" : colors.other} />,
    },
  ];

  const getCategoryColor = (category: CarbonCategory) => {
    switch (category) {
      case "transport":
        return colors.transport;
      case "food":
        return colors.food;
      case "energy":
        return colors.energy;
      case "waste":
        return colors.waste;
      case "other":
        return colors.other;
    }
  };

  return (
    <View style={styles.container} testID="category-picker">
      <Text style={styles.label}>Select Category</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && {
                backgroundColor: getCategoryColor(category.id),
              },
            ]}
            onPress={() => onSelectCategory(category.id)}
            testID={`category-${category.id}`}
          >
            <View style={styles.iconContainer}>{category.icon}</View>
            <Text
              style={[
                styles.categoryLabel,
                selectedCategory === category.id && styles.selectedCategoryLabel,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600" as const,
    marginBottom: 12,
    color: colors.text,
  },
  categoriesContainer: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryButton: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
  },
  iconContainer: {
    marginBottom: 4,
  },
  categoryLabel: {
    fontSize: 12,
    color: colors.text,
    textAlign: "center",
  },
  selectedCategoryLabel: {
    color: "#FFFFFF",
    fontWeight: "600" as const,
  },
});