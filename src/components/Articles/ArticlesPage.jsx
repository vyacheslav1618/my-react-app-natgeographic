import React from "react";
import s from './ArticlesPage.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {articlesListOfSelectedCategoryData, articleCategoryData} from "../../redux/data";
import {AnimalsCategoryArticleList} from "./SelectedCategoryArticlesList/AnimalsCategoryArticleList";
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";
import {ForestsCategoryArticleList} from "./SelectedCategoryArticlesList/ForestsCategoryArticleList";
import {InsectsCategoryArticleList} from "./SelectedCategoryArticlesList/InsectsCategoryArticleList";
import {MicroscopicWorldCategoryArticleList} from "./SelectedCategoryArticlesList/MicroscopicWorldCategoryArticleList";
import {OceansCategoryArticleList} from "./SelectedCategoryArticlesList/OceansCategoryArticleList";
import {SeasCategoryArticleList} from "./SelectedCategoryArticlesList/SeasCategoryArticleList";

/*this component render 2nd left side bar*/
const ArticleCategory = (props) => {
    /*const path = "/articles/" + props.id*/
    return <nav className={s.articleSelectedBar}>
        <div>
            <NavLink to="/animals"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Animals</NavLink>
        </div>
        <div>
            <NavLink to="/forests"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Forsts</NavLink>
        </div>
        <div>
            <NavLink to="/insects"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Insects</NavLink>
        </div>
        <div>
            <NavLink to="/microscopic-world"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Microscopic World</NavLink>
        </div>
        <div>
            <NavLink to="/oceans"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Oceans</NavLink>
        </div>
        <div>
            <NavLink to="/seas"
                     className={navData => navData.isActive ? s.active : s.articleSelectedBarFont}>Seas</NavLink>
        </div>
        <Routes>
            <Route path="animals" element={<AnimalsCategoryArticleList/>}/>
            <Route path="forests" element={<ForestsCategoryArticleList/>}/>
            <Route path="insects" element={<InsectsCategoryArticleList/>}/>
            <Route path="microscopic-world" element={<MicroscopicWorldCategoryArticleList/>}/>
            <Route path="oceans" element={<OceansCategoryArticleList/>}/>
            <Route path="seas" element={<SeasCategoryArticleList/>}/>
        </Routes>
    </nav>
}

/*this is an old version
const ArticlesListOfSelectedCategory = (props) => {
    const path = "/articles/" + props.id
    return <div className={s.articleSelectedBar}>
        <NavLink to={path}
                 className={s.articlesListOfSelectedCategory}>{props.name}</NavLink>
    </div>
}*/

/*this component render right grid area that contains list of articles*/
const ArticlesListOfSelectedCategory = () => {
    return <div className={s.articleSelectedBar}>
        <MainWallpaper/>
    </div>
}

const articleCategoryDataElements = articleCategoryData
    .map(ac => <ArticleCategory name={ac.name} id={ac.id}/>);

const articlesListOfSelectedCategoryDataElements = articlesListOfSelectedCategoryData
    .map(al => <ArticlesListOfSelectedCategory name={al.name}/>)

const ArticlesPage = () => {
    return <div className={s.articlePage}>
        {/*render a first grid-section (left) with bar of categories list*/}
        <div className={s.articleCategoriesBar}>
            {articleCategoryDataElements}
        </div>
        {/*render a second grid-section (right) with list of "Example Article N"*/}
        <div className={s.articlesListOfSelectedCategory}>
            {articlesListOfSelectedCategoryDataElements}
        </div>

    </div>
}

export default ArticlesPage;
