import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ExpoRouter, useRouter } from 'expo-router';

// Replace with your actual THEME object
const THEME = {
  background: '#FFFFFF',
  text: '#000000',
  textSecondary: '#666666',
  surface: '#F5F5F5',
  surfaceHighlight: '#EEEEEE',
  accent: '#007bff', // Example accent color
  primary: '#007bff', // Example primary color
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
};

const PlaidQuickstartUI = () => {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Plaid Quickstart</Text>
          <Text style={styles.subtitle}>A sample end-to-end integration with Plaid</Text>
        </View>

        {/* Description Section */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            The Plaid flow begins when your user wants to connect their bank account to your app.
            Simulate this by clicking the button below to launch Link, the client-side
            component that your users will interact with in order to link their accounts to Plaid
            and allow you to access their accounts via the Plaid API.
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.launchLinkButton} onPress={() => router.push("./")} >
            <Text style={styles.launchLinkText}>Launch Link</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    padding: THEME.spacing.lg,
    backgroundColor: THEME.surface,
    borderRadius: THEME.radius.lg,
    borderWidth: 1,
    borderColor: THEME.surfaceHighlight,
  },
  header: {
    alignItems: 'center',
    marginBottom: THEME.spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: THEME.text, 
    marginBottom: THEME.spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.textSecondary,
  },
  description: {
    marginBottom: THEME.spacing.xl,
  },
  descriptionText: {
    fontSize: 16,
    color: THEME.textSecondary,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  launchLinkButton: {
    backgroundColor: THEME.primary,
    paddingVertical: THEME.spacing.md,
    paddingHorizontal: THEME.spacing.xl,
    borderRadius: THEME.radius.md,
  },
  launchLinkText: {
    color: THEME.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PlaidQuickstartUI;