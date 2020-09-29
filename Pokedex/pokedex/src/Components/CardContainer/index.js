import React, { Component } from "react";
import styled from "styled-components";
import Api from "../Api.js";
import Button from '@material-ui/core/Button';
import { CatchList } from "../CatchList";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: 2% 5%;
    margin-top: 2%;
    gap: 8%;
  
    
    @media (max-width: 700px) {
        margin-top: 8%;
    }
  `;

const FrontItem = styled.div`
    height: 120%;
    background-color: white;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
`;

const PokemonTitle = styled.div`
    background-color: none;
    border-radius: 20px;
    font-size: x-large;
    margin-top: 3%;
    text-transform: capitalize;
`;

const CatchButton = styled(Button)`
   position: relative;
`;


const imageUrlFront = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


class CardContainer extends Component {
    state = {
        pokemons: [],
        caughtPokemons: [],
    }

    getPokemon = () => {
        Api.get(`pokemon?offset=${this.props.offsetNumber}&limit=18`)

            .then((response) => {
                this.setState({ pokemons: response.data.results })


            })
    }


    componentDidMount() {
        this.getPokemon();

    }


    componentDidUpdate(prevProps) {

        if (prevProps.offsetNumber !== this.props.offsetNumber) {
            this.getPokemon();
        }
    }

    onClickCatch = (pokemon) => {

        const pokeball = [... this.state.caughtPokemons, pokemon]

        this.setState({ caughtPokemons: pokeball })

    }

    render() {

        return (
            <Container>
                {this.state.pokemons.map((pokemon, index) => {
                    const splitUrl = pokemon.url.split('/');
                    const id = splitUrl[splitUrl.length - 2];
                    return <FrontItem> <PokemonTitle>{id}. {pokemon.name}</PokemonTitle>
                        <img src={`${imageUrlFront}${id}.png`} /><br/>

                        <CatchButton
                            onClick={() => this.onClickCatch(pokemon)} variant="contained" color="primary">Capturar!
                        </CatchButton>

                    </FrontItem>

                })}

                <CatchList yourPokemons={this.state.caughtPokemons}></CatchList>
            </Container>
        )
    }
}

export default CardContainer;