import React from "react";

const SearchComponent = () => {
    const styleText = 'Searching...';
    const styling = {fontfamily:'20px'};
    return (
        <input  style={styling} placeholder = {styleText} disabled={true}/>
        // placeholder='search'
    );
};
export default SearchComponent;