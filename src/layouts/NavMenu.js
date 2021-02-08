import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            // <header>
            //     <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            //         <Container>
            //             {/* <NavbarBrand className="text-white" tag={Link} to="/"><img alt="이미지" src={title_logo} /></NavbarBrand> */}
            //             <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            //             <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            //                 <ul className="navbar-nav flex-grow">
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-primary" to="/">Home</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-primary" to="/Sound">Sound</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-primary" to="/List">List</NavLink>
            //                     </NavItem>
            //                 </ul>
            //             </Collapse>
            //         </Container>
            //     </Navbar>
            // </header>
            // <></>

            // <div className="page-wrapper">
            //     <div className="site-header__header-one-wrap">
            //         <header className="main-nav__header-one">
            //             <nav className="header-navigation stricky">
            //                 <div className="container clearfix">

            //                     <div className="main-nav__left">
            //                         <a href="#" className="main-nav__search search-popup__toggler"><i
            //                             className="icon-magnifying-glass"></i></a>
            //                         <a href="#" className="side-menu__toggler">
            //                             <i className="fa fa-bars"></i>
            //                         </a>
            //                     </div>
            //                     <div className="main-nav__main-navigation">
            //                         <ul className=" main-nav__navigation-box">
            //                             <li className="dropdown current">
            //                                 <a href="/">Home</a>
            //                                 <ul>
            //                                     <li><a href="list">Home 01</a></li>
            //                                     <li><a href="sound">Home 02</a></li>
            //                                     <li><a href="index3.html">Home 03</a></li>
            //                                     <li><a href="index4.html">Home 04</a></li>
            //                                     <li><a href="index5.html">Home 05</a></li>
            //                                     <li className="dropdown"><a href="#">Header Versions</a>
            //                                         <ul>
            //                                             <li><a href="index.html">Header 01</a></li>
            //                                             <li><a href="index2.html">Header 02</a></li>
            //                                             <li><a href="index3.html">Header 03</a></li>
            //                                             <li><a href="index4.html">Header 04</a></li>
            //                                             <li><a href="index5.html">Header 05</a></li>
            //                                         </ul>
            //                                     </li>
            //                                 </ul>
            //                             </li>
            //                             <li className="dropdown">
            //                                 <a href="/List">List</a>
            //                                 <ul>
            //                                     <li><a href="service.html">Services</a></li>
            //                                     <li><a href="service-detail.html">Services Detail</a></li>
            //                                 </ul>
            //                             </li>
            //                             <li className="dropdown">
            //                                 <a href="/Sound">Sound</a>
            //                                 <ul>
            //                                     <li><a href="projects.html">Projects</a></li>
            //                                     <li><a href="projects_detail.html">Projects Detail</a></li>
            //                                 </ul>
            //                             </li>
            //                             <li>
            //                                 <a href="/Contact">Contact</a>
            //                             </li>
            //                         </ul>
            //                     </div>

            //                     <div className="main-nav__right">
            //                         <div className="icon_cart_box">
            //                             <a href="cart.html">
            //                                 <span className="icon-shopping-cart"></span>
            //                             </a>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </nav>
            //         </header>
            //     </div>
            // </div>

            <header className="main-nav__header-one">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        {/* <NavbarBrand className="text-white" tag={Link} to="/"><img alt="이미지" src={title_logo} /></NavbarBrand> */}
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="current" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="current" to="/Contact">Contact</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
