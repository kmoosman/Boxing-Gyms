import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Home from './components/Home';

const RouterComponent = () => {
    return (
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} title="Home" />
            <Scene  key="login" component={Login} title="Login" />
            
          </Scene >


        </Router>


    )
}

export default RouterComponent;