import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Lawrence</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Change the background color here
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold', // Make text bold
  },
});

export default App;
