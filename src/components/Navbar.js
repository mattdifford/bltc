import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="main-navigation"
        >
            <div className="container is-justify-content-space-between">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item is-size-5 has-text-weight-bold" title="Logo">
                        <img src={logo} alt="Bridgwater Lawn Tennis Club" style={{ width: "100px" }} />
                    </Link>
                    {/* Hamburger menu */}
                    <button
                        className={`navbar-burger burger ${isActive && "is-active"}`}
                        aria-expanded={isActive}
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                <ul
                    id="navMenu"
                    className={` navbar-start has-text-centered navbar-menu is-flex is-justify-content-end ${isActive && "is-active"}`}
                >
                    <li className="navbar-item is-size-5 has-text-weight-bold" style={{ padding: "0px" }}>
                        <a
                            target="_blank"
                            rel="external noopener noreferrer"
                            className="navbar-item is-size-5 has-text-weight-bold"
                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Membership/Join"
                        >
                            Join
                        </a>
                    </li>
                    <li className="navbar-item is-size-5 has-text-weight-bold" style={{ padding: "0px" }}>
                        <a
                            className="navbar-item is-size-5 has-text-weight-bold"
                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Booking"
                            target="_blank"
                            rel="external noopener noreferrer"
                        >
                            Book courts
                        </a>
                    </li>
                    <li className="navbar-item is-size-5 has-text-weight-bold" style={{ padding: "0px" }}>
                        <a
                            className="navbar-item is-size-5 has-text-weight-bold"
                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Coaching"
                            target="_blank"
                            rel="external noopener noreferrer"
                        >
                            Coaching
                        </a>
                    </li>
                    <li className="navbar-item is-size-5 has-text-weight-bold" style={{ padding: "0px" }}>
                        <Link className="navbar-item is-size-5 has-text-weight-bold" to="/blog">
                            News
                        </Link>
                    </li>
                    <li className="navbar-item is-size-5 has-text-weight-bold" style={{ padding: "0px" }}>
                        <Link className="navbar-item is-size-5 has-text-weight-bold" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
