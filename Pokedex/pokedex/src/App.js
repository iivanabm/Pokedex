import React, { Component } from 'react';
import Pokedex from "./Components/Pokedex";
import CardContainer from "./Components/CardContainer/index.js";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    offsetNumber: 0
  }

  onClickPreviousButton = () => {
    if (this.state.offsetNumber > 0) {
      this.setState({ offsetNumber: this.state.offsetNumber - 18 })
       }

  }

  onClickNextButton = () => {
    this.setState({ offsetNumber: this.state.offsetNumber + 18 })
  }

  render() {

    return (
      <div>
        <Pokedex offsetNumber={this.state.offsetNumber} onClickPreviousButton={this.onClickPreviousButton} onClickNextButton={this.onClickNextButton}></Pokedex>
        <CardContainer offsetNumber={this.state.offsetNumber}></CardContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
