import React from "react";
import NavMenu from "./NavMenu";

//component contains the header/banner of the main page
// calls the NavMenu component
export default function Header(){

    return (
        //banner / title info
        <div>
        <div className="headerDiv">
        <h1>Home Grown Book Collection</h1>
        <h2>- A Final Project React App - </h2>
        
        </div>
        <NavMenu />

        </div>
    )


}