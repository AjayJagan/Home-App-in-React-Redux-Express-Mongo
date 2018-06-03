import axios from 'axios';

export const types = {
  HANDLE_FIELD_CHANGE: 'HANDLE_FIELD_CHANGE',
  SUBMITTED_FORM : 'SUBMITTED_FORM',
  //SUBMIT_FAILED: 'SUBMIT_FAILED',
};

export const handleFieldChange = (name, value) => ({
  type: types.HANDLE_FIELD_CHANGE,
  payload: {
    name: name,
    value: value
  }
});

export const onSubmitForm = (firstName, lastName, email, password, phone) => {
  const payload = {
      firstName, lastName, email, password, phone,
  };

  return (dispatch) => axios.post('http://localhost:3000/user/add', payload).then(response => {
    dispatch({
      type: types.SUBMITTED_FORM,
      payload: {
        response: response.data
      }
    });
    // dispatch({
    //   type: types.TOAST,
    //   payload: {
    //       msg: 'Successfully added',
    //   }
    // })
    return response.data;
  }).catch(() => dispatch({type: types.SUBMIT_FAILED}));
};

// function thunk(action, next, dispatch) {
//   if (typeof action === 'object') {
//     next(action); // reducers
//   }
//   if (typeof action === 'function') {
//     action(dispatch);
//   }
// }
