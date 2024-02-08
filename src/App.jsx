import React, { Component } from "react";

import TitleBar from './components/TitleBar';
import Error from './ErrorBoundary';
import MainContainer from './components/MainContainer';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Error>
                <TitleBar />
                <MainContainer />
            </Error>
        )
    }
}

export default App;