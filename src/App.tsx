import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import AboutMe from "./about_me/AboutMe";
import Skills from "./skills/Skills";
import Works from "./works/Works";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
