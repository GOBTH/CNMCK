import { connect } from 'react-redux'
import {
    compose,
} from 'recompose'
import { firebaseConnect, withFirebase } from 'react-redux-firebase'
import Home from './Home';
export default compose(
    firebaseConnect(['/users']),
    connect(({ firebase }) => ({
        users: firebase.data.users,
    })),
    withFirebase,
)(Home);