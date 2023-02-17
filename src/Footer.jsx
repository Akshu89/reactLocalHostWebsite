import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer">
                <p className="footer_p">
                    copyright © {year}
                </p>
            </footer>
        </>
    );
};
export default Footer;
