import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const ATTRACTIONS = [
  {
    id: '1',
    name: 'Sidi Bou Said',
    description: 'Famous blue and white coastal town',
    coordinate: { latitude: 36.8711, longitude: 10.3414 },
  },
  {
    id: '2',
    name: 'Carthage Ruins',
    description: 'Ancient Roman and Phoenician ruins',
    coordinate: { latitude: 36.8525, longitude: 10.3244 },
  },
  {
    id: '3',
    name: 'El Jem Amphitheatre',
    description: 'One of the largest Roman amphitheaters',
    coordinate: { latitude: 35.3000, longitude: 10.7167 },
  },
  {
    id: '4',
    name: 'Medina of Tunis',
    description: 'UNESCO World Heritage site',
    coordinate: { latitude: 36.7988, longitude: 10.1719 },
  },
  {
    id: '5',
    name: 'Djerba',
    description: 'Beautiful island with rich history',
    coordinate: { latitude: 33.8075, longitude: 10.8451 },
  },
];

export default function NativeMapScreen() {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Tunisia</Text>
        <Text style={styles.subtitle}>Discover cultural spots and attractions</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.0,
            longitude: 9.0,
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
          mapType="terrain">
          {ATTRACTIONS.map((attraction) => (
            <Marker
              key={attraction.id}
              coordinate={attraction.coordinate}
              onPress={() => setSelectedMarker(attraction.id)}>
              <MapPin size={24} color="#2E4A9F" />
              <Callout>
                <View style={styles.callout}>
                  <Text style={styles.calloutTitle}>{attraction.name}</Text>
                  <Text style={styles.calloutDescription}>
                    {attraction.description}
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
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
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  callout: {
    padding: 8,
    maxWidth: 200,
  },
  calloutTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 4,
  },
  calloutDescription: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748B',
  },
});