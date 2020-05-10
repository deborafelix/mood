import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mood from './pages/WhatMood';
import Happy from './pages/Happy';
import Sad from './pages/Sad';
import Neutral from './pages/Neutral';


const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Mood} />
            {/* <Route exact path="/happy" component={Happy} /> */}
            <Route exact path="/sad" component={Sad} />
            {/* <Route exact path="/neutral" component={Neutral} /> */}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;