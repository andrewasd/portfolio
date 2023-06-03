'use client';

import React from "react";
import styled from "styled-components";

export function NavMenu() {
  const menu = [
    { text: "AboutMe", onClick: () => {} },
    { text: "Projects", onClick: () => {} },
    { text: "Skills", onClick: () => {} },
    { text: "GitHub", onClick: () => {} },
  ];

  const MenuItem = styled.div`

  display: flex;

   &:hover {
    background-color: green;
  }
   
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    

    cursor: pointer;
   

`;

const Menu = styled.div`

    display: flex;
    justify-content: space-evenly;
 
   

    //align-items: center;
    height: 100%;
    width: 70%;



`;

const MenuContainer = styled.div`
    color:white;
    background-color: black;
    position: fixed;
    width: 100%;
    height: 1.25cm;
    display: flex;
    justify-content:space-between;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 1px solid #6b6568;



`;

const Logo = styled.div`
   align-self: center;
   margin-left: auto;
   margin-right: auto;
   color: #218131;

`;





  return (
    <MenuContainer>
        <Logo>Andrei Nica</Logo>
    <Menu>
    {menu.map(item => <MenuItem>{item.text}</MenuItem>)}
    </Menu>
    </MenuContainer>
  );
}
