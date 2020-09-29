import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import pokedexImage from "../../assets/pokedexImage.png";
import pokeball from "../../assets/pokeball.png";

const Title = styled.h1`
    color: white;
    text-align: center;
`;


const PreviousButton = styled(Button)`
    position: absolute;
    left: 42%;

    @media (max-width: 700px) {
        position: absolute;
        top: 10px;
        left: 30%;
    }
`;

const NextButton = styled(Button)`
    position: absolute;
    left: 43%;

    @media (max-width: 700px) {
        position: absolute;
        top: 10px;
        left: 32%;
    }
`;

const PokeballContainer = styled.div`
    position: absolute;
    display: inline;
    top: 8%;

    @media (min-width: 380px) and (max-width: 1010px){
        display: none;
    }
`;

const PokeballImage = styled.img`
    display: inline;
    position: absolute;
    width: 150px;
	height: 150px;
`;

class Pokedex extends Component {

    render() {

        const disablePreviousButton = this.props.offsetNumber < 18 ? true : false;

        const disableNextButton = this.props.offsetNumber >= 1044 ? true : false;

        return (
            <div>

                <Title><img src={pokedexImage} /></Title>
                
                <PreviousButton disabled={disablePreviousButton} onClick={this.props.onClickPreviousButton} variant="contained" color="primary" href="#contained-buttons">
                    Previous
                </PreviousButton>
                <NextButton disabled={disableNextButton} onClick={this.props.onClickNextButton} variant="contained" color="primary" href="#contained-buttons">
                    Next
                </NextButton>
                <PokeballContainer><PokeballImage src={pokeball} /></PokeballContainer>

            </div>
        )
    }
}

export default Pokedex;