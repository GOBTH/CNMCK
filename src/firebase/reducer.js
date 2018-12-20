// var redux = requires("redux");

// var defaultstate = {};

// var reducer = (state = defaultstate, action)=>{
//     return state;
// }

import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
})

export default rootReducer