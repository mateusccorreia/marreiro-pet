import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logoImg from '../../assets/logo-1.png';

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
                  Assinatura
              </NavLink>
              {/* <NavLink to="/servicos">
                  Agendamentos
              </NavLink>
              <NavLink to="/entre-em-contato">
                  Entre em contato
              </NavLink> */}
              <NavBtnLink to='/agendamentos'>
                Agendamentos
            </NavBtnLink>
          </NavMenu>
        {/* {<NavBtn>
            <NavBtnLink to='/agendamentos'>
                Cadastre-se
            </NavBtnLink>
        </NavBtn>} */}
      </Nav>
    </>
  )
}

export default Navbar
