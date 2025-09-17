# .expo\devices.json

```json
{
  "devices": []
}

```

# .expo\README.md

```md
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

```

# .expo\settings.json

```json
{
  "urlRandomness": "HmT9QDc"
}

```

# .expo\types\router.d.ts

```ts
/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/emissions` | `/emissions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/learn` | `/learn`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/track` | `/track`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/emissions` | `/emissions`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/learn` | `/learn`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/track` | `/track`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/modal${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/emissions${`?${string}` | `#${string}` | ''}` | `/emissions${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/learn${`?${string}` | `#${string}` | ''}` | `/learn${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/track${`?${string}` | `#${string}` | ''}` | `/track${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/emissions` | `/emissions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/learn` | `/learn`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/track` | `/track`; params?: Router.UnknownInputParams; } | `/+not-found${`?${string}` | `#${string}` | ''}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}

```

# .expo\web\cache\production\images\favicon\favicon-24272cdaeff82cc5facdaccd982a6f05b60c4504704bbf94c19a6388659880bb-contain-transparent\favicon-48.png

This is a binary file of the type: Image

# .gitignore

```
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/

# Native
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

# @generated expo-cli sync-2b81b286409207a5da26e14c78851eb30d8ccbdb
# The following patterns were generated by expo-cli

expo-env.d.ts
# @end expo-cli
```

# app.json

```json
{
  "expo": {
    "name": "CarbonFootprinting",
    "slug": "CarbonFootprinting",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}

```

# app\_layout.tsx

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "@/providers/AuthProvider";
import { CarbonDataProvider } from "@/providers/CarbonDataProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CarbonDataProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <RootLayoutNav />
          </GestureHandlerRootView>
        </CarbonDataProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
```

# app\(auth)\_layout.tsx

```tsx
import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
```

# app\(auth)\login.tsx

```tsx
// app/(auth)/login.tsx - DOM Form Fix
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Leaf } from "lucide-react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import colors from "@/constants/colors";
import { useAuth } from "@/providers/AuthProvider";

export default function LoginScreen() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e?: any) => {
    // Prevent form submission if it's a web form event
    if (e?.preventDefault) {
      e.preventDefault();
    }
    
    if (validateForm()) {
      try {
        console.log('Starting login...', { email });
        await login(email, password);
        console.log('Login completed');
      } catch (error) {
        console.log("Login failed:", error);
      }
    }

  };

      const renderFormContent = () => (
      <>
            <View style={styles.formContainer} nativeID="login-form">
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
            
            <View style={styles.formFields}>
              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                error={errors.email}
                testID="email-input"
              />
              
              <Input
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textContentType="password"
                error={errors.password}
                testID="password-input"
              />
            </View>
            
            <Button
              title="Sign In"
              onPress={handleLogin}
              loading={loading}
              style={styles.button}
              testID="login-button"
            />
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don&apos;t have an account? </Text>
              <Link href="/(auth)/register" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </>
    );



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container} testID="login-screen">
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Leaf size={40} color={colors.primary} />
            </View>
            <Text style={styles.logoText}>CarbonTrack</Text>
            <Text style={styles.tagline}>Track your carbon footprint</Text>
          </View>
          
          {/* Form wrapper for web DOM compliance */}
          {Platform.OS === 'web' ? (
            renderFormContent()
          ) : (
            renderFormContent()
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#666",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formFields: {
    // Group form fields for better DOM structure
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
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  footerLink: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.primary,
  },
});
```

# app\(auth)\register.tsx

```tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Leaf } from "lucide-react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import colors from "@/constants/colors";
import { useAuth } from "@/providers/AuthProvider";


export default function RegisterScreen() {
  const { register, loading } = useAuth();
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        await register(email, password, confirmPassword, firstName, lastName);
      } catch (error) {
        // Error is handled in the register function
        console.log("Registration failed:", error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container} testID="register-screen">
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Leaf size={40} color={colors.primary} />
            </View>
            <Text style={styles.logoText}>CarbonTrack</Text>
            <Text style={styles.tagline}>Track your carbon footprint</Text>
          </View>
          
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>
<Input
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
              error={errors.firstName}
              testID="first-name-input"
            />

            <Input
              label="Last Name"
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
              error={errors.lastName}
              testID="last-name-input"
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
              testID="email-input"
            />
            
            <Input
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
              testID="password-input"
            />
            
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              error={errors.confirmPassword}
              testID="confirm-password-input"
            />
            
            <Button
              title="Sign Up"
              onPress={handleRegister}
              loading={loading}
              style={styles.button}
              testID="register-button"
            />
                        
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#666",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  footerLink: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.primary,
  },
});
```

# app\(tabs)\_layout.tsx

```tsx
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
```

# app\(tabs)\emissions.tsx

```tsx
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
  const { entries, isLoading } = useCarbonData();
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
  const chartSize = Math.min(screenWidth - 20, screenHeight * 0.45);
  
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
});
```

# app\(tabs)\index.tsx

```tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { Leaf, Calendar, TrendingDown, TrendingUp } from "lucide-react-native";
import { useCarbonData } from "@/providers/CarbonDataProvider";
import { useAuth } from "@/providers/AuthProvider";
import CarbonSummaryCard from "@/components/CarbonSummaryCard";
import EmptyState from "@/components/EmptyState";
import colors from "@/constants/colors";
import { router } from "expo-router";

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
          onAction={() => router.push('/(tabs)/track')}
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
```

# app\(tabs)\learn.tsx

```tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { ExternalLink, ChevronRight } from "lucide-react-native";
import colors from "@/constants/colors";

type ArticleCategory = "basics" | "tips" | "science" | "impact";

interface Article {
  id: string;
  title: string;
  description: string;
  category: ArticleCategory;
  imageUrl: string;
  content: string;
}

const articles: Article[] = [
  {
    id: "basics-1",
    title: "What is a Carbon Footprint?",
    description: "Learn about carbon footprints and why they matter",
    category: "basics",
    imageUrl: "https://images.unsplash.com/photo-1569163139599-0f4517e36f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content: `A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions.

The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. Globally, the average carbon footprint is closer to 4 tons.

To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per person needs to drop to under 2 tons by 2050.

Lowering individual carbon footprints from 16 tons to 2 tons doesn't happen overnight! By making small changes to our actions, like eating less meat, taking fewer connecting flights, and line drying our clothes, we can start making a big difference.`,
  },
  {
    id: "tips-1",
    title: "10 Ways to Reduce Your Carbon Footprint",
    description: "Simple actions you can take today",
    category: "tips",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content: `Here are 10 effective ways to reduce your carbon footprint:

1. Eat less meat and dairy: Animal products are responsible for a large portion of greenhouse gas emissions.

2. Drive less: Walk, bike, carpool, or use public transportation whenever possible.

3. Reduce air travel: One long-haul flight can produce more CO2 than some people generate in a year.

4. Use energy-efficient appliances: Look for ENERGY STAR certified products.

5. Switch to renewable energy: Consider solar panels or choose a green energy provider.

6. Reduce, reuse, recycle: Follow this hierarchy to minimize waste.

7. Save water: Take shorter showers and fix leaky faucets.

8. Buy local and seasonal food: This reduces transportation emissions.

9. Unplug electronics: Many devices use power even when turned off.

10. Plant trees: Trees absorb CO2 and provide numerous environmental benefits.`,
  },
  {
    id: "science-1",
    title: "The Science of Climate Change",
    description: "Understanding the basics of climate science",
    category: "science",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3e4f7b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content: `Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases.

Greenhouse gases act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples include carbon dioxide, methane, nitrous oxide, and water vapor.

The effects of climate change include:
- Rising temperatures
- More severe weather events
- Rising sea levels
- Changing wildlife populations and habitats
- Increased health risks

The scientific consensus is clear: climate change is real, and human activities are the primary cause. The Intergovernmental Panel on Climate Change (IPCC), which includes more than 1,300 scientists from around the world, forecasts a temperature rise of 2.5 to 10 degrees Fahrenheit over the next century.`,
  },
  {
    id: "impact-1",
    title: "University Students and Climate Impact",
    description: "How students can lead the way to a sustainable future",
    category: "impact",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content: `University students are uniquely positioned to drive climate action:

Campus Impact:
- The average university student generates 3-5 tons of CO2 per year through campus activities
- Housing, transportation, and food choices make up the majority of a student's carbon footprint
- Digital activities, including streaming and cloud storage, contribute approximately 0.25 tons annually

Leadership Opportunities:
- Student-led sustainability initiatives have reduced campus emissions by up to 30% at leading universities
- Green campus movements have successfully advocated for institutional divestment from fossil fuels
- Research shows that sustainability habits formed during university years often persist throughout life

Taking Action:
- Join or start a sustainability club on campus
- Advocate for renewable energy and sustainable food options in dining halls
- Choose coursework that incorporates sustainability principles
- Participate in research projects addressing climate solutions
- Use your education to develop innovative approaches to climate challenges

As future leaders, your choices today will shape climate policy and action for decades to come.`,
  },
  {
    id: "basics-2",
    title: "Carbon Footprint Calculation Methods",
    description: "How carbon emissions are measured and calculated",
    category: "basics",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content: `Carbon footprint calculations involve measuring the greenhouse gas emissions associated with activities, products, or services. Here's how it works:

Direct vs. Indirect Emissions:
- Direct emissions come from sources you control (e.g., your car's exhaust)
- Indirect emissions result from your activities but occur elsewhere (e.g., emissions from producing electricity you use)

Calculation Methods:
1. Life Cycle Assessment (LCA): Tracks emissions through a product's entire life cycle
2. Greenhouse Gas Protocol: Divides emissions into Scope 1 (direct), Scope 2 (energy), and Scope 3 (value chain)
3. Carbon Calculators: Simplified tools that estimate emissions based on lifestyle factors

Common Units:
- Carbon dioxide equivalent (CO2e): Standardizes different greenhouse gases into a single unit
- Metric tons (or kilograms) of CO2e: The standard measurement unit

Accuracy Considerations:
- Calculations are estimates with varying degrees of precision
- More detailed data inputs generally yield more accurate results
- Regular updates to calculation methods reflect evolving science

This app uses standardized emission factors from governmental and scientific databases to estimate your carbon footprint based on your reported activities.`,
  },
];

export default function LearnScreen() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | "all">("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory === "all"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const renderArticleList = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Learn</Text>
        <Text style={styles.subtitle}>
          Explore articles about carbon footprints and sustainability
        </Text>
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "all" && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory("all")}
            testID="category-all"
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === "all" && styles.selectedCategoryText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "basics" && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory("basics")}
            testID="category-basics"
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === "basics" && styles.selectedCategoryText,
              ]}
            >
              Basics
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "tips" && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory("tips")}
            testID="category-tips"
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === "tips" && styles.selectedCategoryText,
              ]}
            >
              Tips
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "science" && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory("science")}
            testID="category-science"
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === "science" && styles.selectedCategoryText,
              ]}
            >
              Science
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "impact" && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory("impact")}
            testID="category-impact"
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === "impact" && styles.selectedCategoryText,
              ]}
            >
              Impact
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      <View style={styles.articlesContainer}>
        {filteredArticles.map((article) => (
          <TouchableOpacity
            key={article.id}
            style={styles.articleCard}
            onPress={() => setSelectedArticle(article)}
            testID={`article-${article.id}`}
          >
            <Image
              source={{ uri: article.imageUrl }}
              style={styles.articleImage}
            />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription} numberOfLines={2}>
                {article.description}
              </Text>
              <View style={styles.articleFooter}>
                <Text style={styles.articleCategory}>
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </Text>
                <ChevronRight size={16} color="#666" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );

  const renderArticleDetail = () => {
    if (!selectedArticle) return null;
    
    return (
      <View style={styles.articleDetailContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedArticle(null)}
          testID="back-button"
        >
          <Text style={styles.backButtonText}>← Back to Articles</Text>
        </TouchableOpacity>
        
        <Image
          source={{ uri: selectedArticle.imageUrl }}
          style={styles.articleDetailImage}
        />
        
        <Text style={styles.articleDetailTitle}>{selectedArticle.title}</Text>
        
        <View style={styles.articleDetailMeta}>
          <Text style={styles.articleDetailCategory}>
            {selectedArticle.category.charAt(0).toUpperCase() + selectedArticle.category.slice(1)}
          </Text>
        </View>
        
        <Text style={styles.articleDetailContent}>
          {selectedArticle.content}
        </Text>
        
        <TouchableOpacity style={styles.externalLinkButton}>
          <ExternalLink size={16} color={colors.primary} />
          <Text style={styles.externalLinkText}>Learn more online</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      testID="learn-screen"
    >
      {selectedArticle ? renderArticleDetail() : renderArticleList()}
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#FFFFFF",
    fontWeight: "600" as const,
  },
  articlesContainer: {
    flex: 1,
  },
  articleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  articleImage: {
    width: "100%",
    height: 160,
  },
  articleContent: {
    padding: 16,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "600" as const,
    color: colors.text,
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  articleFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  articleCategory: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "600" as const,
  },
  
  // Article detail styles
  articleDetailContainer: {
    flex: 1,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600" as const,
  },
  articleDetailImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  articleDetailTitle: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 8,
  },
  articleDetailMeta: {
    flexDirection: "row",
    marginBottom: 16,
  },
  articleDetailCategory: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600" as const,
  },
  articleDetailContent: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 24,
  },
  externalLinkButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  externalLinkText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600" as const,
  },
});
```

# app\(tabs)\profile.tsx

```tsx
// app/(tabs)/profile.tsx - Fixed for Firebase Auth
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Switch, TouchableOpacity, Platform } from "react-native";
import { User, Settings, Shield, Bell, HelpCircle } from "lucide-react-native";
import { useAuth } from "@/providers/AuthProvider";
import Button from "@/components/Button";
import Input from "@/components/Input";
import colors from "@/constants/colors";

