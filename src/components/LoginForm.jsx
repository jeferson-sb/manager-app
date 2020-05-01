import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

function LoginForm(props) {
  const onEmailChange = (text) => props.emailChanged(text);
  const onPasswordChange = (text) => props.passwordChanged(text);

  function onSubmit() {
    const { email, password } = props;
    props.loginUser({ email, password });
  }

  return (
    <View style={{ backgroundColor: '#2c3e50', flex: 1 }}>
      <Card>
        {props.error ? (
          <Text style={styles.errorText}>{props.error}</Text>
        ) : null}

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={onEmailChange}
            value={props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={onPasswordChange}
          />
        </CardSection>

        <CardSection>
          <Button
            newStyles={props.loading ? { opacity: 0.4 } : null}
            onPress={() => onSubmit()}
          >
            {props.loading ? <Spinner /> : 'Login'}
          </Button>
        </CardSection>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#e74c3c',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
