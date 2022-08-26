import React, { useState, useEffect } from 'react';
import Logo from './Logo'
import { Link } from "react-router-dom";
import { isLogin, logout } from '../../Middleware/Auth';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [state, setState] = useState(false)

    useEffect(() => setState(isLogin()), [])

    const handleLogout = () => {
        logout();
        setState(false)
    }

    const img_url = (img) => require('../../assets/images/' + img)

    return (
        <header>
            <Navbar {...args} container={true} expand="sm" className='py-3'>
                <NavbarBrand tag={Link} to="/">
                    <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
                        <NavItem><NavLink href="#overview">Overview</NavLink></NavItem>
                        <NavItem><NavLink href="/overview">Manual</NavLink></NavItem>
                        <NavItem><NavLink href="#faqs">FAQ,s</NavLink></NavItem>
                        <NavItem><NavLink href="/overview">Events</NavLink></NavItem>
                        <NavItem><NavLink href="/overview">Blogs</NavLink></NavItem>
                    </Nav>

                    {state
                        ? <div className="hd-user">
                            <UncontrolledDropdown tag="div" nav>
                                <DropdownToggle nav caret>
                                    <div className="img">
                                        <img src={img_url('avatar.svg')} alt="" />
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem tag={Link} to="#">My Account</DropdownItem>
                                    <DropdownItem tag={Link} to="/404">404 Pages</DropdownItem>
                                    <DropdownItem divider />
                                    {state && <DropdownItem tag={Link} onClick={() => handleLogout()} to="/">Logout</DropdownItem>}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        : <Link className="btn-inverse hide-sm hide-xs th-btn" to="/signup">Get Started <span className='btn-arrow'></span></Link>
                    }
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;