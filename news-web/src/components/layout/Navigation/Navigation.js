import React from 'react';
import '../../sass/navigation.scss';
import { Link, NavLink } from 'react-router-dom';
// import DropDown from '../../layout/DropDown/DropDown';
import ListMenu from "./ListMenu";

const Navigation = () => {
    return (
        <div className="navigation">
            <ListMenu/>
        </div>
    );
};

export default Navigation;