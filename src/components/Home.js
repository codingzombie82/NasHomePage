import React, { Component } from "react";
// import { Container, Jumbotron } from 'reactstrap';
import testImage from '../assets/images/resources/leaf.png';
import subImage1 from '../assets/images/main1.png';
import subImage2 from '../assets/images/main2.png';
import subImage3 from '../assets/images/main3.png';

class Home extends Component {
    render() {
        return (
            <section class="service_one">
                <div class="container">
                    <div class="block-title text-center">
                        <p>Select Menu</p>
                        <h3>All Menus</h3>
                        <div class="leaf">
                            <img src={testImage} alt="" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="service_1_single wow fadeInUp">
                                <div class="content">
                                    <h3>Changzakso<br />Site</h3>
                                    <p>changzakso Company</p>
                                </div>
                                <div class="service_1_img">
                                    <img src={subImage1} alt="Service Image" />
                                    <div class="hover_box">
                                        <a href="http://www.changzakso.com"><span class="icon-left-arrow"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="service_1_single wow fadeInUp" data-wow-delay="300ms">
                                <div class="content">
                                    <h3>Blog<br />Site</h3>
                                    <p>changzakso Blog</p>
                                </div>
                                <div class="service_1_img">
                                    <img src={subImage3} alt="Service Image" />
                                    <div class="hover_box">
                                        <a href="/wordpress"><span class="icon-left-arrow"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="service_1_single wow fadeInUp" data-wow-delay="600ms">
                                <div class="content">
                                    <h3>Photo<br />Album</h3>
                                    <p>Family Photo Album</p>
                                </div>
                                <div class="service_1_img">
                                    <img src={subImage2} alt="Service Image" />
                                    <div class="hover_box">
                                        <a href="/photo"><span class="icon-left-arrow"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
