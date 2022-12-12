import s from "../ContentAreaWrapper/ContentAreaWrapper.module.css";
import React from "react";

export const ContentAreaWrapper = (props) => {
    return <div className={s.ContentAreaWrapper}>
        {props.children}
    </div>;
}