import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { THEME, COLORS } from './_layout';
import React from 'react';

const mockBudgets = [
  { category: 'Food & Dining', budget: 500, spent: 350, icon: 'restaurant-outline', color: THEME.primary },
  { category: 'Transportation', budget: 300, spent: 250, icon: 'car-outline', color: THEME.secondary },
  { category: 'Entertainment', budget: 200, spent: 280, icon: 'game-controller-outline', color: THEME.primary },
  { category: 'Shopping', budget: 400, spent: 200, icon: 'cart-outline', color: THEME.secondary },
  { category: 'Bills', budget: 800, spent: 750, icon: 'receipt-outline', color: THEME.primary },
];

export default function Budgets() {
  const totalBudget = mockBudgets.reduce((sum, item) => sum + item.budget, 0);
  const totalSpent = mockBudgets.reduce((sum, item) => sum + item.spent, 0);
  const percentSpent = (totalSpent / totalBudget) * 100;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Monthly Budget</Text>
          <Text style={styles.subtitle}>March 2024</Text>
        </View>

        <View style={styles.overviewCard}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>{percentSpent.toFixed(0)}%</Text>
            <Text style={styles.progressLabel}>spent</Text>
          </View>
          <View style={styles.overviewDetails}>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Budget</Text>
              <Text style={styles.overviewAmount}>${totalBudget}</Text>
            </View>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Spent</Text>
              <Text style={styles.overviewAmount}>${totalSpent}</Text>
            </View>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Remaining</Text>
              <Text style={[styles.overviewAmount, styles.remaining]}>
                ${totalBudget - totalSpent}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>

        {mockBudgets.map((item, index) => (
          <Pressable 
            key={index} 
            style={styles.budgetItem}
            android_ripple={{ color: 'rgba(59, 130, 246, 0.05)' }}
          >
            <View style={styles.budgetHeader}>
              <View style={styles.budgetLeft}>
                <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                  <Ionicons name={item.icon as any} size={24} color={item.color} />
                </View>
                <View>
                  <Text style={styles.category}>{item.category}</Text>
                  <Text style={[
                    styles.remaining,
                    item.spent > item.budget && styles.overBudget
                  ]}>
                    ${item.budget - item.spent} remaining
                  </Text>
                </View>
              </View>
              <Text style={[
                styles.percentage,
                item.spent > item.budget && styles.overBudget
              ]}>
                {((item.spent / item.budget) * 100).toFixed(0)}%
              </Text>
            </View>

            <View style={styles.progressContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { 
                    width: `${Math.min((item.spent / item.budget) * 100, 100)}%`,
                    backgroundColor: item.spent > item.budget ? COLORS.expense : item.color 
                  }
                ]} 
              />
            </View>
          </Pressable>
        ))}
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
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.textSecondary,
  },
  overviewCard: {
    backgroundColor: THEME.surface,
    padding: 24,
    borderRadius: 16,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    borderColor: THEME.surfaceHighlight,
    borderWidth: 1,
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.primary,
  },
  progressText: {
    fontSize: 24,
    fontWeight: '700',
    color: THEME.text,
  },
  progressLabel: {
    fontSize: 14,
    color: THEME.textSecondary,
  },
  overviewDetails: {
    flex: 1,
    gap: 12,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overviewLabel: {
    fontSize: 14,
    color: THEME.textSecondary,
  },
  overviewAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
  },
  remaining: {
    color: THEME.accent,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 16,
  },
  budgetItem: {
    backgroundColor: THEME.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderColor: THEME.surfaceHighlight,
    borderWidth: 1,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  budgetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
  },
  percentage: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME.text,
  },
  progressContainer: {
    height: 8,
    backgroundColor: THEME.surfaceHighlight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  overBudget: {
    color: COLORS.expense,
  },
}); 