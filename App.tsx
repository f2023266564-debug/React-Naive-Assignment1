 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎉 Hello World! 🎉</Text>
      <Text style={styles.subtext}>This is my first React Native App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00E676',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default App;