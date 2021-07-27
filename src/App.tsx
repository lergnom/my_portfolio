import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import AboutMe from "./about_me/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
        </div>
    );
}

export default App;
