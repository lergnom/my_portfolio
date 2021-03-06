import React from 'react';
import './App.css';
import Header from "./header/Header";
import AboutMe from "./about_me/AboutMe";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import RemoteJob from "./remoteJob/RemoteJob";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function Main() {
    return (
        <div>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <RemoteJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default Main;
