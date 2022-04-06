import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";

export const Projects = () => {
    const projectList = [
        {
            title: 'Social network',
            photo: 'https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150405509/38967820-social-network-social-media-business-people-tecnolog%C3%ADa-concept.jpg',
            description: 'unknown printer took a galley of' +
                ' type and scrambled it to make a type specimen'
        },
        {
            title: 'TodoList',
            photo: 'https://camo.githubusercontent.com/ab9c78444967830124774b23ce9686f66f999e43e289328161d8c6b7cfcf0f9b/68747470733a2f2f636c69636b75702e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30312f746f2d646f2d6c6973742d617070732d3134303078313035302e706e67',
            description: 'unknown printer took a galley of' +
                ' type and scramble'
        }]

    return (
        <div className={s.projectsBlock}>
            <h2 className={s.title}>My projects</h2>
            <div className={`${styleContainer.mainContainer} ${s.projectsContainer}`}>
                {
                    projectList.map((project, id) => <Project
                        title={project.title}
                        description={project.description}
                        photo={project.photo}
                    />)
                }

            </div>

        </div>
    );
};

