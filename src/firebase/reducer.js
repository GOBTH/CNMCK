// var redux = requires("redux");

// var defaultstate = {};

// var reducer = (state = defaultstate, action)=>{
//     return state;
// }

import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import keyReducer from './keyReducer'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  keyReducer,
})

export default rootReducer