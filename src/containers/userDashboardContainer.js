import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import userDashboard from '../components/userDashboard';
import { handleLogout } from "../actions/userDashboardAction";


const mapStateToProps = (state) => ({
    userDashboard: state.signIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        handleLogout: handleLogout,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(userDashboard);