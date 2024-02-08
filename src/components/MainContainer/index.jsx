import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import LoginSignup from '../../pages/loginSignup';

class MainContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            logged: false
        }
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    {!this.state.logged && (
                    <LoginSignup />
                    )}
                </Row>
            </Container>
        );
    }
}

export default MainContainer;