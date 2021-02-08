import React, { Component } from "react";
import { Container } from 'reactstrap';
import Background from '../assets/images/shapes/header-bg.png';

import title_logo from "../assets/title_logo.png"
class Header extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="site-header__header-one-wrap">
                    <div className="topbar-one">
                        <div className="topbar_bg" style={{ backgroundImage: `url(${Background})` }}></div>
                        <div className="container">
                            <div className="topbar-one__left">

                            </div>
                            <div className="topbar-one__middle">
                                <a href="/" className="main-nav__logo">
                                    <img src={title_logo} className="main-logo" alt="Awesome Image" />
                                </a>
                            </div>
                            <div className="topbar-one__right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
