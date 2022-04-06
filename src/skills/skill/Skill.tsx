import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    title?: string
    description?: string
    icon?:string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={props.icon} alt={props.title}/>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>

    );
};

