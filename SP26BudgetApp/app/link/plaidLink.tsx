import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Router, useRouter } from 'expo-router';
import { THEME } from '../tabs/_layout';



const linkUiPage = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Plaid Link</Text>
          <Text style={styles.subtitle}>Link your bank account</Text>
        </View>

        {/* Description Section */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Please follow the instructions on screen to securely link your bank account to your profile.
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.launchLinkButton} onPress={() => router.push("../tabs")} >
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

export default linkUiPage;