import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import ArticlesPage from "./components/Articles/ArticlesPage";
import {Route, Routes} from "react-router-dom";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {Vacancy} from "./components/Vacancy/Vacancy";
import {Contacts} from "./components/Contacts/Contacts";
import NavBar from "./components/NavBar/NavBar";
import {Header} from "./components/Header/Header";
import {MainLogoNatGeo} from "./components/StuffCollection/Logos/MainLogoNatGeo";
import {WelcomePage} from "./components/WelcomePage/WelcomePage";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <MainLogoNatGeo/>
            <Header/>
            <NavBar/>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/articles/*" element={<ArticlesPage/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/vacancy" element={<Vacancy/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
}