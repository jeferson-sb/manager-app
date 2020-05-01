import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CardSection({ children, newStyles }) {
  return <View style={[styles.containerStyle, newStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#34495e',
    padding: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export { CardSection };
