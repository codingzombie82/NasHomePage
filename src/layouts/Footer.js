import React, { Component } from "react";
import { Container } from 'reactstrap';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <Container>
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="/wordpress"><i className="fa fa-angle-double-right"></i>Blog</a></li>
                                <li><a href="/photo"><i className="fa fa-angle-double-right"></i>Photo</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.changzakso.com/">changzakso</a></u></p>
                            <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.changzakso.com" target="_blank">changzakso.com</a></p>
                        </div>
                        <hr />
                    </div>
                </Container>
            </section>
        );
    }
}

export default Footer;
