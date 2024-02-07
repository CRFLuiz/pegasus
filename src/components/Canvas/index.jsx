import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Canvas extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Container fluid>
                <h1>Game</h1>
                {
                    (
                        // this.props.player.inaccuracyDistance && this.props.player.inaccuracySpeed && this.props.player.engine && (
                            <Col className="border border-secondary" border="primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <canvas id="gameScreen" width={this.props.canvas.width} height={this.props.canvas.height} className='border border-primary bg-light'></canvas>
                            </Col>
                        // )
                    )
                    ||
                    (
                        <h1>You must choose the settings on the navbar.</h1>
                    )
                }
            </Container>
        );
    }
}

export default Canvas;