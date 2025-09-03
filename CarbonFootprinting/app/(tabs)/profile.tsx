// app/(tabs)/profile.tsx - Fixed for Firebase Auth
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Switch, TouchableOpacity } from "react-native";
import { User, Settings, Shield, Bell, HelpCircle } from "lucide-react-native";
import { useAuth } from "@/providers/AuthProvider";
import Button from "@/components/Button";
import Input from "@/components/Input";
import colors from "@/constants/colors";

export default function ProfileScreen() {
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [university, setUniversity] = useState(user?.university || "");
  const [course, setCourse] = useState(user?.course || "");
  const [loading, setLoading] = useState(false);
  
  // Settings state
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const handleSaveProfile = async () => {
    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert("Error", "First name and last name are required");
      return;
    }

    try {
      setLoading(true);
      console.log('Saving profile with:', { firstName, lastName, university, course });
      
      // Firebase AuthProvider expects Partial<User> object
      const updates: any = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      };
      
      // Chỉ thêm university và course nếu có giá trị
      if (university.trim()) {
        updates.university = university.trim();
      }
      if (course.trim()) {
        updates.course = course.trim();
      }
      
      console.log('Saving profile with:', updates);

      await updateProfile(updates);

      setIsEditing(false);
      Alert.alert("Success", "Profile updated successfully");
      console.log('Profile saved successfully');
    } catch (error) {
      console.error("Failed to update profile:", error);
      Alert.alert("Error", "Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive",
          onPress: async () => {
            try {
              console.log('Logging out...');
              await logout();
            } catch (error) {
              console.error("Logout failed:", error);
              Alert.alert("Error", "Failed to logout. Please try again.");
            }
          }
        }
      ]
    );
  };

  const resetForm = () => {
    setFirstName(user?.firstName || "");
    setLastName(user?.lastName || "");
    setUniversity(user?.university || "");
    setCourse(user?.course || "");
  };

  const renderProfileSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        {!isEditing && (
          <TouchableOpacity 
            onPress={() => setIsEditing(true)}
            testID="edit-profile-button"
          >
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {isEditing ? (
        <View style={styles.editForm}>
          <Input
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            autoCapitalize="words"
            testID="first-name-input"
          />
          
          <Input
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            autoCapitalize="words"
            testID="last-name-input"
          />
          
          <Input
            label="University"
            value={university}
            onChangeText={setUniversity}
            placeholder="Enter your university (optional)"
            testID="university-input"
          />
          
          <Input
            label="Course/Major"
            value={course}
            onChangeText={setCourse}
            placeholder="Enter your course or major (optional)"
            testID="course-input"
          />
          
          <View style={styles.buttonRow}>
            <Button
              title="Cancel"
              onPress={() => {
                setIsEditing(false);
                resetForm();
              }}
              variant="outline"
              style={styles.cancelButton}
              testID="cancel-button"
            />
            
            <Button
              title="Save"
              onPress={handleSaveProfile}
              loading={loading}
              style={styles.saveButton}
              testID="save-button"
            />
          </View>
        </View>
      ) : (
        <View style={styles.profileInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>First Name</Text>
            <Text style={styles.infoValue}>{user?.firstName || "Not set"}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Last Name</Text>
            <Text style={styles.infoValue}>{user?.lastName || "Not set"}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Display Name</Text>
            <Text style={styles.infoValue}>{user?.displayName || "Not set"}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>University</Text>
            <Text style={styles.infoValue}>{user?.university || "Not set"}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Course/Major</Text>
            <Text style={styles.infoValue}>{user?.course || "Not set"}</Text>
          </View>
        </View>
      )}
    </View>
  );

  const renderSettingsSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <View style={styles.settingRow}>
        <View style={styles.settingInfo}>
          <Bell size={20} color="#666" />
          <Text style={styles.settingLabel}>Notifications</Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#E0E0E0", true: colors.primary }}
          thumbColor="#FFFFFF"
          testID="notifications-switch"
        />
      </View>
      
      <View style={styles.settingRow}>
        <View style={styles.settingInfo}>
          <Settings size={20} color="#666" />
          <Text style={styles.settingLabel}>Dark Mode</Text>
        </View>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          trackColor={{ false: "#E0E0E0", true: colors.primary }}
          thumbColor="#FFFFFF"
          testID="dark-mode-switch"
        />
      </View>
      
      <View style={styles.settingRow}>
        <View style={styles.settingInfo}>
          <Shield size={20} color="#666" />
          <Text style={styles.settingLabel}>Biometric Authentication</Text>
        </View>
        <Switch
          value={biometricEnabled}
          onValueChange={setBiometricEnabled}
          trackColor={{ false: "#E0E0E0", true: colors.primary }}
          thumbColor="#FFFFFF"
          testID="biometric-switch"
        />
      </View>
    </View>
  );

  const renderHelpSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Help & Support</Text>
      
      <TouchableOpacity style={styles.helpRow} testID="faq-button">
        <HelpCircle size={20} color="#666" />
        <Text style={styles.helpText}>FAQ</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.helpRow} testID="contact-button">
        <User size={20} color="#666" />
        <Text style={styles.helpText}>Contact Support</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.helpRow} testID="privacy-button">
        <Shield size={20} color="#666" />
        <Text style={styles.helpText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      testID="profile-screen"
    >
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <User size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.userName}>{user?.displayName || user?.email}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
      </View>
      
      {renderProfileSection()}
      {renderSettingsSection()}
      {renderHelpSection()}
      
      <Button
        title="Logout"
        onPress={handleLogout}
        variant="outline"
        style={styles.logoutButton}
        textStyle={{ color: colors.error }}
        testID="logout-button"
      />
    </ScrollView>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.text,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 16,
  },
  editButton: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600" as const,
  },
  profileInfo: {},
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "500" as const,
    flex: 2,
    textAlign: "right",
  },
  editForm: {},
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
  },
  saveButton: {
    flex: 1,
    marginLeft: 8,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingLabel: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
  helpRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  helpText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
  logoutButton: {
    marginTop: 8,
    borderColor: colors.error,
  },
});