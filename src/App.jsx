import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from "./components";

const App = () => {
    return (
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' />
            </Switch>
        </Router>
        </>
    );
}

export default App;
