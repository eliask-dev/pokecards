import React from "react";
import Card from "./Card";

const CardList = ({ pokemons }) => {
    const cardArray = pokemons.map((pokemon, index) => {
        return <Card key={index} name={pokemon.name} id={pokemon.id} />
    })
    return (
        <>
            {cardArray}
        </>
    );
}

export default CardList;