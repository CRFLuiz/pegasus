import React, { Component } from "react";

import TitleBar from './components/TitleBar';
import Error from './ErrorBoundary';
import MainContainer from './components/MainContainer';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            player: {
                force: 999,
                technique: 99,
                focus: 9
            }
        }
    }

    render(){
        return(
            <Error>
                <TitleBar player={this.state.player} updateInaccuracyDistance={this.updateInaccuracyDistance} updateInaccuracySpeed={this.updateInaccuracySpeed} updateEngine={this.updateEngine} />
                <MainContainer player={this.state.player} updateInaccuracyDistance={this.updateInaccuracyDistance} updateInaccuracySpeed={this.updateInaccuracySpeed} updateEngine={this.updateEngine} />
            </Error>
        )
    }
}

export default App;