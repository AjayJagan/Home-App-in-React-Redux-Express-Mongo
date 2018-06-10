import { types } from '../actions/loginAction';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  open: false,
  message: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.HANDLE_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case types.SUBMITTED_FORM:
      return {
        ...state,
        open: true,
        message: 'Successfully Logged In',
      };
    case types.SNACK_CLOSE:
      return {
        ...state,
        open: false,
      };
    case types.SUBMIT_FAILED:
      return {
        ...state,
        open: true,
        message: 'SignUp Failure'
      };

    default:
      return state;
  }
}
