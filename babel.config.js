module.exports = function(api) {
    api.cache(true);
    
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // Add this plugin for web platform
        process.env.EXPO_TARGET === 'web' ? 'react-native-web' : null,
      ].filter(Boolean),
    };
  };