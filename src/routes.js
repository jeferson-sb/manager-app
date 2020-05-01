import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { navigationRef, navigate } from './rootNavigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './screens/EmployeeList';
import EmployeeCreate from './screens/EmployeeCreate';
import EmployeeEdit from './screens/EmployeeEdit';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerBackTitle: null,
          headerStyle: { backgroundColor: '#1e2d3b' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="login"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="employeeList"
          component={EmployeeList}
          options={{
            title: 'Employee List',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigate('employeeCreate')}>
                <Feather name="plus-circle" size={20} color="#fff" />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: { paddingHorizontal: 20 },
          }}
        />
        <Stack.Screen
          name="employeeCreate"
          component={EmployeeCreate}
          options={{ title: 'Create Employee' }}
        />
        <Stack.Screen
          name="employeeEdit"
          component={EmployeeEdit}
          options={{ title: 'Edit Employee' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
