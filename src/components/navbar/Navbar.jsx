import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Posts from "../../pages/posts/Posts";
import Services from "../../pages/service/Index";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'
import './Navbar.css'

const Navbar =()=> {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle =()=> {
        setNavbarOpen(!navbarOpen)
        console.log(navbarOpen)
    }
    return (
        <>
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
            
      <Routes>
        <Route path="/Posts" element={<Posts/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
       </Routes>
       
        </>
    )
}

export default Navbar