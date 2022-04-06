import React from 'react';
import s from './Telework.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Telework = () => {
    return (
        <div className={s.teleworkBlock}>

            <div className={`${styleContainer.mainContainer} ${s.teleworkContainer}`}><h2>Hire to work remotely</h2>
                <button className={s.btn}>Hire</button>
            </div>
        </div>

    );
};

