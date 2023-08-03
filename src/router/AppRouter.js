import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {AboutPage} from "../pages/AboutPage/AboutPage";
import {Users} from "../users/Users";
import {User} from "../users/User";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

export const AppRouter = (props) => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<User/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
};
