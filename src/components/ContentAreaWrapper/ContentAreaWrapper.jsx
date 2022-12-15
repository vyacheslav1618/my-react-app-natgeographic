import s from "../ContentAreaWrapper/ContentAreaWrapper.module.css";
import React from "react";

export const ContentAreaWrapper = (props) => {
    return <div className={s.contentAreaWrapper}>
        {props.children}
    </div>;
}