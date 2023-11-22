import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./ImageHeader/logo.png"
import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.Header}>
            <img src={logo} alt={logo}/>
            <div>
                <NavLink to={'/main'}>Main</NavLink>
                <NavLink to={'/hobbies'}>Hobbies</NavLink>
            </div>
        </div>
    );
};

export {Header};