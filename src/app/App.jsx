import React from "react";
import "../sass/style.scss";
import Header from "./sections/header";
import MainContent from "./sections/MainContent";
export default function App(){
    return(
        <>
            <Header/>
            <MainContent/>
        </>
    );
}