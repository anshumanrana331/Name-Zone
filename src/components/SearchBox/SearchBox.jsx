import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChage, headerExpanded }) => {
    return (
        <div className={`search-container ${
            headerExpanded
                ? 'search-container-expanded'
                : 'search-container-contracted'
        }`} 
            initial={{ y : 0 }}
            animate={{ y : 0 }}
        >
            <input
                onChange={(event) => onInputChage(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
