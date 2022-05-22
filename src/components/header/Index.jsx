import React, { useState } from "react";
import {
    Nav,
    NavLink,
    NavMenu
} from './HeaderElements'
import { Burger} from './burger/Burger';
import {Menu} from './menu/Menu'
const Header =()=> {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <header>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <NavMenu>
                <NavLink to='/Posts'>
                    <h1>Main</h1>
                </NavLink>
                <NavLink to='/Services'>
                    <h1>Services</h1>
                </NavLink>
                </NavMenu>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            </Nav>
        </header>
    )
}

export default Header