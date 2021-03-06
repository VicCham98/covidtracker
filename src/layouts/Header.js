import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand href="/">COVID-19 Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink disabled href="/">Datos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/">Acerca del COVID-19</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/">Sintomas</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;