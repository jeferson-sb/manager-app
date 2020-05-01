import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Linking } from 'expo';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import EmployeeForm from '../components/EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components/common';

function EmployeeEdit({
  route,
  employeeSave,
  employeeUpdate,
  employeeDelete,
  name,
  phone,
  shift,
  role,
  salary,
}) {
  const [showModal, setShowModal] = useState(false);
  const { employee } = route.params;

  useEffect(() => {
    Object.entries(employee).forEach((employee) => {
      const [prop, value] = employee;
      employeeUpdate({ prop, value });
    });
  }, []);

  function handleSubmit() {
    employeeSave({ name, phone, shift, uid: employee.uid, role, salary });
  }

  function handleSchedule() {
    const txt = `Your upcoming shift is on ${shift}`;
    Linking.openURL(`sms:${phone}?body=${txt}`);
  }

  return (
    <Card>
      <EmployeeForm />

      <CardSection>
        <Button onPress={() => handleSubmit()}>Save Changes</Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => handleSchedule()} newStyles={styles.smallBtn}>
          <Feather name="message-square" size={20} color="#fff" />
        </Button>
        <Button
          onPress={() => setShowModal(!showModal)}
          newStyles={styles.smallBtn}
        >
          <Feather name="trash" size={20} color="#fff" />
        </Button>
      </CardSection>

      <Confirm
        visible={showModal}
        onAccept={() => employeeDelete(employee.uid)}
        onDecline={() => setShowModal(false)}
      >
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  );
}

const styles = StyleSheet.create({
  smallBtn: {
    width: '48%',
  },
});

const mapStateToProps = (state) => {
  const { name, phone, shift, role, salary } = state.employeeForm;
  return { name, phone, shift, role, salary };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
