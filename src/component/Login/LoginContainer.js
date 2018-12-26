import { connect } from 'react-redux'
import {
    compose,
} from 'recompose'
import { firebaseConnect, withFirebase } from 'react-redux-firebase'
import Login from './Login';
export default compose(
    firebaseConnect(['/users', '/posts']),
    connect(({ firebase }) => ({
        users: firebase.data.users,
        posts: firebase.data.posts,
    })),
    withFirebase,
)(Login);