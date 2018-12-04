import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Infor from './component/Infor';
import Navbar from './component/CustomNavbar';
class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/infor" component={Infor} />
            </div>
        </Router>
        );
    }
}
export default App;