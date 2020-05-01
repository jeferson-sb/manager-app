import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from '../components/common';

function EmployeeForm({ name, phone, shift, role, salary, employeeUpdate }) {
  return (
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={(text) => employeeUpdate({ prop: 'name', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Role"
          placeholder="Software Enginneer..."
          value={role}
          onChangeText={(text) => employeeUpdate({ prop: 'role', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          keyboardType="number-pad"
          label="Salary"
          placeholder="$40"
          value={salary}
          onChangeText={(text) =>
            employeeUpdate({ prop: 'salary', value: text })
          }
        />
      </CardSection>

      <CardSection>
        <Input
          keyboardType="number-pad"
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={(text) =>
            employeeUpdate({ prop: 'phone', value: text })
          }
        />
      </CardSection>

      <CardSection newStyles={{ flexDirection: 'column' }}>
        <Text style={styles.pickerLabel}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={(value) => employeeUpdate({ prop: 'shift', value })}
          style={styles.picker}
        >
          <Picker.Item label="Monday" value="Monday" color="#fff" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerLabel: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.6,
    marginBottom: 10,
    marginLeft: 5,
  },
  picker: { height: 50, width: '100%', color: '#fff' },
});

const mapStateToProps = (state) => {
  const { name, phone, shift, role, salary } = state.employeeForm;
  return { name, phone, shift, role, salary };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
