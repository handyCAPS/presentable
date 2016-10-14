

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as ActionCreators from './actioncreators';

import Root from './components/Root';

function mapStateToProps(state) {
    return {
        personel: state.Personel,
        selectedUser: state.SelectedUser
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;