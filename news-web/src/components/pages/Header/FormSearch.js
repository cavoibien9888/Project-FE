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

    return (
        <div id='header_search-blk'>
            <input
                type="text"
                id='header_search-input'
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div id='header_search-icon'>
                <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
            </div>
        </div>
    );
};

export default FormSearch;