import React from "react";
import { Link } from "react-router-dom";
import './Styles.css';

const Footer =() => {
    return (
        <>
            <footer className="bg-tertiary">
            <div className="container p-1">
                <div className="col">
                <ul className="list-unstyled">
                    <li>
                    <Link to="/" className="text">Home</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                    <Link to="/AboutUs" className="text">About Us</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                    <Link to="/ContactUs" className="text">Contact Us</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                    <Link to="/Suggestions" className="text">Suggestions</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="rights ">
                <p>© 2023 BidHUB. All Rights Reserved</p>
            </div>
            </footer>
        </>
    );
}
export default Footer;