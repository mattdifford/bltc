import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";

const Footer = () => {

    return (
        <footer className="footer has-background-black has-text-white-ter">
            <div className="content has-text-centered">
                <img
                    src={logo}
                    alt="Bridgwater Lawn Tennis Club"
                    style={{ width: "10em", height: "auto" }}
                />
            </div>
            <div className="content has-text-centered has-background-black has-text-white-ter">
                <div className="container has-background-black has-text-white-ter">
                    <div style={{ maxWidth: "100vw" }} className="columns">
                        <div className="column is-4">
                            <section className="menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/" className="navbar-item">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar-item" to="/blog">
                                            Latest News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar-item" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4">
                            <section className="menu">
                                <ul className="menu-list">
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="external noopener noreferrer"
                                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Membership/Join"
                                            className="navbar-item"
                                        >
                                            Join
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="external noopener noreferrer"
                                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Booking"
                                            className="navbar-item"
                                        >
                                            Book courts
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="external noopener noreferrer"
                                            href="https://clubspark.lta.org.uk/BridgwaterTennisClub/Coaching"
                                            className="navbar-item"
                                        >
                                            Coaching
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4 social">
                            <a title="facebook" href="https://facebook.com">
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a title="twitter" href="https://twitter.com">
                                <img
                                    className="fas fa-lg"
                                    src={twitter}
                                    alt="Twitter"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
