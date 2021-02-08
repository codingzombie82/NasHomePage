import React, { Component } from "react";
import { Container, Jumbotron } from 'reactstrap';
class Sound extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-4">Sound</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default Sound;
