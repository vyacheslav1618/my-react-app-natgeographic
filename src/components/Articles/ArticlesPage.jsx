import React from "react";
import s from './ArticlesPage.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {AnimalsCategoryArticleList} from "./SelectedCategoryArticlesList/AnimalsCategoryArticleList";
import {ForestsCategoryArticleList} from "./SelectedCategoryArticlesList/ForestsCategoryArticleList";
import {InsectsCategoryArticleList} from "./SelectedCategoryArticlesList/InsectsCategoryArticleList";
import {MicroscopicWorldCategoryArticleList} from "./SelectedCategoryArticlesList/MicroscopicWorldCategoryArticleList";
import {OceansCategoryArticleList} from "./SelectedCategoryArticlesList/OceansCategoryArticleList";
import {SeasCategoryArticleList} from "./SelectedCategoryArticlesList/SeasCategoryArticleList";

const ArticleCategory = () => {
    return <nav className={s.articleCategoriesBar}>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/animals"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Animals</NavLink>
        </div>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/forests"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Forests</NavLink>
        </div>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/insects"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Insects</NavLink>
        </div>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/microscopic-world"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Microscopic
                World</NavLink>
        </div>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/oceans"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Oceans</NavLink>
        </div>
        <div className={s.articleSelectedBar}>
            <NavLink to="/articles/seas"
                     className={navData => navData.isActive ? s.articleActiveBarFont : s.articleSelectedBarFont}>Seas</NavLink>
        </div>

    </nav>
}

const ArticlesPage = () => {
    return <div className={s.articlePage}>
        <ArticleCategory/>
        <div>
            <Routes>
                <Route path="animals" element={<AnimalsCategoryArticleList/>}/>
                <Route path="forests" element={<ForestsCategoryArticleList/>}/>
                <Route path="insects" element={<InsectsCategoryArticleList/>}/>
                <Route path="microscopic-world" element={<MicroscopicWorldCategoryArticleList/>}/>
                <Route path="oceans" element={<OceansCategoryArticleList/>}/>
                <Route path="seas" element={<SeasCategoryArticleList/>}/>
            </Routes>
        </div>
    </div>
}

export default ArticlesPage;
