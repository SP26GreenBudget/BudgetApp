import { StatusBar, View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.background }}>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: THEME.surface,
            borderTopColor: THEME.surfaceHighlight,
            borderTopWidth: 1,
            height: 60,
            paddingBottom: THEME.spacing.sm,
            paddingTop: THEME.spacing.xs,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            shadowOpacity: 0,
            borderTopRightRadius: THEME.radius.xl,
            borderTopLeftRadius: THEME.radius.xl,
          },
          tabBarActiveTintColor: THEME.primary,
          tabBarInactiveTintColor: THEME.textSecondary,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            paddingTop: THEME.spacing.xs,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <View
                style={{
                  padding: THEME.spacing.xs,
                  backgroundColor: focused ? `${color}15` : "transparent",
                  borderRadius: THEME.radius.full,
                }}
              >
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="budgets"
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <View style={{ 
                padding: THEME.spacing.xs,
                backgroundColor: focused ? `${color}15` : 'transparent',
                borderRadius: THEME.radius.full,
              }}>
                <Ionicons 
                  name={focused ? "bar-chart" : "bar-chart-outline"} 
                  size={24} 
                  color={color} 
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <View style={{ 
                padding: THEME.spacing.xs,
                backgroundColor: focused ? `${color}15` : 'transparent',
                borderRadius: THEME.radius.full,
              }}>
                <Ionicons 
                  name={focused ? "information-circle" : "information-circle-outline"} 
                  size={24} 
                  color={color} 
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="plaidTest"
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <View style={{ 
                padding: THEME.spacing.xs,
                backgroundColor: focused ? `${color}15` : 'transparent',
                borderRadius: THEME.radius.full,
              }}>
                <Ionicons 
                  name={focused ? "information-circle" : "information-circle-outline"} 
                  size={24} 
                  color={color} 
                />
              </View>
            ),
          }}
        />
      </Tabs>    
    </View>
  );
}

export const COLORS = {
  expense: "#D4A373", // Light sandy tan for expenses
  income: "#10B981", // Keep green for income
};

export const THEME = {
  // Blues (70-75%)
  background: "#0A0F1E", // Darker blue for better contrast
  surface: "#1E293B", // Card background
  surfaceHighlight: "#334155", // Borders and highlights
  primary: "#3B82F6", // Primary actions
  secondary: "#60A5FA", // Secondary elements
  primaryLight: "#93C5FD", // Lighter accents

  // Whites (15-20%)
  text: "#F8FAFC", // Primary text
  textSecondary: "#CBD5E1", // Secondary text

  // Greens (10-15%)
  accent: "#10B981", // Success/positive
  accentLight: "#34D399", // Success/positive light

  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  // Radius
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
};
