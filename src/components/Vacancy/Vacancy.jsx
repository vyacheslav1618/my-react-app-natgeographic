import React from "react";
import s from './Vacancy.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const Vacancy = () => {
    return <div className={s.content}>
        <MainWallpaper/>
        <div className={s.descriptionText}>
            The available vacancies will be displayed here.
        </div>
    </div>
}
