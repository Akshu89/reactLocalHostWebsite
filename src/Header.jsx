import React from "react";
import logo from "./clear-sky.jpg";
const Header = () => {
    return (
        <>
        <div className="header">
            <img src={logo} alt="logo" width='70' height='50' className="header_img"/>
            <h1 className="header_h1">Google Keep</h1>
        </div>
        </>
    );
};
export default Header;
