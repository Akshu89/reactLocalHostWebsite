import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink to="/">About US</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/user/herry/potter">User</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/contact">Contact US</NavLink>
                <br />

            </div>
            {/* <a href="/">About us</a>
        <a href="/contact">Contact us</a> */}
        </>
    );
};
export default Navbar;
