// src/App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        {/* Barra de Título */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">Título do Site</Navbar.Brand>
          {/* Adicione mais itens de navegação, se necessário */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Link 1</Nav.Link>
              <Nav.Link href="#">Link 2</Nav.Link>
              {/* Adicione mais links conforme necessário */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Container Principal */}
        <Container fluid className="p-0">
          <Row>
            {/* Seção do Minigame (Canvas) */}
            <Col xs={8} className="minigame-section bg-primary">
              <canvas id="minigame-canvas" width="800" height="600"></canvas>
            </Col>

            {/* Seção de Controles do Game */}
            <Col xs={4} className="controls-section bg-secondary text-light">
              {/* Adicione os controles do jogo aqui */}
              <h2>Controles do Jogo</h2>
              <p>Botão 1</p>
              <p>Botão 2</p>
              {/* Adicione mais controles conforme necessário */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
