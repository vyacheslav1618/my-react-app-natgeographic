import React from "react";
import c from '../ContentAreaWrapper/content.module.css';
import s from './Contacts.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";
import {ContentAreaWrapper} from "../ContentAreaWrapper/ContentAreaWrapper";
import {ContactIconsBar} from "../ContactIconsBar/ContactIconsBar";

export const Contacts = (props) => {

    const userNameOfAppeal = React.createRef();
    const emailOfAppeal = React.createRef();
    const appealTextOfAppeal = React.createRef();

    const clickAddAppeal = () => {
        let newCreatedAppeal = {
            name: userNameOfAppeal.current.value,
            email: emailOfAppeal.current.value,
            appeal: appealTextOfAppeal.current.value
        };
        props.dispatch({type: 'ADD-APPEAL', newCreatedAppeal});
        alert("Thank you! Your appeal has been send!");
    }

    const onAppealChange = () => {
        let text = appealTextOfAppeal.current.value;
        props.dispatch({type: 'UPDATE-NEW-APPEAL-TEXT', newText: text});
    }

    return <div className={c.content}>

        <MainWallpaper/>

        <ContentAreaWrapper>

            <div className={s.descriptionText}>

                <ContactIconsBar/>

                <div>
                    <a className={s.contactLink} href="mailto:nat@geo.com">Click here to email us: nat@geo.com</a>
                    <p className={s.textRow}> or </p>
                    <a className={s.contactLink} href="tel:+123456789">Call us: +1 (2) 345 67 89</a>
                </div>
                <p className={s.textRow}>You can contact us for complaints and suggestions. Please, fill out the form
                    below</p>
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
                        <textarea className={s.appealArea}
                                  onChange={onAppealChange}
                                  value={props.newAppealText}
                                  ref={appealTextOfAppeal}
                                  rows="10" cols="50"
                                  minLength="20" maxLength="7000"
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
        </ContentAreaWrapper>
    </div>
}