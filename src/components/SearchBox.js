import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <>
            <input className="pa3 ba b--green bg-lightest-yellow" type='search' placeholder="search pokemon" onChange={ searchChange }/>
        </>
    )
}

export default SearchBox;