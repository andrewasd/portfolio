'use client';


import { Component } from "react";
import React from "react";
import styles from "../../components/Menu/Menu.module.css";
import { MenuItem } from "./MenuItem";
import styled from 'styled-components'
import sty from 'styled-components';


export function Menu() {
  const menu = [
    {
      text: "About Me",
      onClick: () => {
        alert("hi")
      },
    },
    { text: "Projects", onClick: () => {} },
    { text: "Skills", onClick: () => {} },
  ];


  const NameTag = styled.div`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #000000;
  color: #000000;
  margin-top: 0em;
  padding: 0.25em 1em;
  width: 80%;
  margin-left:auto;
  margin-right: auto;
  text-align: center;
`

  

  return (
    <div className={styles.menu}>
      <div className={styles.picture}></div>
      <NameTag>Andrei Nica</NameTag>
      {menu.map((menuitem) => (
        <MenuItem text={menuitem.text} onclick={menuitem.onClick} />
      ))}
    </div>
  );
}
