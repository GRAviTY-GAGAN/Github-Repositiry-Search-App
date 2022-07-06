import React, {useState, useContext} from "react";
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav, NavItem, NavLink, NavbarText
} from 'reactstrap'

import {Link} from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
    const context = useContext(UserContext) //whatever the data that is there in usercontext will be stored in context that we can use.
    const [isOpen, setIsOpen] = useState(false); //this is for toggling the navbar where default value of isOpen is false
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="success" light expand='md'>
            <NavbarBrand>
                <Link to='/' className="text-white ms-2">
                    Github Api
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white" >{
                //user is abig object here to further drill down into the object we will either store it in a variable and use it or will just use ? once we have the acces to the email next time we need to access the email we can just use '.'
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        context.user ? (   //ternary operator
                        <NavItem>
                            <NavLink tag={Link} onClick={() => {context.setUser(null)}} className="text-white">
                                Logout
                                </NavLink>
                        </NavItem>
                        ) : (
                        <>
                        <NavItem>
                        <NavLink tag={Link} to="/signup" className="text-white">
                            Signup
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/signin" className="text-white">
                            Signin
                        </NavLink>
                    </NavItem>
                    </>
                    )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;