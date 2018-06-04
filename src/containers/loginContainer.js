import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { handleFieldChange, onSubmitForm, snackClose } from '../actions/loginAction';
import loginPage from '../components/loginPage';

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  snackClose:snackClose,
  onSubmitForm: onSubmitForm,
  handleFieldChange: handleFieldChange
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
