import React, { Component } from 'react';
import Pokedex from "./Components/Pokedex.js";
import Card from "./Components/Card.js";
import CardContainer from "./Components/CardContainer/CardContainer.js";

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
        <CardContainer offsetNumber={this.state.offsetNumber}>
          <Card></Card>
        </CardContainer>

      </div>
    );
  }
}

export default App;
