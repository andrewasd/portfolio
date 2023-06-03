'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Menu} from "./components/Menu/Menu"
import { Presentation } from './components/Presentation/Presentation'
import { NavMenu } from './components/NavMenu/NavMenu'
import styled, { createGlobalStyle } from 'styled-components'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const GlobalStyle = createGlobalStyle`
  body {

    font-family: 'Montserrat', sans-serif;
  }
`;

  return (
    <main>
      <GlobalStyle></GlobalStyle>
      <NavMenu/>
      <Presentation/>
    </main>
  )
}
