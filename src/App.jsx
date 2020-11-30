import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, HeroSection } from "./components";

const App = () => {
    return (
        <>
        <Router>
            <Header />
            <HeroSection />
            <Switch>
                <Route exact path='/' />
            </Switch>
        </Router>
        </>
    );
}

export default App;
