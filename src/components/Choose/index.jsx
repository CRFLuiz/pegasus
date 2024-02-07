import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class Choose extends Component {
    constructor(props){
        super(props);

        this.h2Style = { paddingTop: '50px' };
    }

    render(){
        return(
            <Container>
                <h1>Choose</h1>
                <h2 style={this.h2Style}>Shooter</h2>
                <h5>Distance of inaccuracy</h5>
                <Row>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(0)}>0</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(2)}>2</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(5)}>5</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(7)}>7</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(10)}>10</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(20)}>20</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(50)}>50</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(70)}>70</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(100)}>100</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateCarSpeed(150)}>150</Button></Col>
                </Row>
                <h2 style={this.h2Style}>Car</h2>
                <h5>Speed of inaccuracy</h5>
                <Row>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(0)}>0</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(2)}>2</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(5)}>5</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(7)}>7</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(10)}>10</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(20)}>20</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(50)}>50</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(70)}>70</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(100)}>100</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracySpeed(150)}>150</Button></Col>
                </Row>
                <h2 style={this.h2Style}>Engine</h2>
                <h5>Movement speed</h5>
                <Row>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(0)}>0</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(2)}>2</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(5)}>5</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(7)}>7</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(10)}>10</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(20)}>20</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(50)}>50</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(70)}>70</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(100)}>100</Button></Col>
                    <Col><Button bg="primary" onClick={() => this.props.updateInaccuracyDistance(150)}>150</Button></Col>
                </Row>
            </Container>
        );
    }
}

export default Choose;