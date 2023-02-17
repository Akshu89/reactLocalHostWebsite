import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
        <h1>404 Error page</h1>
        <p>sorry this page is not found </p>
        <NavLink to="/">Go back</NavLink>
        </>
    );
};
export default Error;
