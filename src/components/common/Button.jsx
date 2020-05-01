import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button({ onPress, children, newStyles, textColor }) {
  const buttonStyle = StyleSheet.flatten([styles.buttonStyle, newStyles]);
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={[styles.textStyle, { color: textColor || '#fff' }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: '#4fa4ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4fa4ff',
    marginHorizontal: 5,
  },
});

export { Button };
