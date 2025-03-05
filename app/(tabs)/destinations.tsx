import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const DESTINATIONS = [
  {
    id: '1',
    name: 'Sidi Bou Said',
    category: 'Coastal Town',
    image: 'https://images.unsplash.com/photo-1590167409677-4d78dd5a6b4f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Carthage',
    category: 'Historical Site',
    image: 'https://images.unsplash.com/photo-1601128212571-d4eaac1391b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Medina of Tunis',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1601128277419-b2f3b76e1d22?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'El Jem Amphitheatre',
    category: 'Roman Ruins',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Djerba',
    category: 'Island',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
  },
];

export default function DestinationsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Destinations</Text>
        <Text style={styles.subtitle}>Explore Tunisia's most beautiful places</Text>
      </View>

      <View style={styles.grid}>
        {DESTINATIONS.map((destination) => (
          <Link href={{pathname: '/(tabs)/destinations', params: {id: destination.id}}}>
            <Pressable style={styles.card}>
              <Image source={{ uri: destination.image }} style={styles.cardImage} />
              <View style={styles.cardOverlay} />
              <View style={styles.cardContent}>
                <Text style={styles.cardCategory}>{destination.category}</Text>
                <Text style={styles.cardTitle}>{destination.name}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
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
  grid: {
    padding: 12,
  },
  card: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  cardCategory: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: '#fff',
  },
});