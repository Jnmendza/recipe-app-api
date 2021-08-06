import React from 'react';
import { Nav, NavLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">Recipes</NavLink>
            </Nav>
        </>
    )
}

export default Navbar;
