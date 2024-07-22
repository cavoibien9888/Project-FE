import React, { useState } from 'react';

// files & pages
import '../../sass/header.scss';

const FormSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div id='header_search-blk'>
            <input
                type="text"
                id='header_search-input'
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <div id='header_search-icon' onClick={handleSearch} aria-label="Tìm kiếm">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default FormSearch;
