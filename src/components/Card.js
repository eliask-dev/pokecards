import React from "react";

const Card = ({ name, id }) => {
    return (
        <>
            <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
                <div id="header">
                    <h2 className="tc">{name}</h2>
                </div>
                <div id="body" >
                    <img alt={`${name}.png`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
                </div>

            </div>
        </>
    )
}

export default Card;