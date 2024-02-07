// src/components/ConfigPanel.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfigPanel = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Configurações</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Aqui vão as opções de configuração...
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={onClose}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfigPanel;
