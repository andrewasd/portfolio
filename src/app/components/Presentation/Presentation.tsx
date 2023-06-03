'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AboutMe } from '../AboutMe/AboutMe';

export const Presentation = () => {

  
  const Presentation = styled.div`
  background-color: #942828;
  //background-color: #3b4247;
  height: 100vh;
  width: 100vw;

`;
  
  return (
    <Presentation>
     <AboutMe></AboutMe>

    </Presentation>
  );
};
