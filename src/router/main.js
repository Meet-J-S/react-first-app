import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from '../components/App'
import Home from '../container/Home'
import SignUp from '../container/SignUp'
import List from '../container/List'

function Main({ store }) {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/home/" component={Home}/>
                    <Route exact path="/signup/" component={SignUp}/>
                    <Route exact path="/list/" component={List}/>
                </Switch>
            </Router>
        </Provider>
    )
}

Main.propTypes = {
    store: PropTypes.object.isRequired
};

export default Main