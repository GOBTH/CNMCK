import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/HomeContainer';
import Infor from './component/Infor';
import Navbar from './component/CustomNavbar';
import { Provider } from 'react-redux';
import configureStore from './firebase/store'
import Login from './component/Login/Login';
import Signup from './component/Sign up/Signup';
const initialState = window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Home} />
                        <Route path="/infor" component={Infor} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;