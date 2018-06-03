import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { handleFieldChange, onSubmitForm } from '../actions/loginAction';
import loginPage from '../components/loginPage';

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSubmitForm: onSubmitForm,
  handleFieldChange: handleFieldChange
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
