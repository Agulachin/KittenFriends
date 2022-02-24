import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--pink bg-washed-green"
            type='search' 
            placeholder="Search kittens..." 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;