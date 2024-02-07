import React, { Component, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Game from '../Game';

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Game player={this.props.player} updateInaccuracyDistance={this.props.updateInaccuracyDistance} updateInaccuracySpeed={this.props.updateInaccuracySpeed} updateEngine={this.props.updateEngine} />
                </Row>
            </Container>
        );
    }
}

export default MainContainer;