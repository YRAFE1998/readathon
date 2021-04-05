import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'reactstrap';
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
    NavbarText
} from 'reactstrap';
import Coloredbutton from './coloredbutton';
import HeadernavItem from './headernav';
import { Linkbutton } from './outlinebutton';


interface HomeheaderInterface{

}

export const Homeheader = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container>
        <Navbar color="white" expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"><HeadernavItem active={true}>Home</HeadernavItem></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><HeadernavItem active={false}>How It Works</HeadernavItem></NavLink>
            </NavItem>
          </Nav>
          <div className="ml-auto">
              <Linkbutton>
               Log in
               </Linkbutton>
              <Coloredbutton>
              Sign up
              </Coloredbutton>
          </div>
        </Collapse>
      </Navbar>
      </Container>
    );
}

export default Homeheader;