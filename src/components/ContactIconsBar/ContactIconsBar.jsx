import React from 'react';
import s from "../ContactIconsBar/ContactIconsBar.module.css";
import {ReactComponent as Message} from "../StuffCollection/Logos/Svg/Messsage.svg";
import {ReactComponent as Phone} from "../StuffCollection/Logos/Svg/Phone.svg";

export const ContactIconsBar = () => {
    return (
        <div className={s.contactIconsBar}>
            <a
                className={s.messageButton}
                href="mailto:nat@geo.com"
            >
                <Message/>
            </a>

            <a
                className={s.phoneButton}
                href="tel:+123456789"
            >
                <Phone/>
            </a>
        </div>
    );
};