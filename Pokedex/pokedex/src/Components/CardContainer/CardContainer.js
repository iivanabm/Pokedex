import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Api from "../Api.js";
import Card from "../Card.js";


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: 2% 5%;
    margin-top: 2%;
    gap: 8%;
`;

const Item = styled.div`
    height: 120%;
    background-color: white;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 3%;
`;

const imageUrlFront = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const imageUrlBack = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";

class CardContainer extends Component {
    state = {
        pokemons: []
    }

    getPokemon = () => {
        Api.get(`pokemon?offset=${this.props.offsetNumber}&limit=18`)

            .then((response) => {
                console.log(response.data);
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


render() {
       
    return (
        <Container>

            {this.state.pokemons.map((pokemon, index) => {
                const splitUrl = pokemon.url.split('/');
                const id = splitUrl[splitUrl.length-2];
                console.log(id);
                return <Item><img src={`${imageUrlFront}${id}.png`} />
                    <div>{id}. {pokemon.name}</div>
                </Item>;
            })}

        </Container>
    )
}
}

export default CardContainer;


