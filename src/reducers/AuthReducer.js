import * as types from '../actions/types';
const initialState = {
  email: '',
  password: '',
  user: null,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case types.LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
    case types.LOGIN_USER_FAILED:
      return {
        ...state,
        error: 'Your e-mail and/or password are incorrect',
        loading: false,
      };
    default:
      return state;
  }
}
