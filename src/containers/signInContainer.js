import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import signIn from '../components/signIn';
import { handleTextChange, handleSignIn } from "../actions/signInAction";

const mapStateToProps = (state) => ({
    signIn: state.signIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        handleTextChange,
        handleSignIn,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(signIn);