import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Title = styled.h1`
    color: white;
    text-align: center;
`;

const PreviousButton = styled(Button)`
    position: absolute;
    left: 42%;
`;

const NextButton = styled(Button)`
    position: absolute;
    left: 43%;
`;

class Pokedex extends Component {
      
    render() {

        const disablePreviousButton = this.props.offsetNumber < 18 ? true : false;

        const disableNextButton = this.props.offsetNumber >= 1044 ? true : false;

        return (
            <div>
                <Title>Pokedex</Title>

                <PreviousButton disabled={disablePreviousButton} onClick={this.props.onClickPreviousButton} variant="contained" color="primary" href="#contained-buttons">
                    Anterior
                </PreviousButton>
                <NextButton disabled={disableNextButton} onClick={this.props.onClickNextButton} variant="contained" color="primary" href="#contained-buttons">
                    Próxima
                </NextButton>


            </div>
        )
    }
}

export default Pokedex;