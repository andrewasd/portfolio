"use client";

import React from "react";
import styled from "styled-components";

export function AboutMe() {
  const Main = styled.div`
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    width: calc(90% - 100%); 
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    //grid-template-columns: 1fr 1fr;
    //grid-template-rows: 1fr;
  `;

  const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    text-align: center;
    vertical-align: center;
    font-size: 1.7cm;
   

    grid-column-start: 2;
    grid-column-end: 2;
  `;

  const MainText = styled.div`
    color: white;
    background: #2b2929;
  
    padding-top: 50%;

  

    grid-column-start: 1;
    grid-column-end: 1;
  `;

  const Logo = styled.div`
  width: 100%;
  font-size: clamp(0.5cm, 6vw, 1.5cm);

  
  `;
  const What = styled.div`
   font-size: clamp(0.5cm, 3vw, 2rem);
  float: left;
  width: 100%;
  
  `;

  return (
    <Main>
      <MainText>
        <Logo>Hey,I'm Andrew</Logo>
        <What>I'm a software Developer</What>
      </MainText>
      <Description></Description>
    </Main>
  );
}
