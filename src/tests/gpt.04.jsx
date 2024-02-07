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
                Configurações <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Nav>
            {/* Ícone de Configuração */}
            <Nav.Item className="ml-auto">
              <Nav.Link onClick={this.handleConfigClick}>
                Configurações <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

        {/* Container Principal */}
        <Container fluid style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
          <Row>
            {/* Canvas para o Minigame */}
            <Col xs={9} style={{ border: '1px solid #000', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <canvas width="1000" height="700" style={{ border: '1px solid #000', backgroundColor: '#fff' }}></canvas>
            </Col>
            {/* Controles do Game */}
            <Col xs={3} style={{ border: '1px solid #000', minHeight: '700px', backgroundColor: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div>
                <h4 className="mb-4">Controles do Jogo</h4>
                {/* Adicione aqui seus controles */}
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
