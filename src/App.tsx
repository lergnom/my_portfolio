import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AboutMe from './about_me/AboutMe';
import Skills from "./skills/Skills";
import Works from './works/Works';
import Header from './header/Header';
import RemoteJob from './remoteJob/RemoteJob';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*<Route path={"/"} render={() => <Main/>}/>*/}
                {/*<Route path={"/budjet"} render={() => <BudjetCalc/>}/>*/}
                <Header/>
                <AboutMe/>
                <Skills/>
                <Works/>
                <RemoteJob/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
