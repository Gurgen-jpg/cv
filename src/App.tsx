import React from 'react';
import s from './App.module.css'


import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Telework} from "./teleWork/Telework";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Telework/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
