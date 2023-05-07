import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'

import { Work } from '../data/WorkData';
import Card from '../subComponents/CardComponent';
import CardComponent from '../subComponents/CardComponent'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`
const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;

  display: flex;

  color: white;
`

export const WorkPage = () => {
  return (
    <ThemeProvider theme={ DarkTheme }>
      <Box>

        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />

        <Main>
          {
            Work.map(p =>
              // <Card key={p.id} data={p}  />
              <CardComponent key={p.id} data={p}/>
            )
          }
        </Main>


      </Box>
    </ThemeProvider>
  )
}