// src/App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Col, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfigPanel: false
    };
  }

  handleConfigClick = () => {
    this.setState({ showConfigPanel: !this.state.showConfigPanel });
  };

  render() {
    return (
      <div>
        {/* Barra de Título */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Seu App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link onClick={this.handleConfigClick}>
                Icon1 <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Nav>
            {/* Ícone de Configuração */}
            <Nav.Item className="ml-auto">
              <Nav.Link onClick={this.handleConfigClick}>
                Icon2 <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

        {/* Container Principal */}
        <Container fluid>
          <Row>
            {/* Canvas para o Minigame */}
            <Col xs={9}>
              <canvas style={{ border: '1px solid #000' }} width="800" height="600"></canvas>
            </Col>
            {/* Controles do Game */}
            <Col xs={3}>
              <div style={{ border: '1px solid #000', height: '100%' }}>
                Controles do Jogo
              </div>
            </Col>
          </Row>
        </Container>

        {/* Painel de Configuração */}
        <Modal show={this.state.showConfigPanel} onHide={this.handleConfigClick}>
          <Modal.Header closeButton>
            <Modal.Title>Configurações</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Aqui vão as opções de configuração...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleConfigClick}>
              Fechar
            </Button>
            <Button variant="primary" onClick={this.handleConfigClick}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
