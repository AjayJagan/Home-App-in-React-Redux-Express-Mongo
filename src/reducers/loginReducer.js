import { types } from '../actions/loginAction';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  // successMessage: '',
  // failureMessage:'',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.HANDLE_FIELD_CHANGE:
      return {
          ...state,
          [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
}
