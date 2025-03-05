import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Search } from 'lucide-react-native';

const FEATURED_PLACES = [
  {
    id: '1',
    name: 'Sidi Bou Said',
    image: 'https://images.unsplash.com/photo-1590167409677-4d78dd5a6b4f?q=80&w=800&auto=format&fit=crop',
    description: 'Famous blue and white village overlooking the Mediterranean',
  },
  {
    id: '2',
    name: 'Carthage',
    image: 'https://images.unsplash.com/photo-1601128212571-d4eaac1391b3?q=80&w=800&auto=format&fit=crop',
    description: 'Ancient Phoenician city with rich archaeological sites',
  },
  {
    id: '3',
    name: 'Medina of Tunis',
    image: 'https://images.unsplash.com/photo-1601128277419-b2f3b76e1d22?q=80&w=800&auto=format&fit=crop',
    description: 'UNESCO World Heritage site with traditional souks',
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Marhba bik!</Text>
        <Text style={styles.title}>Discover Tunisia</Text>
      </View>

      <Pressable style={styles.searchBar}>
        <Search size={20} color="#94A3B8" />
        <Text style={styles.searchText}>Search destinations...</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Featured Places</Text>
      
      {FEATURED_PLACES.map((place) => (
        <Link key={place.id} href={{pathname:`/(tabs)/destinations`, params:{id: place.id}}}>
          <Pressable style={styles.card}>
            <Image source={{ uri: place.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{place.name}</Text>
              <Text style={styles.cardDescription}>{place.description}</Text>
            </View>
          </Pressable>
        </Link>
      ))}
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
  welcomeText: {
    fontFamily: 'ArefRuqaa-Regular',
    fontSize: 18,
    color: '#2E4A9F',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 32,
    color: '#1E293B',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 24,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchText: {
    marginLeft: 8,
    fontFamily: 'Cairo-Regular',
    color: '#94A3B8',
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#1E293B',
    marginHorizontal: 24,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 24,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748B',
  },
});