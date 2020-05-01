import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card({ children }) {
  return <View style={styles.containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    borderRadius: 2,
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
});

export { Card };
