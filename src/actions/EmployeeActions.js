import * as firebase from 'firebase';
import * as types from './types';
import * as RootNavigation from '../rootNavigation';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift, role, salary }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift, role, salary })
      .then(() => {
        dispatch({ type: 'EMPLOYEE_CREATE' });
        RootNavigation.navigate('employeeList');
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({
          type: types.EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid, role, salary }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift, role, salary })
      .then(() => {
        dispatch({ type: types.EMPLOYEE_SAVE_SUCCESS });
        RootNavigation.navigate('employeeList');
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        RootNavigation.navigate('employeeList');
      });
  };
};
