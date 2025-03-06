import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from './_layout';

const features = [
  {
    icon: 'bar-chart-outline',
    title: 'Smart Budgeting',
    description: 'Set and track budgets with intelligent insights',
  },
  {
    icon: 'wallet-outline',
    title: 'Expense Tracking',
    description: 'Monitor your spending in real-time',
  },
  {
    icon: 'trending-up-outline',
    title: 'Financial Analytics',
    description: 'Visualize your financial patterns and growth',
  },
  {
    icon: 'notifications-outline',
    title: 'Smart Alerts',
    description: 'Stay on top of your spending with timely notifications',
  },
];

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="planet-outline" size={44} color={THEME.primary} />
          </View>
          <Text style={styles.title}>PlanIt</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>

        {/* Mission Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <View style={styles.card}>
            <Text style={styles.missionText}>
              Empowering you to take control of your financial journey with 
              intuitive tools and <Text style={{ color: THEME.accent }}>actionable insights</Text> for a better financial future.
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featureGrid}>
            {features.map((feature, index) => (
              <View key={index} style={[
                styles.featureCard,
                index === 0 && { borderColor: THEME.accent }
              ]}>
                <View style={[
                  styles.iconContainer,
                  { backgroundColor: index === 0 ? `${THEME.accent}15` : `${THEME.primary}15` }
                ]}>
                  <Ionicons 
                    name={feature.icon as any} 
                    size={24} 
                    color={index === 0 ? THEME.accent : THEME.primary} 
                  />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <View style={styles.card}>
            <View style={styles.contactItem}>
              <Ionicons name="mail-outline" size={20} color={THEME.accent} />
              <Text style={styles.contactText}>support@planit.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="globe-outline" size={20} color={THEME.accent} />
              <Text style={styles.contactText}>www.planit.com</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with </Text>
          <Ionicons name="heart" size={14} color={THEME.accent} />
          <Text style={styles.footerText}> by PlanIt Team</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: THEME.spacing.lg,
    paddingBottom: THEME.spacing.xl * 3,
  },
  header: {
    alignItems: 'center',
    marginBottom: THEME.spacing.xl,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: THEME.radius.full,
    backgroundColor: `${THEME.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME.spacing.md,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: THEME.spacing.xs,
  },
  version: {
    fontSize: 14,
    color: THEME.textSecondary,
  },
  section: {
    marginBottom: THEME.spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: THEME.spacing.md,
  },
  card: {
    backgroundColor: THEME.surface,
    borderRadius: THEME.radius.lg,
    padding: THEME.spacing.lg,
    borderWidth: 1,
    borderColor: THEME.surfaceHighlight,
  },
  missionText: {
    fontSize: 16,
    lineHeight: 24,
    color: THEME.textSecondary,
    textAlign: 'center',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: THEME.spacing.md,
  },
  featureCard: {
    backgroundColor: THEME.surface,
    borderRadius: THEME.radius.lg,
    padding: THEME.spacing.lg,
    width: '47%',
    borderWidth: 1,
    borderColor: THEME.surfaceHighlight,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: THEME.radius.full,
    backgroundColor: `${THEME.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME.spacing.sm,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: THEME.spacing.xs,
  },
  featureDescription: {
    fontSize: 14,
    color: THEME.textSecondary,
    lineHeight: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME.spacing.sm,
    marginBottom: THEME.spacing.sm,
  },
  contactText: {
    fontSize: 16,
    color: THEME.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: THEME.spacing.xl,
  },
  footerText: {
    fontSize: 14,
    color: THEME.textSecondary,
  },
}); 