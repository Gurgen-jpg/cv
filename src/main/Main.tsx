import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.mainContainer}>
                <div className={s.introduction}>
                    <span>Hi there</span>
                    <h1>I`m Gurgen Sarkisdganyan</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

