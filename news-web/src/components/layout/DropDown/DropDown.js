import React from 'react';
import '../../sass/dropDown.scss';
import { Link } from 'react-router-dom';
const DropDown = ({ dropdown }) => {
    const listDropdown = dropdown;
    // console.log(listDropdown);
    return (
        <div className='drop-blk'>
            <ul className='dropdown-content'>
                {listDropdown.map(dropdown => (
                    <li className='dropdown-item' key={dropdown.id}>
                        <Link to={dropdown.link}>{dropdown.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;