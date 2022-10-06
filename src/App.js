import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import ArticlesSection from "./components/Articles/ArticlesSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className='commonBackground'>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/articles" element={<ArticlesSection/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
