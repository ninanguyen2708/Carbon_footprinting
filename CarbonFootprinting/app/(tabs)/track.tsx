import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Alert
} from "react-native";
import { ChevronDown, ChevronUp, Info } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import CategoryPicker from "@/components/CategoryPicker";
import Button from "@/components/Button";
import colors from "@/constants/colors";
import { CarbonActivity, CarbonCategory } from "@/types";
import { goBack } from "expo-router/build/global-state/routing";

export default function TrackScreen() {
  const { addEntry, getActivitiesByCategory } = useCarbonData();
  const [selectedCategory, setSelectedCategory] = useState<CarbonCategory | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<CarbonActivity | any>(null);
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [showActivities, setShowActivities] = useState(false);
  const [loading, setLoading] = useState(false);

  const activities: CarbonActivity[] = selectedCategory ? getActivitiesByCategory(selectedCategory) : [];

  const handleCategorySelect = (category: CarbonCategory) => {
    setSelectedCategory(category);
    setSelectedActivity(null);
    setShowActivities(true);
  };

  const handleActivitySelect = (activity: CarbonActivity) => {
    setSelectedActivity(activity);
    setShowActivities(false);
  };

  const handleSubmit = () => {
    if (!selectedCategory || !selectedActivity) {
      Alert.alert("Error", "Please select a category and activity");
      return;
    }

    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) {
      Alert.alert("Error", "Please enter a valid quantity");
      return;
    }

    setLoading(true);

    const carbonValue = Number(quantity) * selectedActivity.carbonValue;
    
    addEntry({
      date: new Date().toISOString(),
      category: selectedCategory,
      activity: selectedActivity.name,
      carbonValue,
      notes: notes.trim() || undefined,
    });

    // Reset form
    setSelectedCategory(null);
    setSelectedActivity(null);
    setQuantity("");
    setNotes("");
    setLoading(false);
    
    Alert.alert(
      "Success",
      `Added ${carbonValue.toFixed(2)} kg CO₂e to your carbon footprint`,
      [{ text: "OK" }]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer}
        testID="track-screen"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Track Carbon Footprint</Text>
          <Text style={styles.subtitle}>
            Record your daily activities to calculate your carbon footprint
          </Text>
        </View>
        
        <View style={styles.formContainer}>
          <CategoryPicker
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          {selectedCategory && !selectedActivity && (
            <View style={styles.section}>
              {/* <TouchableOpacity
                style={styles.dropdownHeader}
                onPress={() => setShowActivities(!showActivities)}
                testID="activities-dropdown"
              > */}
                <Text style={styles.sectionTitle}>Select Activity</Text>
                {/* {showActivities ? (
                  <ChevronUp size={20} color="#666" />
                ) : (
                  <ChevronDown size={20} color="#666" />
                )}
              </TouchableOpacity> */}
              
              {showActivities && (
                <View style={styles.activitiesList}>
                  {activities.map((activity) => (
                    <TouchableOpacity
                      key={activity.id}
                      style={[
                        styles.activityItem,
                        selectedActivity?.id === activity.id && styles.selectedActivityItem,
                      ]}
                      onPress={() => handleActivitySelect(activity)}
                      testID={`activity-${activity.id}`}
                    >
                      <View style={styles.activityContent}>
                        <Text
                          style={[
                            styles.activityName,
                            selectedActivity?.id === activity.id && styles.selectedActivityText,
                          ]}
                        >
                          {activity.name}
                        </Text>
                        <Text
                          style={[
                            styles.activityValue,
                            selectedActivity && selectedActivity.id === activity.id && styles.selectedActivityText,
                          ]}
                        >
                          {activity.carbonValue} kg CO₂e/{activity.unit}
                        </Text>
                      </View>
                      
                      {activity.description && (
                        <TouchableOpacity
                          style={styles.infoButton}
                          onPress={() => Alert.alert("Info", activity.description)}
                        >
                          <Info size={16} color="#666" />
                        </TouchableOpacity>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
          
          {selectedActivity && (
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <TextInput
                  style={styles.quantityInput}
                  value={quantity}
                  onChangeText={setQuantity}
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  testID="quantity-input"
                />
                <Text style={styles.unitText}>{selectedActivity.unit}</Text>
              </View>
              
              <View style={styles.calculationContainer}>
                <Text style={styles.calculationText}>
                  {selectedActivity.carbonValue} kg CO₂e × {quantity || "0"} {selectedActivity.unit} =
                </Text>
                <Text style={styles.totalValue}>
                  {(selectedActivity.carbonValue * (Number(quantity) || 0)).toFixed(2)} kg CO₂e
                </Text>
              </View>
            </View>
          )}
          
          {selectedActivity && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Notes (Optional)</Text>
              <TextInput
                style={styles.notesInput}
                value={notes}
                onChangeText={setNotes}
                placeholder="Add any additional details"
                multiline
                numberOfLines={3}
                testID="notes-input"
              />
            </View>
          )}
          
          {selectedActivity && (
            <View>
              <Button
                title="Cancel"
                onPress={() => {
                  // setSelectedCategory(null);
                  setShowActivities(true);
                  setSelectedActivity(null);
                  setQuantity("");
                  setNotes("");
                }}
              />    
              <Button
                title="Add Entry"
                onPress={handleSubmit}
                loading={loading}
                style={styles.submitButton}
                testID="submit-button"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  section: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 8,
  },
  activitiesList: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    // maxHeight: 200,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  selectedActivityItem: {
    backgroundColor: colors.primary,
  },
  activityContent: {
    flex: 1,
  },
  activityName: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  activityValue: {
    fontSize: 14,
    color: "#666",
  },
  selectedActivityText: {
    color: "#FFFFFF",
  },
  infoButton: {
    padding: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  unitText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#666",
  },
  calculationContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  calculationText: {
    fontSize: 14,
    color: "#666",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: colors.primary,
    marginTop: 4,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    textAlignVertical: "top",
    minHeight: 80,
  },
  submitButton: {
    marginTop: 8,
  },
});