import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavbarComponent = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand><img src={'./'}/></Navbar.Brand>
            <Container className={'d-flex align-items-center'}>
                {/*<IconButton onClick={handleOpenSideBar}>*/}
                {/*    <MenuIcon />*/}
                {/*</IconButton>*/}
                    <Nav className="me-auto align-items-center">
                        <NavLink className={'nav-link'} to="/">Dashboard</NavLink>
                        <NavLink className={'nav-link'} to="/list">List of Todos</NavLink>
                        <NavLink className={'nav-link'} to="/new">Create Todo</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;