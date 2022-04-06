import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {images} from "../common/img/ImageState";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.mainContainer} ${s.footerContainer}`}>
                <h4 className={s.title}>Sarkisdganyan Gurgen</h4>

                <div className={s.imgContainer}>
                    <img src={images.footerImages.linkedin}
                         className={s.icon}
                         alt={'socialNetwork'}/>
                    <span>linkedin</span>
                    <img src={images.footerImages.instagram}
                         className={s.icon}
                         alt={'socialNetwork'}/>
                    <span>Instagram</span>
                    <img src={images.footerImages.telegram}
                         className={s.icon}
                         alt={'socialNetwork'}/>
                    <span>telegram</span>
                    <img src={images.footerImages.whatsapp}
                         className={s.icon}
                         alt={'socialNetwork'}/><span>whatsapp</span>
                </div>

                <span>&#169; Sarkisdganyan Gurgen, 2022 </span>
            </div>
        </div>
    );
};

