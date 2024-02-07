// src/components/GameCanvas.js
import React from 'react';

const GameCanvas = () => {
  return (
    <div style={{ border: '1px solid #000', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Aqui irá o componente Canvas */}
      <canvas width="1000" height="700" style={{ border: '1px solid #000', backgroundColor: '#fff' }}></canvas>
    </div>
  );
};

export default GameCanvas;
