import React from 'react';
import s from './Navigation.module.css'




export const Navigation = () => {
    return (
        <div className={s.nav}>
            <a href="Main">Main</a>
            <a href="Skills">Skills</a>
            <a href="Projects">Projects</a>
            <a href="Contacts">Contacts</a>
            <a href=""></a>
        </div>
    );
};

