import React, { Component } from "react";
import { Container } from 'reactstrap';
class Footer extends Component {
    render() {
        return (
            <Container>
                <div className="footer">
                    <div className="inner">
                        <p><a href={"www.naver.com"}>{"www.naver.com"}</a></p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Footer;
