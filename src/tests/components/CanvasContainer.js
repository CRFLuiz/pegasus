// src/components/CanvasContainer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCanvas from './GameCanvas';
import Controls from './Controls';

const CanvasContainer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <Row>
        {/* Canvas para o Minigame */}
        <Col xs={9}>
          <GameCanvas />
        </Col>
        {/* Controles do Game */}
        <Col xs={3}>
          <Controls />
        </Col>
      </Row>
    </Container>
  );
};

export default CanvasContainer;
