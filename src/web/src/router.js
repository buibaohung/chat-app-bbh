import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './screens/login/Login'
import Main from './screens/layout/MainLayout'

const Root = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/app" component={Main} />
        </div>
    </Router>
)

export default Root;