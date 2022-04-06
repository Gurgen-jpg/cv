import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import JS from '../common/img/skills/JS.jpg'
import HTML from '../common/img/skills/HTML.png'
import ReactJS from '../common/img/skills/ReactJS.jpg'
import SCSS from '../common/img/skills/scss.png'

export const Skills = () => {
    let skillsList = [
        {
            icon: HTML,
            title: 'HTML',
            description: 'это текст-"рыба", часто испти и вэб-дизайне.'
        },
        {
            icon: SCSS,
            title: 'CSS',
            description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне.'
        },
        {
            icon: JS,
            title: 'JS',
            description: 'это текст-"рыба", часто используемый в '
        },
        {
            icon: ReactJS,
            title: 'React',
            description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне.'

        },

    ]
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.mainContainer} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>

                    <div className={s.skills}>
                        {
                            skillsList.map((s, id) => <Skill
                                key={id}
                                icon={s.icon}
                                title={s.title}
                                description={s.description}/>)
                        }
                    </div>

            </div>
        </div>
    );
};

