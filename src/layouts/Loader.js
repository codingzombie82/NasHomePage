import React, { Component } from "react";
import loader from "../assets/images/loader.png"

class Loader extends Component {
    render() {
        return (
            <div className="preloader">
                <img src={loader} className="preloader__image" alt="" />
            </div>
        );
    }
}

export default Loader;
