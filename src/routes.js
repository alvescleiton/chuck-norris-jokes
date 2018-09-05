import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Page404 from './pages/Page404'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/chuck-norris-jokes/" exact component={ Home } />
            </Switch>
        )
    }
}