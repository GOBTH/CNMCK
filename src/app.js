import React, { Component } from 'react';
import './app.css';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom'
import Home from './component/HomeContainer';
import Infor from './component/Infor';
import { Provider } from 'react-redux';
import configureStore from './firebase/store'
import Login from './component/Login/LoginContainer';
import Signup from './component/Sign up/Signup';
import decode from 'jwt-decode';
const initialState = window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)

const checkAuth = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!token || !refreshToken) {
      return false;
    }
  
    try {
      const { exp } = decode(refreshToken);
  
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
  
    } catch (e) {
      return false;
    }
  
    return true;
  }
  
  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      checkAuth() ? (
        <Component/>
      ) : this.props.history.push('/login')
    )} />
  )


class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/invite" component={Signup} />
                        <Route path="/home" component={Home} />
                        <Route path="/infor" component={Infor} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;