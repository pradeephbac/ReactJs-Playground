import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Summarizer from './components/Summarizer/Summarizer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Signup from './components/Signup/SignUp'

class Main extends React.Component {
    render() {
        return (
            <Router> 
                 <Header />
                <Route exact path="/" component={Home} /> 
                <Route exact path="/summarizer" component={Summarizer} /> 
                <Route exact path="/signin" component={Login} /> 
                <Route exact path="/signup" component={Signup} /> 
            </Router>
        )
    }
}



export default Main;