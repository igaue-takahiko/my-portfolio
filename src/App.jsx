import React from 'react';
import "./App.css"
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, HeroSection, } from "./components";
import { AboutSection, WorksSection, SkillsSection } from './components/sections';

const App = () => {
    return (
        <>
        <Router>
            <Header />
            <HeroSection />
            <Switch>
                <Route exact path='/' component={AboutSection} />
                <Route exact path='/skills' component={SkillsSection} />
                <Route exact path='/works' component={WorksSection} />
            </Switch>
        </Router>
        </>
    );
}

export default App;
