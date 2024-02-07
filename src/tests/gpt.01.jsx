import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props){
        super(props)
    };

    render(){
        return (
            <div>
              <header className="bg-primary text-white text-center py-5">
                <Container>
                  <h1>Bem-vindo ao Meu Site</h1>
                  <p>
                    Este é um exemplo simples de uma página inicial usando React e Bootstrap.
                  </p>
                  <p>
                    <Button variant="danger">Saiba mais</Button>
                  </p>
                </Container>
              </header>
        
              <Container className="my-5">
                <h2>Conteúdo adicional aqui</h2>
                {/* Adicione mais conteúdo conforme necessário */}
              </Container>
            </div>
          );
    }
}

export default App;