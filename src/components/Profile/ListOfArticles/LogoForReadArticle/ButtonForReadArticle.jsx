import React from "react";
import s from './ButtonForReadArticle.module.css';

const ButtonForReadArticle = () => {
    return <div className={s.content}>
        <div className={s.content}>
            <img
                src='https://cdn.icon-icons.com/icons2/390/PNG/512/white-book_38568.png' width={20}
                alt=''/>
        </div>
        <div>
            <button>Read</button>
        </div>
    </div>
}
export default ButtonForReadArticle;
