import * as types from './types';
import * as firebase from 'firebase';
import * as RootNavigation from '../rootNavigation';

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user });
    RootNavigation.navigate('employeeList');
  };

  const loginUserFail = (dispatch, user) => {
    dispatch({ type: types.LOGIN_USER_FAILED, payload: user });
  };

  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};
