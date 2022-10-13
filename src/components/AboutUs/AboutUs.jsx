import React from "react";
import s from './AboutUs.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const AboutUs = () => {
    return <div className={s.content}>
        <MainWallpaper/>
        <div className={s.headerText}>
            National Geographic Society
        </div>
        <div className={s.descriptionText}>
            We support a diverse, international community of changemakers — National Geographic Explorers — who use
            the power of science, exploration, education, and storytelling to illuminate and protect the wonder of our
            world.
        </div>
    </div>
}