export default function ProfileScreen() {
  // const { user, logout, updateProfile } = useAuth();

  const authData = useAuth();
  
  // Debug: xem toàn bộ object được return từ useAuth
  console.log('Full auth data:', authData);
  console.log('Auth data keys:', Object.keys(authData));
  
  const { user, logout, updateProfile } = authData;
  
  // Debug: kiểm tra logout
  console.log('Logout exists?', !!logout);
  console.log('Logout type:', typeof logout);

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
    console.log('Logout button pressed');

    if (Platform.OS === 'web') {
      if (window.confirm('Are you sure you want to logout?')) {
        console.log('Logging out...');
        logout();
      }
      return;
    }
    
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
            } finally {
              setLoading(false);
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
```

# app\(tabs)\styles\_layout.styles.ts

```ts

```

# app\(tabs)\track.tsx

```tsx
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

  const handleSubmit = async () => {
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
    
    // addEntry({
    //   date: new Date().toISOString(),
    //   category: selectedCategory,
    //   activity: selectedActivity.name,
    //   carbonValue,
    //   notes: notes.trim() || undefined,
    // });

    const entryData: any = {
      date: new Date().toISOString(),
      category: selectedCategory,
      activity: selectedActivity.name,
      carbonValue,
    };
    
    // Chỉ thêm notes nếu có giá trị
    if (notes.trim()) {
      entryData.notes = notes.trim();
    }
    
    // Gọi addEntry (không cần Async nếu không muốn await)
    await addEntry(entryData);

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
```

# app\+not-found.tsx

```tsx
import React from "react";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn&apos;t exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

```

# app\modal.tsx

```tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <Text>This is an example modal. You can edit it in app/modal.tsx.</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

```

# assets\fonts\SpaceMono-Regular.ttf

This is a binary file of the type: Binary

# assets\images\adaptive-icon.png

This is a binary file of the type: Image

# assets\images\CDU_logo.png

This is a binary file of the type: Image

# assets\images\favicon.png

This is a binary file of the type: Image

# assets\images\icon.png

This is a binary file of the type: Image

# assets\images\splash.png

This is a binary file of the type: Image

# babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};

```

# components\__tests__\StyledText-test.js

```js
import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});

```

# components\Button.tsx

```tsx
import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps
} from "react-native";
import colors from "@/constants/colors";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const getButtonStyle = () => {
    let buttonStyle: ViewStyle = {};
    
    // Variant styles
    switch (variant) {
      case "primary":
        buttonStyle.backgroundColor = colors.primary;
        break;
      case "secondary":
        buttonStyle.backgroundColor = colors.secondary;
        break;
      case "outline":
        buttonStyle.backgroundColor = "transparent";
        buttonStyle.borderWidth = 1;
        buttonStyle.borderColor = colors.primary;
        break;
      case "danger":
        buttonStyle.backgroundColor = colors.error;
        break;
    }
    
    // Size styles
    switch (size) {
      case "small":
        buttonStyle.paddingVertical = 6;
        buttonStyle.paddingHorizontal = 12;
        break;
      case "medium":
        buttonStyle.paddingVertical = 10;
        buttonStyle.paddingHorizontal = 16;
        break;
      case "large":
        buttonStyle.paddingVertical = 14;
        buttonStyle.paddingHorizontal = 20;
        break;
    }
    
    // Disabled style
    if (disabled || loading) {
      buttonStyle.opacity = 0.6;
    }
    
    return buttonStyle;
  };
  
  const getTextStyle = () => {
    let textStyleObj: TextStyle = {};
    
    // Variant text styles
    switch (variant) {
      case "outline":
        textStyleObj.color = colors.primary;
        break;
      default:
        textStyleObj.color = "#FFFFFF";
    }
    
    // Size text styles
    switch (size) {
      case "small":
        textStyleObj.fontSize = 14;
        break;
      case "medium":
        textStyleObj.fontSize = 16;
        break;
      case "large":
        textStyleObj.fontSize = 18;
        break;
    }
    
    return textStyleObj;
  };
  
  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      testID="button"
      {...rest}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === "outline" ? colors.primary : "#FFFFFF"} 
          size={size === "small" ? "small" : "small"}
        />
      ) : (
        <Text style={[styles.text, getTextStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontWeight: "600" as const,
    textAlign: "center",
  },
});
```

# components\CarbonEntryCard.tsx

```tsx
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
```

# components\CarbonSummaryCard.tsx

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "@/constants/colors";
import { DailyTotal, WeeklyTotal, MonthlyTotal } from "@/types";

type CarbonSummaryCardProps = {
  data: DailyTotal | WeeklyTotal | MonthlyTotal;
  type: "daily" | "weekly" | "monthly";
};

export default function CarbonSummaryCard({ data, type }: CarbonSummaryCardProps) {
  const formatDate = () => {
    if ("date" in data) {
      // Daily
      const date = new Date(data.date);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } else if ("weekStart" in data) {
      // Weekly
      const start = new Date(data.weekStart);
      const end = new Date(data.weekEnd);
      return `${start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} - ${end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}`;
    } else if ("month" in data) {
      // Monthly
      const [year, month] = data.month.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
    return "";
  };

  const getCarbonIntensityColor = (value: number) => {
    if (value < 10) return colors.lowCarbon;
    if (value < 30) return colors.mediumCarbon;
    return colors.highCarbon;
  };

  const getCarbonIntensityLabel = (value: number) => {
    if (value < 10) return "Low";
    if (value < 30) return "Medium";
    return "High";
  };

  return (
    <View style={styles.card} testID="carbon-summary-card">
      <View style={styles.header}>
        <Text style={styles.title}>{formatDate()}</Text>
        <View style={styles.intensityContainer}>
          <View 
            style={[
              styles.intensityIndicator, 
              { backgroundColor: getCarbonIntensityColor(data.total) }
            ]} 
          />
          <Text style={styles.intensityLabel}>
            {getCarbonIntensityLabel(data.total)}
          </Text>
        </View>
      </View>
      
      <Text style={styles.totalValue}>
        {data.total.toFixed(2)} kg CO₂e
      </Text>
      
      <View style={styles.categoriesContainer}>
        <CategoryBar 
          label="Transport" 
          value={data.transport} 
          total={data.total} 
          color={colors.transport} 
        />
        <CategoryBar 
          label="Food" 
          value={data.food} 
          total={data.total} 
          color={colors.food} 
        />
        <CategoryBar 
          label="Energy" 
          value={data.energy} 
          total={data.total} 
          color={colors.energy} 
        />
        <CategoryBar 
          label="Waste" 
          value={data.waste} 
          total={data.total} 
          color={colors.waste} 
        />
        <CategoryBar 
          label="Other" 
          value={data.other} 
          total={data.total} 
          color={colors.other} 
        />
      </View>
    </View>
  );
}

type CategoryBarProps = {
  label: string;
  value: number;
  total: number;
  color: string;
};

function CategoryBar({ label, value, total, color }: CategoryBarProps) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  
  return (
    <View style={styles.categoryRow}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <View style={styles.barContainer}>
        <View 
          style={[
            styles.barFill, 
            { 
              width: `${percentage}%`, 
              backgroundColor: color 
            }
          ]} 
        />
      </View>
      <Text style={styles.categoryValue}>{value.toFixed(1)}</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  intensityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  intensityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  intensityLabel: {
    fontSize: 12,
    color: "#666",
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.primary,
    marginBottom: 16,
  },
  categoriesContainer: {
    marginTop: 8,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryLabel: {
    width: 70,
    fontSize: 12,
    color: colors.text,
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
    marginHorizontal: 8,
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  categoryValue: {
    width: 40,
    fontSize: 12,
    color: "#666",
    textAlign: "right",
  },
});
```

# components\CategoryPicker.tsx

```tsx
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
```

# components\EmptyState.tsx

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Leaf } from "lucide-react-native";
import colors from "@/constants/colors";
import Button from "./Button";

type EmptyStateProps = {
  title: string;
  message: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title,
  message,
  icon,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container} testID="empty-state">
      <View style={styles.iconContainer}>
        {icon || <Leaf size={48} color={colors.primary} />}
      </View>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      
      {actionLabel && onAction && (
        <Button
          title={actionLabel}
          onPress={onAction}
          variant="primary"
          style={styles.button}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    minWidth: 150,
  },
});


```

# components\Input.tsx

```tsx


import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import colors from "@/constants/colors";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  secureTextEntry?: boolean;
};

export default function Input({
  label,
  error,
  containerStyle,
  labelStyle,
  inputStyle,
  secureTextEntry,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  return (
    <View style={[styles.container, containerStyle]} testID="input-container">
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      
      <View style={[
        styles.inputContainer, 
        error ? styles.inputError : null,
        inputStyle
      ]}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...rest}
        />
        
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
            testID="toggle-password-visibility"
          >
            {isPasswordVisible ? (
              <EyeOff size={20} color="#666" />
            ) : (
              <Eye size={20} color="#666" />
            )}
          </TouchableOpacity>
        )}
      </View>
      
      {error && (
        <Text style={styles.errorText} testID="input-error">
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500" as const,
    marginBottom: 6,
    color: colors.text,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  eyeIcon: {
    padding: 10,
  },
});
```

# components\RadarChart.tsx

```tsx
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, Line, Polygon, Text as SvgText, G, Path } from "react-native-svg";
import colors from "@/constants/colors";

type DataPoint = {
  category: string;
  value: number;
  color: string;
  optimalValue?: number; // Add optimal value per category
};

type RadarChartProps = {
  data: DataPoint[];
  maxValue?: number;
  size?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  fillOpacity?: number;
  showOptimalLevel?: boolean;
  optimalTotal?: number;
};

export default function RadarChart({
  data,
  maxValue,
  size = Dimensions.get("window").width - 40,
  showGrid = true,
  showLabels = true,
  fillOpacity = 0.3,
  showOptimalLevel = false,
  optimalTotal,
}: RadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35; // Increased for better visibility
  const angleStep = (2 * Math.PI) / data.length;
  
  // Calculate max value if not provided
  const chartMaxValue = maxValue || Math.max(...data.map(d => d.value), optimalTotal || 10, 10);
  
  // Helper function to get point coordinates
  const getPointCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const normalizedValue = Math.min(value / chartMaxValue, 1);
    const pointRadius = radius * normalizedValue;
    
    return {
      x: centerX + pointRadius * Math.cos(angle),
      y: centerY + pointRadius * Math.sin(angle),
    };
  };
  
  // Generate optimal level polygon if provided
  let optimalPolygonPoints = "";
  if (showOptimalLevel && optimalTotal) {
    // Distribute optimal total equally among categories for simplicity
    const optimalPerCategory = optimalTotal / data.length;
    optimalPolygonPoints = data
      .map((_, i) => {
        const point = getPointCoordinates(data[i].optimalValue || optimalPerCategory, i);
        return `${point.x},${point.y}`;
      })
      .join(" ");
  }
  
  // Generate grid circles
  const gridLevels = 5;
  const gridCircles = [];
  const gridLabels = [];
  
  for (let i = 1; i <= gridLevels; i++) {
    const levelRadius = (radius * i) / gridLevels;
    const levelValue = (chartMaxValue * i) / gridLevels;
    
    gridCircles.push(
      <Circle
        key={`grid-${i}`}
        cx={centerX}
        cy={centerY}
        r={levelRadius}
        fill="none"
        stroke="#E0E0E0"
        strokeWidth={i === gridLevels ? 1.5 : 1}
        strokeDasharray={i === gridLevels ? "0" : "3,3"}
        opacity={i === gridLevels ? 0.8 : 0.4}
      />
    );
    
    // Add grid value labels
    if (i % 2 === 0 || i === gridLevels) {
      gridLabels.push(
        <SvgText
          key={`grid-label-${i}`}
          x={centerX + 5}
          y={centerY - levelRadius - 5}
          fontSize={11}
          fill="#999"
          fontWeight="500"
        >
          {levelValue.toFixed(0)}kg
        </SvgText>
      );
    }
  }
  
  // Generate axis lines
  const axisLines = data.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const endX = centerX + radius * Math.cos(angle);
    const endY = centerY + radius * Math.sin(angle);
    
    return (
      <Line
        key={`axis-${index}`}
        x1={centerX}
        y1={centerY}
        x2={endX}
        y2={endY}
        stroke="#D0D0D0"
        strokeWidth={1}
        opacity={0.5}
      />
    );
  });
  
  // Generate data polygon points
  const polygonPoints = data
    .map((d, i) => {
      const point = getPointCoordinates(d.value, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");
  
  // Generate category labels with improved positioning
  const labels = data.map((d, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const labelRadius = radius + 35;
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    
    // Determine text anchor based on position
    let textAnchor: "start" | "middle" | "end" = "middle";
    if (x < centerX - 20) {
      textAnchor = "end";
    } else if (x > centerX + 20) {
      textAnchor = "start";
    }
    
    // Adjust vertical position for better readability
    let dy = 0;
    if (y < centerY - radius + 20) {
      dy = -5;
    } else if (y > centerY + radius - 20) {
      dy = 10;
    }
    
    return (
      <G key={`label-${index}`}>
        {/* Category background for better readability */}
        <Circle
          cx={x}
          cy={y + dy - 8}
          r={40}
          fill="white"
          opacity={0.8}
        />
        
        {/* Category name */}
        <SvgText
          x={x}
          y={y + dy - 10}
          fontSize={15}
          fontWeight="600"
          fill={colors.text}
          textAnchor={textAnchor}
          alignmentBaseline="middle"
        >
          {d.category}
        </SvgText>
        
        {/* Value */}
        <SvgText
          x={x}
          y={y + dy + 8}
          fontSize={13}
          fill={d.value > (d.optimalValue || 0) ? colors.error : colors.success}
          textAnchor={textAnchor}
          alignmentBaseline="middle"
          fontWeight="500"
        >
          {d.value.toFixed(1)}kg
        </SvgText>
        
        {/* Optimal value if shown */}
        {showOptimalLevel && d.optimalValue && (
          <SvgText
            x={x}
            y={y + dy + 22}
            fontSize={11}
            fill="#999"
            textAnchor={textAnchor}
            alignmentBaseline="middle"
          >
            (target: {d.optimalValue.toFixed(1)}kg)
          </SvgText>
        )}
      </G>
    );
  });
  
  // Generate data points (circles at vertices)
  const dataPoints = data.map((d, index) => {
    const point = getPointCoordinates(d.value, index);
    const isOverTarget = d.optimalValue ? d.value > d.optimalValue : false;
    
    return (
      <Circle
        key={`point-${index}`}
        cx={point.x}
        cy={point.y}
        r={6}
        fill={isOverTarget ? colors.error : d.color}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Grid */}
        {showGrid && (
          <G>
            {gridCircles}
            {axisLines}
            {gridLabels}
          </G>
        )}
        
        {/* Optimal level polygon */}
        {showOptimalLevel && optimalPolygonPoints && (
          <Polygon
            points={optimalPolygonPoints}
            fill="none"
            stroke={colors.success}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={0.8}
          />
        )}
        
        {/* Data polygon */}
        <Polygon
          points={polygonPoints}
          fill={colors.primary}
          fillOpacity={fillOpacity}
          stroke={colors.primary}
          strokeWidth={2.5}
        />
        
        {/* Data points */}
        {dataPoints}
        
        {/* Labels */}
        {showLabels && labels}
        
        {/* Center point */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={3}
          fill={colors.text}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    backgroundColor: "transparent",
  },
});
```

# constants\colors.ts

```ts
const colors = {
  primary: "#2e547dff", // Forest Green
  secondary: "#000879ff", // Teal
  accent: "#4c95afff", // Light Green
  background: "#F5F5F5", // Light Gray
  card: "#FFFFFF", // White
  text: "#212121", // Dark Gray
  border: "#E0E0E0", // Light Gray
  notification: "#e222ffff", // Orange
  error: "#D32F2F", // Red
  success: "#388E3C", // Green
  warning: "#bb00ffff", // Amber
  info: "#1976D2", // Blue
  
  // Carbon intensity colors
  lowCarbon: "#819ec7ff", // Light Green
  mediumCarbon: "#FFD54F", // Amber
  highCarbon: "#E57373", // Light Red
  
  // Chart colors
  transport: "#5C6BC0", // Indigo
  food: "#6666bbff", // Green
  energy: "#FFA726", // Orange
  waste: "#8D6E63", // Brown
  other: "#78909C", // Blue Gray
};

export default colors;
```

# constants\firebase.ts

```ts
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyeUCYnqeBk6hZslwCp9_rufuwHwLtU38",
  authDomain: "carbonfootprint-394c3.firebaseapp.com",
  projectId: "carbonfootprint-394c3",
  storageBucket: "carbonfootprint-394c3.firebasestorage.app",
  messagingSenderId: "263219211973",
  appId: "1:263219211973:web:dd5684cf3caf24620f8aac",
  measurementId: "G-VF5CC5BYD7"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// export default app;

// let app, auth, db;

// if (typeof window !== "undefined") {
//   app = initializeApp(firebaseConfig);
//   auth = getAuth(app);
//   db = getFirestore(app);
// }

// export { auth, db };
// export default app;

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Auth - simple approach that works with Expo
export const auth = getAuth(app);

// Initialize Firestore  
export const db = getFirestore(app);

console.log('Firebase initialized:', {
  auth: !!auth,
  db: !!db,
  environment: typeof window !== 'undefined' ? 'web' : 'native'
});

export default app;
```

# data\carbonActivities.ts

```ts
import { CarbonActivity } from "@/types";

export const carbonActivities: CarbonActivity[] = [
  // Transport
  {
    id: "transport-1",
    name: "Car (petrol)",
    category: "transport",
    carbonValue: 0.192,
    unit: "km",
    description: "Average petrol car emissions per kilometer",
  },
  {
    id: "transport-2",
    name: "Car (diesel)",
    category: "transport",
    carbonValue: 0.171,
    unit: "km",
    description: "Average diesel car emissions per kilometer",
  },
  {
    id: "transport-3",
    name: "Bus",
    category: "transport",
    carbonValue: 0.105,
    unit: "km",
    description: "Average bus emissions per passenger kilometer",
  },
  {
    id: "transport-4",
    name: "Train",
    category: "transport",
    carbonValue: 0.041,
    unit: "km",
    description: "Average train emissions per passenger kilometer",
  },
  {
    id: "transport-5",
    name: "Bicycle",
    category: "transport",
    carbonValue: 0,
    unit: "km",
    description: "Zero direct emissions from cycling",
  },
  {
    id: "transport-6",
    name: "Walking",
    category: "transport",
    carbonValue: 0,
    unit: "km",
    description: "Zero direct emissions from walking",
  },
  {
    id: "transport-7",
    name: "Short-haul flight",
    category: "transport",
    carbonValue: 0.156,
    unit: "km",
    description: "Average emissions per passenger kilometer for flights under 3700km",
  },
  {
    id: "transport-8",
    name: "Long-haul flight",
    category: "transport",
    carbonValue: 0.139,
    unit: "km",
    description: "Average emissions per passenger kilometer for flights over 3700km",
  },
  
  // Food
  {
    id: "food-1",
    name: "Beef",
    category: "food",
    carbonValue: 27,
    unit: "kg",
    description: "Emissions per kg of beef consumed",
  },
  {
    id: "food-2",
    name: "Lamb",
    category: "food",
    carbonValue: 39.2,
    unit: "kg",
    description: "Emissions per kg of lamb consumed",
  },
  {
    id: "food-3",
    name: "Pork",
    category: "food",
    carbonValue: 12.1,
    unit: "kg",
    description: "Emissions per kg of pork consumed",
  },
  {
    id: "food-4",
    name: "Chicken",
    category: "food",
    carbonValue: 6.9,
    unit: "kg",
    description: "Emissions per kg of chicken consumed",
  },
  {
    id: "food-5",
    name: "Fish",
    category: "food",
    carbonValue: 6.1,
    unit: "kg",
    description: "Average emissions per kg of fish consumed",
  },
  {
    id: "food-6",
    name: "Eggs",
    category: "food",
    carbonValue: 4.8,
    unit: "kg",
    description: "Emissions per kg of eggs consumed",
  },
  {
    id: "food-7",
    name: "Milk",
    category: "food",
    carbonValue: 1.9,
    unit: "liter",
    description: "Emissions per liter of milk consumed",
  },
  {
    id: "food-8",
    name: "Cheese",
    category: "food",
    carbonValue: 13.5,
    unit: "kg",
    description: "Emissions per kg of cheese consumed",
  },
  {
    id: "food-9",
    name: "Vegetables (local)",
    category: "food",
    carbonValue: 0.4,
    unit: "kg",
    description: "Average emissions for locally grown vegetables",
  },
  {
    id: "food-10",
    name: "Fruits (local)",
    category: "food",
    carbonValue: 0.5,
    unit: "kg",
    description: "Average emissions for locally grown fruits",
  },
  {
    id: "food-11",
    name: "Vegetables (imported)",
    category: "food",
    carbonValue: 1.1,
    unit: "kg",
    description: "Average emissions for imported vegetables",
  },
  {
    id: "food-12",
    name: "Fruits (imported)",
    category: "food",
    carbonValue: 1.4,
    unit: "kg",
    description: "Average emissions for imported fruits",
  },
  
  // Energy
  {
    id: "energy-1",
    name: "Electricity",
    category: "energy",
    carbonValue: 0.233,
    unit: "kWh",
    description: "Average emissions per kWh of electricity consumed",
  },
  {
    id: "energy-2",
    name: "Natural gas",
    category: "energy",
    carbonValue: 0.184,
    unit: "kWh",
    description: "Emissions per kWh of natural gas consumed",
  },
  {
    id: "energy-3",
    name: "Heating oil",
    category: "energy",
    carbonValue: 0.266,
    unit: "kWh",
    description: "Emissions per kWh of heating oil consumed",
  },
  {
    id: "energy-4",
    name: "LPG",
    category: "energy",
    carbonValue: 0.214,
    unit: "kWh",
    description: "Emissions per kWh of LPG consumed",
  },
  
  // Waste
  {
    id: "waste-1",
    name: "Landfill waste",
    category: "waste",
    carbonValue: 0.458,
    unit: "kg",
    description: "Emissions per kg of waste sent to landfill",
  },
  {
    id: "waste-2",
    name: "Recycled waste",
    category: "waste",
    carbonValue: 0.021,
    unit: "kg",
    description: "Emissions per kg of waste recycled",
  },
  {
    id: "waste-3",
    name: "Composted waste",
    category: "waste",
    carbonValue: 0.01,
    unit: "kg",
    description: "Emissions per kg of waste composted",
  },
  
  // Other
  {
    id: "other-1",
    name: "Clothing (new item)",
    category: "other",
    carbonValue: 15,
    unit: "item",
    description: "Average emissions per new clothing item",
  },
  {
    id: "other-2",
    name: "Smartphone usage",
    category: "other",
    carbonValue: 0.01,
    unit: "hour",
    description: "Emissions per hour of smartphone usage",
  },
  {
    id: "other-3",
    name: "Laptop usage",
    category: "other",
    carbonValue: 0.05,
    unit: "hour",
    description: "Emissions per hour of laptop usage",
  },
  {
    id: "other-4",
    name: "Desktop computer usage",
    category: "other",
    carbonValue: 0.1,
    unit: "hour",
    description: "Emissions per hour of desktop computer usage",
  },
  {
    id: "other-5",
    name: "TV usage",
    category: "other",
    carbonValue: 0.08,
    unit: "hour",
    description: "Emissions per hour of TV usage",
  },
  {
    id: "other-6",
    name: "Paper (new)",
    category: "other",
    carbonValue: 0.0012,
    unit: "sheet",
    description: "Emissions per sheet of new paper",
  },
  {
    id: "other-7",
    name: "Paper (recycled)",
    category: "other",
    carbonValue: 0.0006,
    unit: "sheet",
    description: "Emissions per sheet of recycled paper",
  },
];
```

# expo-env.d.ts

```ts
/// <reference types="expo/types" />

// NOTE: This file should not be edited and should be in your git ignore
```

# package.json

```json
{
  "name": "expo-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "bunx rork start -p ndj4jdf0gl55co0ej1zs0 --tunnel",
    "start-web": "bunx rork start -p ndj4jdf0gl55co0ej1zs0 --web --tunnel",
    "start-web-dev": "DEBUG=expo* bunx rork start -p ndj4jdf0gl55co0ej1zs0 --web --tunnel"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.1.0",
    "@nkzw/create-context-hook": "^1.1.0",
    "@react-native-async-storage/async-storage": "^2.2.0",
    "@react-native-firebase/app": "^23.2.0",
    "@react-native-firebase/firestore": "^23.2.0",
    "@react-navigation/native": "^7.1.6",
    "@tanstack/react-query": "^5.84.1",
    "expo": "^53.0.4",
    "expo-blur": "~14.1.4",
    "expo-constants": "~17.1.4",
    "expo-font": "~13.3.0",
    "expo-haptics": "~14.1.4",
    "expo-image": "2.4.0",
    "expo-image-picker": "~16.1.4",
    "expo-linear-gradient": "~14.1.4",
    "expo-linking": "~7.1.4",
    "expo-location": "~18.1.4",
    "expo-router": "5.1.4",
    "expo-splash-screen": "~0.30.7",
    "expo-status-bar": "~2.2.3",
    "expo-symbols": "~0.4.4",
    "expo-system-ui": "~5.0.6",
    "expo-web-browser": "14.2.0",
    "firebase": "^12.2.1",
    "lucide-react-native": "^0.536.0",
    "nativewind": "^4.1.23",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-native": "0.79.5",
    "react-native-gesture-handler": "~2.24.0",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "4.11.1",
    "react-native-svg": "15.11.2",
    "react-native-web": "^0.20.0",
    "react-native-worklets": "^0.4.1",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@expo/ngrok": "^4.1.0",
    "@types/react": "~19.0.10",
    "typescript": "~5.8.3"
  },
  "private": true
}

```

# providers\AuthProvider.tsx

```tsx
// providers/AuthProvider.tsx - Add debug logs
import createContextHook from "@nkzw/create-context-hook";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { User } from "@/types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/constants/firebase';

export const [AuthProvider, useAuth] = createContextHook(() => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Listen to Firebase auth state changes
  useEffect(() => {
    console.log('🔄 Setting up auth listener...');
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔥 Auth state changed:', {
        hasUser: !!firebaseUser,
        email: firebaseUser?.email
      });

      if (firebaseUser) {
        console.log('✅ User authenticated, loading profile...');
        await loadUserProfile(firebaseUser);
      } else {
        console.log('❌ No authenticated user');
        setUser(null);
      }
      setLoading(false);
      setInitialized(true);
    });

    return unsubscribe;
  }, []);

  // Load user profile from Firestore
  const loadUserProfile = async (firebaseUser: FirebaseUser) => {
    try {
      console.log('📄 Loading user profile from Firestore...');
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        console.log('✅ User profile loaded:', { email: userData.email });
        setUser(userData);
      } else {
        console.log('⚠️ User profile not found in Firestore');
        // Create basic user profile if doesn't exist
        const basicProfile: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email!,
          firstName: firebaseUser.displayName?.split(' ')[0] || '',
          lastName: firebaseUser.displayName?.split(' ')[1] || '',
          displayName: firebaseUser.displayName || firebaseUser.email,
          createdAt: Date.now(),
        };
        await setDoc(doc(db, 'users', firebaseUser.uid), basicProfile);
        setUser(basicProfile);
      }
    } catch (error) {
      console.error('❌ Error loading user profile:', error);
    }
  };

  // Auto-redirect based on auth state - WITH DEBUG
  useEffect(() => {
    console.log('🧭 Navigation check:', {
      initialized,
      hasUser: !!user,
      loading,
      userEmail: user?.email
    });

    if (!initialized) {
      console.log('⏳ Not initialized yet, waiting...');
      return;
    }

    if (user) {
      console.log('🎯 User found, redirecting to tabs...');
      router.replace("/(tabs)");
    } else if (!loading) {
      console.log('🔓 No user, redirecting to login...');
      router.replace("/(auth)/login");
    }
  }, [user, loading, initialized]);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log('🔐 Starting login for:', email);

      await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Firebase login successful');
      // User state updated automatically by onAuthStateChanged
    } catch (error: any) {
      console.error('❌ Login error:', error);
      const message = error.code === 'auth/invalid-credential' ? 'Invalid email or password' :
        error.code === 'auth/user-not-found' ? 'No account found with this email' :
          error.code === 'auth/wrong-password' ? 'Incorrect password' :
            'Login failed. Please try again.';
      Alert.alert("Login Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, confirmPassword: string, firstName: string, lastName: string) => {
    try {
      setLoading(true);

      // Validation
      if (!firstName.trim() || !lastName.trim()) {
        throw new Error("First name and last name are required");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      console.log('📝 Starting registration for:', email);

      // Create Firebase auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Update Firebase auth profile
      await updateProfile(firebaseUser, {
        displayName: `${firstName.trim()} ${lastName.trim()}`
      });

      // Create user profile in Firestore
      const userProfile: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email!,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        displayName: `${firstName.trim()} ${lastName.trim()}`,
        createdAt: Date.now(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);
      console.log('✅ User profile created in Firestore');
      setUser(userProfile);

    } catch (error: any) {
      console.error('❌ Registration error:', error);
      const message = error.code === 'auth/email-already-in-use' ? 'Email already registered' :
        error.code === 'auth/invalid-email' ? 'Invalid email address' :
          error.code === 'auth/weak-password' ? 'Password too weak' :
            error.message || "Registration failed";
      Alert.alert("Registration Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // setLoading(true);
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } 
  };

  // Update profile function
  const updateUserProfile = async (updates: Partial<User>) => {
    try {
      if (!user) throw new Error("No user logged in");
      
      console.log('Updating profile:', updates);
      console.log('Current user:', { 
        id: user.id, 
        email: user.email, 
        firstName: user.firstName, 
        lastName: user.lastName 
      });
      
      // Create updated user object with safe fallbacks
      const updatedUser: User = {
        ...user,
        ...updates,
      };
      
      // Update displayName if firstName or lastName provided
      if (updates.firstName !== undefined || updates.lastName !== undefined) {
        const firstName = updates.firstName ?? user.firstName ?? "";
        const lastName = updates.lastName ?? user.lastName ?? "";
        
        if (firstName && lastName) {
          updatedUser.displayName = `${firstName} ${lastName}`;
        } else if (firstName) {
          updatedUser.displayName = firstName;
        } else if (lastName) {
          updatedUser.displayName = lastName;
        } else {
          updatedUser.displayName = user.email || "User";
        }
      }

      console.log('Updated user data:', updatedUser);

      // Update Firestore
      await updateDoc(doc(db, 'users', user.id), updatedUser);
      setUser(updatedUser);
      
      console.log('Profile updated successfully in Firestore');
      return updatedUser;
    } catch (error) {
      console.error('Profile update error:', error);
      const message = error instanceof Error ? error.message : "Profile update failed";
      Alert.alert("Update Error", message);
      throw error;
    }
  };
  
  return {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile: updateUserProfile,
  };
});
```

# providers\CarbonDataProvider.tsx

```tsx
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
```

# scripts\uploadData.ts

```ts
import { doc, writeBatch } from 'firebase/firestore';
import { getDB } from '../constants/firebase';
import { carbonActivities } from '../data/carbonActivities';

export const uploadDataToFirestore = async () => {
  try {
    const db = getDB();
    const batch = writeBatch(db);

    console.log('Starting upload to Firestore...');

    // Tạo categories
    const categories = {
      transport: { name: 'Transport', icon: 'car', color: '#6366f1', activities: {} as any },
      food: { name: 'Food', icon: 'restaurant', color: '#10b981', activities: {} as any },
      energy: { name: 'Energy', icon: 'flash', color: '#f59e0b', activities: {} as any },
      waste: { name: 'Waste', icon: 'trash', color: '#ef4444', activities: {} as any },
      other: { name: 'Other', icon: 'cube', color: '#8b5cf6', activities: {} as any }
    };

    // Nhóm activities theo category
    carbonActivities.forEach(activity => {
      const categoryKey = activity.category as keyof typeof categories;
      if (categories[categoryKey]) {
        categories[categoryKey].activities[activity.id] = {
          name: activity.name,
          carbonValue: activity.carbonValue,
          unit: activity.unit,
          description: activity.description || ''
        };
      }
    });

    // Upload categories
    batch.set(doc(db, 'categories', 'default'), categories);

    // Upload sample articles
    batch.set(doc(db, 'articles', 'carbon-basics'), {
      title: 'What is a Carbon Footprint?',
      subtitle: 'Learn about carbon footprints and why they matter',
      category: 'Basics',
      content: 'A carbon footprint measures greenhouse gas emissions...',
      readTime: 5,
      published: true,
      createdAt: new Date().toISOString()
    });

    batch.set(doc(db, 'articles', 'reduce-emissions'), {
      title: '10 Ways to Reduce Emissions',
      subtitle: 'Simple actions you can take today',
      category: 'Tips',
      content: 'Simple daily actions to reduce your carbon footprint...',
      readTime: 8,
      published: true,
      createdAt: new Date().toISOString()
    });

    // Upload default settings
    batch.set(doc(db, 'defaults', 'userSettings'), {
      settings: {
        notifications: true,
        darkMode: false,
        preferredUnit: 'metric',
        language: 'en'
      },
      goals: {
        daily_target: 15.0,
        weekly_target: 105.0,
        monthly_target: 450.0,
        yearly_target: 5400.0
      },
      createdAt: new Date().toISOString()
    });

    await batch.commit();
    
    console.log(`Upload completed! ${carbonActivities.length} activities uploaded.`);
    
    // Return success status for hook
    return { 
      success: true, 
      activitiesCount: carbonActivities.length,
      message: 'Data uploaded successfully'
    };

  } catch (error) {
    console.error('Upload failed:', error);
    
    // Return error status for hook
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Upload failed'
    };
  }
};
```

# tsconfig.json

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "jsx": "react",
    "strict": true,
    "paths": {
      "@/*": [
        "./*"
      ],
      "@firebase/auth": ["./node_modules/@firebase/auth/dist/index.rn.d.ts"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}

```

# types\index.ts

```ts
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  displayName: string | null;
  university?: string;
  course?: string;
  createdAt: number;
};

export type CarbonCategory = 'transport' | 'food' | 'energy' | 'waste' | 'other';

export type CarbonEntry = {
  id: string;
  userId: string;
  date: string; // ISO date string
  category: CarbonCategory;
  activity: string;
  carbonValue: number; // in kg CO2e
  notes?: string;
  createdAt: number;
};

export type DailyTotal = {
  date: string;
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type WeeklyTotal = {
  weekStart: string;
  weekEnd: string;
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type MonthlyTotal = {
  month: string; // YYYY-MM
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type CarbonActivity = {
  id: string;
  name: string;
  category: CarbonCategory;
  carbonValue: number;
  unit: string;
  description?: string;
};
```

# uploadData.tsx

```tsx
import React from 'react';
import { useAutoUpload } from './hooks/useAutoUpload';

export default function App() {
  const { uploadStatus, error } = useAutoUpload();

  // Optional: Hiển thị status cho user
  const renderUploadStatus = () => {
    switch (uploadStatus) {
      case 'checking':
        return <div className="upload-status">Checking database...</div>;
      case 'uploading':
        return <div className="upload-status">Initializing database...</div>;
      case 'completed':
        return <div className="upload-status success">Database ready!</div>;
      case 'error':
        return <div className="upload-status error">Error: {error}</div>;
      case 'skipped':
        return null; // Không hiển thị gì
      default:
        return null;
    }
  };

  return (
    <div>
      {renderUploadStatus()}
      {/* Rest of your app */}
    </div>
  );
}
```

