import React from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


function Navigation() {
  return (
    <>
      <div className="container-fluid nav-bg mainnavbar">
        <div className="row">
          <div className="col-10 mx-auto">

            <Navbar expand="lg" className="navbar">
              <Navbar.Brand>
                <img
                  src="./logo.gif"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
                <span className="pl-2 text-light">S.M.Abtahi Noor</span>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" className="burgerMenu"/>
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                  <NavLink to="/" className="navlist">Home</NavLink>
                  <NavLink to="/about" activeClassName="menu_active" className="navlist">About</NavLink>
                  <NavLink to="/services" activeClassName="menu_active" className="navlist">Services</NavLink>
                  <NavLink to="/projects" activeClassName="menu_active" className="navlist">Projects</NavLink>
                  <NavLink to="/gallery" activeClassName="menu_active" className="navlist">Gallery</NavLink>
                  <NavLink to="/contact" activeClassName="menu_active" className="navlist">Contact</NavLink>
                </Nav>

              </Navbar.Collapse>
            </Navbar>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;