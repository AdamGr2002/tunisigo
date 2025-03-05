import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { Info, DollarSign, TriangleAlert as AlertTriangle } from 'lucide-react-native';

const ETIQUETTE_GUIDES = [
  {
    title: 'Dress Code',
    description: 'Dress modestly, especially when visiting religious sites. Cover shoulders and knees.',
    icon: Info,
  },
  {
    title: 'Ramadan',
    description: 'During Ramadan, avoid eating, drinking, or smoking in public during daylight hours.',
    icon: AlertTriangle,
  },
  {
    title: 'Photography',
    description: 'Always ask permission before photographing people. Some locations may require permits.',
    icon: Info,
  },
];

const BUDGET_ESTIMATES = {
  budget: {
    accommodation: '30-50 TND',
    meals: '20-40 TND',
    transport: '10-20 TND',
    activities: '20-40 TND',
  },
  mid_range: {
    accommodation: '100-200 TND',
    meals: '40-80 TND',
    transport: '30-50 TND',
    activities: '50-100 TND',
  },
  luxury: {
    accommodation: '300+ TND',
    meals: '100+ TND',
    transport: '100+ TND',
    activities: '200+ TND',
  },
};

export default function GuideScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Guide</Text>
        <Text style={styles.subtitle}>Essential information for your visit</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cultural Etiquette</Text>
        {ETIQUETTE_GUIDES.map((guide, index) => (
          <View key={index} style={styles.card}>
            <guide.icon size={24} color="#2E4A9F" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{guide.title}</Text>
              <Text style={styles.cardDescription}>{guide.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Budget Estimate</Text>
        <View style={styles.budgetContainer}>
          {Object.entries(BUDGET_ESTIMATES).map(([category, costs]) => (
            <View key={category} style={styles.budgetCard}>
              <Text style={styles.budgetCategory}>
                {category.replace('_', ' ').toUpperCase()}
              </Text>
              <View style={styles.budgetItems}>
                {Object.entries(costs).map(([item, cost]) => (
                  <View key={item} style={styles.budgetItem}>
                    <Text style={styles.budgetItemName}>
                      {item.replace('_', ' ')}
                    </Text>
                    <Text style={styles.budgetItemCost}>{cost}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Currency</Text>
        <View style={styles.card}>
          <DollarSign size={24} color="#2E4A9F" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Tunisian Dinar (TND)</Text>
            <Text style={styles.cardDescription}>
              The local currency is the Tunisian Dinar. It's recommended to exchange money at official banks or exchange offices. Credit cards are widely accepted in hotels and restaurants.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 32,
    color: '#1E293B',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#64748B',
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#1E293B',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748B',
  },
  budgetContainer: {
    gap: 16,
  },
  budgetCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  budgetCategory: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#2E4A9F',
    marginBottom: 12,
  },
  budgetItems: {
    gap: 8,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetItemName: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#1E293B',
    textTransform: 'capitalize',
  },
  budgetItemCost: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#64748B',
  },
});