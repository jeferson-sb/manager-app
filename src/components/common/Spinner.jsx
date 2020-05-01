import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

function Spinner() {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator color='#fff' size='small' />
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Spinner };
