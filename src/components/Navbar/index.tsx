import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logoImg from '../../assets/logo.svg';

interface activeStyle {
    isActive: boolean;
}

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
            <img src={logoImg} alt="marreiro pet"/>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/sobre">
                  Sobre
              </NavLink>
              <NavLink to="/servicos">
                  Serviços
              </NavLink>
              <NavLink to="/entre-em-contato">
                  Entre em contato
              </NavLink>
          </NavMenu>
        <NavBtn>
            <NavBtnLink to='/agendamentos'>
                Agendamentos
            </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
