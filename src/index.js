import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
/* COMPONENTS */
import App from './views/App/App';
/* BROWSER HISTORY */
import createHistory from 'history/createBrowserHistory'
/* REDUX */
import store from './redux/store';
import {Provider} from 'react-redux';
/* CONFIG */
const history = createHistory();

history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
});

const Root = () => {
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}></Route>
            </Switch>
        </Router>
    </Provider>
}

ReactDOM.render(
    <Root/>, document.getElementById('root'));
