import { Component } from "react";
import React from "react";
import styles from "../Menu/MenuItem.module.css";
import styled from 'styled-components';

export const MenuItem = ({
  text,
  onclick,
}: {
  text: string;
  onclick: () => void;
}) => {

  
   const Item = styled.div`
     border-bottom: 1px solid black;
     width: 80%;
     margin-left:auto;
     margin-right:auto;
     font-family: monospace;
   
   
   `;
 

  return (
    <Item className={styles.menuItem} onClick={onclick}>
      {text}
    </Item>
  );
};
