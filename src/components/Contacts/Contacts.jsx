import React from "react";
import s from './Contacts.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const Contacts = (props) => {

    const userNameOfAppeal = React.createRef();
    const emailOfAppeal = React.createRef();
    const appealTextOfAppeal = React.createRef();

    const clickAddAppeal = () => {

        const newCreatedAppeal = {
            name: userNameOfAppeal.current.value,
            email: emailOfAppeal.current.value,
            appeal: appealTextOfAppeal.current.value
        };
        props.addAppeal(newCreatedAppeal);
        alert("Thank you! Your appeal has been send!");
    }

    return <div className={s.content}>

        <MainWallpaper/>
        <div className={s.descriptionText}>
            <p>Our tel./fax : +123 456 789 101</p>
            <p>e-mail : nat@geo.com</p>
            <p>You can contact us for complaints and suggestions. Please, fill out the form below</p>
            <div className={s.appealForm}>
                <form>
                    <div>
                        <input className={s.upperAreas} ref={userNameOfAppeal} type="text"
                               placeholder="Please, enter your name" minLength="2"
                               maxLength="50" size="50"/>
                    </div>
                    <div>
                        <input className={s.upperAreas} ref={emailOfAppeal} type="email" required maxLength="50"
                               size="50"
                               placeholder="Please, enter your E-mail"/>
                    </div>
                    <textarea className={s.appealArea} ref={appealTextOfAppeal} rows="10" cols="50" minLength="20"
                              maxLength="7000"
                              placeholder="Please, enter your appeal here..."></textarea>
                    <div>
                        <input id="attachments" type="file"/>
                    </div>
                    <div>
                        <input className={s.formButton} onClick={clickAddAppeal} type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
}