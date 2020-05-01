import * as types from '../actions/types';
const initialState = { name: '', phone: '', shift: '', role: '', salary: '' };

export default function (state = initialState, action) {
  switch (action.type) {
    case types.EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case types.EMPLOYEE_CREATE:
      return initialState;
    default:
      return state;
  }
}
