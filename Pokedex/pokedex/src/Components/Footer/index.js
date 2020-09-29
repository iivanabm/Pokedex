import React, { Component } from "react";
import styled from "styled-components";
import pokedexImage from "../../assets/pokedexImage.png";
import ashAndPicachu from "../../assets/ashAndPikachu.png";

const StyledFooter = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    top: 460%;
    background-color: #3f51b5;

    @media (min-width: 320px) and (max-width: 1250px){
        display: none;
    }

`;

const AshAndPicachuImage = styled.img`
    height: 100%;
    position: relative;
    left: 30%; 
`;

const PokedexImage = styled.img`
    position: relative;
    left: 20%;
`;

function Footer() {
    return (
        <StyledFooter>
            <PokedexImage src={pokedexImage} />
            <AshAndPicachuImage src={ashAndPicachu} />
        </StyledFooter>
    )

}
export default Footer;