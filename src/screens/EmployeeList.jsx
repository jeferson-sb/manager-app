import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions/EmployeeActions';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

function EmployeeList(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      await props.employeesFetch();
      setEmployees(props.employees);
    };

    fetchEmployees();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Employees</Text>

      {!employees.length ? (
        <Text style={{ color: '#fff' }}>No employees found! :(</Text>
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(employee) => employee.uid}
          renderItem={({ item }) => <ListItem employee={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    backgroundColor: '#2c3e50',
    flex: 1,
  },
  heading: {
    color: '#6b9cc9',
    fontSize: 25,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  if (state.employees) {
    const employees = Object.entries(state.employees).map((item) => {
      const [uid, data] = item;
      return { ...data, uid };
    });
    return { employees };
  }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
