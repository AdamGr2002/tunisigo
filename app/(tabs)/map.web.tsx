import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Web-only attractions map using iframe
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Tunisia</Text>
        <Text style={styles.subtitle}>Discover cultural spots and attractions</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337893.2720361387!2d8.821082455071477!3d33.886917338215056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2sus!4v1708644124604!5m2!1sen!2sus"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
});