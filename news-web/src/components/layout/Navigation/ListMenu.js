import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

// files & pages
import DropDown from '../DropDown/DropDown';
import { loadCategory } from '../../store/Action';
import categorys from '../../data/Category';
// import HomeIcon from '../../images/home.svg';

const ListMenu = () => {
    const { cate, setCate } = useState();
    const listCategory = useSelector(state => state.root.categorys);
    // console.log(listCategory);
    const dispatch = useDispatch();
    // const [activeDropdown, setActiveDropdown] = useState(null);
    // const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        dispatch(loadCategory(categorys))
    }, []);

    return (
        <Fragment>
            <ul className='menu'>
                <a href="/" id='home-icon'>
                    {/* <img src={ HomeIcon } alt='Trang Chủ'/> */}
                    <i class="fa-solid fa-house"></i>
                </a>
                {listCategory.map(category => (
                    <li 
                        className='dropdown'
                        key={category.id}
                        id={category.id}
                        // onMouseLeave={() => handleMouseEnter(category)}
                    >
                        <NavLink to={category.link}>{category.name}</NavLink>
                        {/* <DropDown dropdown={category.dropdown}></DropDown> */}
                        <DropDown dropdown={category.dropdown}></DropDown>
                    </li>
                ))}
                <div id='menu-icon'>
                    <i class="fas fa-bars"></i>
                    {/* <a href=""> */}
                    {/* </a> */}
                </div>
            </ul>
        </Fragment>
    );
};

export default ListMenu;