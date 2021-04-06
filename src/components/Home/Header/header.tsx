import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'reactstrap';
import {HeadernavItems} from '../../../utils/headenavinfo';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Coloredbutton from './coloredbutton';
import HeadernavItem from './headernav';
import { Linkbutton } from './outlinebutton';

export const Homeheader = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);
    const pageindex = props.page;
    const navcontent = HeadernavItems.map((item) =>{
      return(
      <NavItem>
        <NavLink href={item.path}><HeadernavItem active={pageindex==item.index}>{item.name}</HeadernavItem></NavLink>
      </NavItem>
      );
    });

    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container>
        <Navbar color="white" light expand="md" className="py-4">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navcontent}
          </Nav>
          <div className="ml-auto">
              <Linkbutton href="/#/auth/login">
               Log in
               </Linkbutton>
              <Coloredbutton href="/#/auth/register">
              Sign up
              </Coloredbutton>
          </div>
        </Collapse>
      </Navbar>
      </Container>
    );
}

export default Homeheader;