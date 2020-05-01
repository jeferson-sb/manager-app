import React from 'react';
import { Card, CardSection, Button } from '../components/common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeCreate(props) {
  function onSubmit() {
    const { employeeCreate, name, phone, shift, role, salary } = props;

    employeeCreate({
      name,
      phone,
      shift: shift || 'Monday',
      role,
      salary,
    });
  }

  return (
    <Card>
      <EmployeeForm {...props} />
      <CardSection>
        <Button onPress={() => onSubmit()}>Create</Button>
      </CardSection>
    </Card>
  );
}

const mapStateToProps = (state) => {
  const { name, phone, shift, role, salary } = state.employeeForm;
  return { name, phone, shift, role, salary };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
);
