import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { NavMenu } from './NavMenu';

class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <Header />
                <NavMenu />
                {/* <Container> */}
                {this.props.children}
                {/* </Container> */}
                <Footer />
            </div>
        );
    }
}
export default Layout;