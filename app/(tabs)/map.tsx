import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Platform } from 'react-native';

// Import components based on platform
let MapComponent = () => null;

// We're using dynamic imports with require to avoid the module import issue
// This file serves as a router to the platform-specific implementations
if (Platform.OS === 'web') {
  // This is just a reference - it doesn't actually import the web module here
  MapComponent = require('./map.web').default;
} else {
  // This is just a reference - it doesn't actually import the native module here
  MapComponent = require('./map.native').default;
}

export default function MapScreen() {
  return <MapComponent />;
}