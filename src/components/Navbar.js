import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-christmas">
            <div className="container">
                <span className="navbar-santa-emoji" role="img" aria-label="Santa">🎅</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-links">
                        <li className="nav-item active">
                            <Link className="nav-link navbar-link-lg" to="/">Home <span className="sr-only"></span></Link>
                        </li>
                        <span className="navbar-separator">|</span>
                        <li className="nav-item">
                            <Link className="nav-link navbar-link-lg" to="/calendar">Calendar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;