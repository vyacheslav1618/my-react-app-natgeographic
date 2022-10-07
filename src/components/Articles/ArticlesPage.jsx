import React from "react";
import s from './ArticlesPage.module.css'

const ArticlesPage = () => {
    return <div className={s.articlePage}>

        <div className={s.articleCategories}>
            <div className={s.category}>Animals</div>
            <div className={s.category}>Microscopic World</div>
            <div className={s.category}>Insects</div>
            <div className={s.category}>Forests</div>
            <div className={s.category}>Oceans</div>
            <div className={s.category}>Seas</div>
        </div>
        <div className={s.articlesOfSelectedCategory}>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
        </div>
    </div>
}

export default ArticlesPage;
