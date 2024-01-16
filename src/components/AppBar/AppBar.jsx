import { Suspense } from 'react';
import {  Outlet } from "react-router-dom";
import { Container, Header, Logo, Link, Nav } from "./AppBar.styled";
import { MdContactPhone } from "react-icons/md";

export const AppBar = () =>{
    return (
        <Container>
            <Header>
                <Logo>
                <MdContactPhone size={25} color='white'/>   
                </Logo>   
                <Nav>                  
                <Link to='/' end>PhoneBook</Link>
                <Link to='/contacts'>Contacts</Link> 
                </Nav>
            </Header>
            <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

        </Container>
    );
}