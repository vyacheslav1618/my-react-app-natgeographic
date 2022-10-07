import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import ArticlesPage from "./components/Articles/ArticlesPage";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Vacancy from "./components/Vacancy/Vacancy";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    return (
        <div className='commonBackground'>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/articles/*" element={<ArticlesPage/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/vacancy" element={<Vacancy/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
