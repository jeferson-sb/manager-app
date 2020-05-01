import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#999"
        autoCapitalize="sentences"
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    borderRadius: 2,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#202d3b',
  },
  labelStyle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    opacity: 0.6,
  },
  containerStyle: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export { Input };
