

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as ActionCreators from './actioncreators';

import Main from './components/Main';

function mapStateToProps(state) {
    return {
        personel: state.Personel
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;