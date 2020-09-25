import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
border: 1px solid black;
width: 20%;
height: 20%;
`;

class Card extends Component{
    state = {
        id: 1,
        name: "bulbasaur",
        height: 7,
        weight: 69,
        type: ["grass", "poison"]
    }
    render(){

    return(
        <CardWrapper>
          
        </CardWrapper>
    )
}}

export default Card;
