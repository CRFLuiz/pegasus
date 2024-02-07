import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CanvasContainer from './components/CanvasContainer';
import ConfigPanel from './components/ConfigPanel';

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
        <NavBar onConfigClick={this.handleConfigClick} />

        {/* Container Principal */}
        <CanvasContainer />

        {/* Painel de Configuração */}
        <ConfigPanel show={this.state.showConfigPanel} onClose={this.handleConfigClick} />
      </div>
    );
  }
}

export default App;
