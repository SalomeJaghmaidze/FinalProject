import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Posts from "../../pages/posts/Posts";
import Services from "../../pages/service/Index";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './HeaderElements'
import './Header.css'

const Header =()=> {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle =()=> {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <header>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</Bars>
                <NavMenu>
                <NavLink to='/Posts'>
                    <h1>Main</h1>
                </NavLink>
                <NavLink to='/Services'>
                    <h1>Services</h1>
                </NavLink>
                </NavMenu>
            </Nav>
        </header>
    )
}

export default Header