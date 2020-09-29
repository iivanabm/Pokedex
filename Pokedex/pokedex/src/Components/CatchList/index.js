import React from "react";
import styled from "styled-components";

const Pokemon = styled.li`
    position: absolute;
    color: #3f51b5; 
    list-style: none;
    right: 2%;
    top: 2%;
    background-color: white;
    width: 20%;
    heght: 10%;
    color: #3f51b5;
    border-radius: 6px;
    font-weight: 600;
    padding: 1%;
    text-transform: capitalize;

    @media (max-width: 700px) {
        position: absolute;
        top: 31%;
        left: 2%;
        width: 40%;
    }

`;



export const CatchList = (props) => {
    console.log(props.pokemon);

    return props.yourPokemons.map((pokemon, index) => {
        return <Pokemon><span>Você capturou: </span>
            {pokemon.name}
        </Pokemon>
    })

}


