import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import ContactUs from './contactUs'

const Main = () => (

    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact-us" component={ContactUs}></Route>
    </Switch>


)

export default Main;