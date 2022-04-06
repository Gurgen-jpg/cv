import React from 'react';
import s from './project.module.css'

type ProjectType = {
    title: string,
    description: string
    photo: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>
            <div className={s.containerForImage}>
                <img className={s.projectImage}
                     src={props.photo}
                     alt={'Picture'}/>
                <button className={s.btn}>Watch</button>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    );
};

