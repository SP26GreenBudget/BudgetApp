import { View, Text, StyleSheet, FlatList, Pressable, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from './_layout';
import React, { useEffect, useState } from 'react';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

const recentTransactions = [
  {
    id:'0',
    description: 'Venmo Cash Out',
    amount: 25.00, 
    date: '2025-03-22',
    category: 'Income'
  },
  { 
    id: '1', 
    description: 'Uber 072515 SF**POOL**', 
    amount: -6.33, 
    date: '2025-03-03', 
    category: 'Transportation' 
  },
  { 
    id: '2', 
    description: 'INTRST PYMNT', 
    amount: -4.22, 
    date: '2025-03-15', 
    category: 'Income' 
  },
  { 
    id: '3', 
    description: 'SparkFun', 
    amount: -89.4, 
    date: '2025-03-16', 
    category: 'Electronics' 
  },
  { 
    id: '4', 
    description: "McDonald's", 
    amount: -12, 
    date: '2025-03-17', 
    category: 'Food' 
  },
  { 
    id: '5', 
    description: 'Starbucks', 
    amount: -4.33, 
    date: '2025-03-17', 
    category: 'Food' 
  },
  { 
    id: '6', 
    description: 'United Airlines', 
    amount: -500, 
    date: '2025-03-18', 
    category: 'Travel' 
  },
  { 
    id: '9', // Added an income transaction in the middle
    description: 'DIRECT DEPOSIT - SALARY', 
    amount: 2500.00, 
    date: '2025-03-19', 
    category: 'Income' 
  },
  { 
    id: '7', 
    description: 'Uber 063015 SF**POOL**', 
    amount: -5.4, 
    date: '2025-03-20', 
    category: 'Transportation' 
  },
  { 
    id: '8', 
    description: 'CREDIT CARD 3333 PAYMENT', 
    amount: -25, 
    date: '2025-03-20', 
    category: 'Payment' 
  },
  {
    id: '10', 
    description: 'RENTAL INCOME',
    amount: 1200.00,
    date: '2025-03-22',
    category: 'Income'
  }
];

function calculateExpenses(transactions: Transaction[]){
  let totalIncome = 0;
  let totalExpenses = 0;

  for(const transaction of transactions){
    if(transaction.amount < 0){
      totalExpenses += transaction.amount;
    }
    else{
      totalIncome += transaction.amount;
    }
  }

  return{
      totalExpenses: totalExpenses, 
      totalIncome: totalIncome, 
      netTotal: totalIncome + totalExpenses
  };
}


const COLORS = {
  expense: '#D4A373', // Light sandy tan for expenses
  income: THEME.accent, // Keep green for income
};

export default function Home() {
  const [income, setIncome] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const { totalIncome, totalExpenses } = calculateExpenses(recentTransactions);
    setIncome(totalIncome);
    setSpent(Math.abs(totalExpenses)); 
  }, [])


  const renderHeader = () => (
    <>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>$1,500.00</Text>
        <View style={styles.trendBadge}>
          <Ionicons name="trending-up" size={16} color={THEME.primary} />
          <Text style={styles.trendText}>12.5% this month</Text>
        </View>
      </View>

      <View style={styles.quickStats}>
        <View style={styles.statCard}>
          <Ionicons 
            name="arrow-down-outline" 
            size={20} 
            color={THEME.accent}
            style={styles.statIcon} 
          />
          <Text style={[styles.statAmount, { color: THEME.accent }]}>${income}</Text> {/* the numerical value of income calculated above */}
          <Text style={styles.statLabel}>Income</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons 
            name="arrow-up-outline" 
            size={20} 
            color={COLORS.expense} 
            style={styles.statIcon} 
          />
          <Text style={[styles.statAmount, { color: COLORS.expense }]}>${spent}</Text>
          <Text style={styles.statLabel}>Spent</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
    </>
  );

  const renderFooter = () => (
    <View style={styles.transactions}>
      {recentTransactions.map(item => (
        <Pressable 
          key={item.id} 
          style={styles.transactionItem}
          android_ripple={{ color: 'rgba(46, 125, 50, 0.05)' }}
        >
          <View style={styles.transactionLeft}>
            <View style={[styles.iconContainer, item.amount > 0 ? styles.incomeIcon : styles.expenseIcon]}>
              <Ionicons 
                name={item.amount > 0 ? "arrow-down-outline" : "arrow-up-outline"} 
                size={20} 
                color="#FFFFFF"
              />
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
          </View>
          <Text style={[styles.amount, item.amount > 0 ? styles.positive : styles.negative]}>
            {item.amount > 0 ? '+' : '-'}${Math.abs(item.amount).toFixed(2)}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back</Text>
            <Text style={styles.title}>Alex</Text>
          </View>
          <Pressable style={styles.profileButton}>
            <Ionicons name="person-outline" size={24} color={THEME.primary} />
          </Pressable>
        </View>

        <FlatList
          data={[] as never[]}
          renderItem={null}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  content: {
    flex: 1,
    paddingTop: THEME.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.surfaceHighlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 16,
    color: THEME.textSecondary, // Soft white
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: THEME.text, // Bright white
  },
  balanceCard: {
    padding: 24,
    marginHorizontal: 20,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: THEME.surface,
    borderColor: THEME.surfaceHighlight,
    borderWidth: 1,
  },
  balanceLabel: {
    fontSize: 14,
    color: THEME.textSecondary, // Soft white
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '600',
    color: THEME.text, // Bright white
    marginBottom: 8,
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    color: THEME.accent, // Emerald green
    fontSize: 14,
    fontWeight: '500',
  },
  quickStats: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: THEME.surface,
    borderColor: THEME.surfaceHighlight,
    borderWidth: 1,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: THEME.text, // Bright white
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: THEME.textSecondary, // Soft white
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.text, // Bright white
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  transactions: {
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: THEME.surface,
    borderColor: THEME.surfaceHighlight,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 8,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incomeIcon: {
    backgroundColor: THEME.accent, // Emerald green
  },
  expenseIcon: {
    backgroundColor: COLORS.expense, // Light sandy tan for expense icon background
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: THEME.text, // Bright white
    marginBottom: 2,
  },
  category: {
    fontSize: 14,
    color: THEME.textSecondary, // Soft white
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  positive: {
    color: THEME.accent, // Emerald green
  },
  negative: {
    color: COLORS.expense, // Light sandy tan for negative amounts
  },
  scrollContent: {
    paddingBottom: THEME.spacing.xl * 2, // Extra padding for bottom tab bar
  },
});