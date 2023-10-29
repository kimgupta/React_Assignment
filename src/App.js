import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Hello from "./components/Hello/Hello";

const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/hello" element={<Hello/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;