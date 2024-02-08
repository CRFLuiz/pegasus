import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class TextLinkExample extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Navbar bg="primary" data-bs-theme={this.props.data_bs_theme || 'dark'} expand='lg'>
                <Container fluid>
                    {/*
                    <Navbar.Brand href="#home">Settings</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown title="Shooter">
                                <Form.Select aria-label="Shooter" onChange={this.updateInaccuracyDistance} value={this.props.player.inaccuracyDistance || ''}>
                                    <option>inaccuracyDistance</option>
                                    <option value={0}>0</option>
                                    <option value={2}>2</option>
                                    <option value={5}>5</option>
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={70}>70</option>
                                    <option value={100}>100</option>
                                    <option value={150}>150</option>
                                    <option value={200}>200</option>
                                </Form.Select>
                            </NavDropdown>
                            <NavDropdown title="Car">
                                <Form.Select aria-label="Car" onChange={this.updateInaccuracySpeed} value={this.props.player.inaccuracySpeed || ''}>
                                    <option>inaccuracySpeed</option>
                                    <option value={0}>0</option>
                                    <option value={2}>2</option>
                                    <option value={5}>5</option>
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={70}>70</option>
                                    <option value={100}>100</option>
                                    <option value={150}>150</option>
                                    <option value={200}>200</option>
                                </Form.Select>
                            </NavDropdown>
                            <NavDropdown title="Engine">
                                <Form.Select aria-label="Engine" onChange={this.updateEngine} value={this.props.player.engine || ''}>
                                    <option>engine</option>
                                    <option value={0}>0</option>
                                    <option value={2}>2</option>
                                    <option value={5}>5</option>
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={70}>70</option>
                                    <option value={100}>100</option>
                                    <option value={150}>150</option>
                                    <option value={200}>200</option>
                                </Form.Select>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    */}
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default TextLinkExample;