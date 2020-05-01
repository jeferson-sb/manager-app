import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ListItem({ employee }) {
  const navigation = useNavigation();

  function onItemSelect() {
    navigation.navigate('employeeEdit', { employee });
  }

  return (
    <TouchableOpacity onPress={() => onItemSelect()}>
      <CardSection newStyles={styles.wrapper}>
        <View style={styles.square}>
          <Feather name="user" size={30} color="#fff" />
        </View>
        <View>
          <Text style={[styles.text, styles.name]}>{employee.name}</Text>
          <Text style={[styles.text, styles.role]}>{employee.role}</Text>
          <Text style={styles.text}>${employee.salary}</Text>
          <Text style={styles.text}>{employee.phone}</Text>
        </View>
      </CardSection>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d3b',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  role: {
    opacity: 0.7,
    marginTop: -10,
    marginBottom: 10,
  },
  square: {
    width: 64,
    height: 64,
    borderRadius: 6,
    backgroundColor: '#4fa4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
