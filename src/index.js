import React from 'react';
import {store} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
    root.render(
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind()}
                     /*addAppeal={store.addAppeal.bind(store)}
                     updateNewAppealText={store.updateNewAppealText.bind(store)}*//>
            </BrowserRouter>

    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
