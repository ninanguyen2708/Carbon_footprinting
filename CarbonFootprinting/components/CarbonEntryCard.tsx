import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";
import colors from "@/constants/colors";
import { CarbonEntry } from "@/types";

type CarbonEntryCardProps = {
  entry: CarbonEntry;
  onDelete: (id: string) => void;
};

export default function CarbonEntryCard({ entry, onDelete }: CarbonEntryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "transport":
        return colors.transport;
      case "food":
        return colors.food;
      case "energy":
        return colors.energy;
      case "waste":
        return colors.waste;
      default:
        return colors.other;
    }
  };

  return (
    <View style={styles.card} testID="carbon-entry-card">
      <View style={styles.header}>
        <View 
          style={[
            styles.categoryIndicator, 
            { backgroundColor: getCategoryColor(entry.category) }
          ]} 
        />
        <Text style={styles.category}>
          {entry.category.charAt(0).toUpperCase() + entry.category.slice(1)}
        </Text>
        <Text style={styles.date}>{formatDate(entry.date)}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.activity}>{entry.activity}</Text>
        <Text style={styles.carbonValue}>
          {entry.carbonValue.toFixed(2)} kg CO₂e
        </Text>
      </View>
      
      {entry.notes && (
        <Text style={styles.notes} numberOfLines={2}>
          {entry.notes}
        </Text>
      )}
      
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(entry.id)}
        testID="delete-entry-button"
      >
        <Trash2 size={16} color={colors.error} />
      </TouchableOpacity>
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
    alignItems: "center",
    marginBottom: 8,
  },
  categoryIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  category: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.text,
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  activity: {
    fontSize: 16,
    fontWeight: "500" as const,
    color: colors.text,
    flex: 1,
  },
  carbonValue: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: colors.primary,
  },
  notes: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  deleteButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    padding: 4,
  },
});