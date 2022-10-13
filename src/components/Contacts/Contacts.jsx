import React from "react";
import s from './Contacts.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const Contacts = () => {
    return <div className={s.content}>
        <MainWallpaper/>
        <div className={s.descriptionText}>
            <p>Our tel./fax : +123 456 789</p>
            <p>e-mail : nat@geo.com</p>
        </div>
    </div>
}