import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { YinYang } from './AllSvgs'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif;
  font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem;
`
const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

`
const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`
const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%' };
  left: ${props => props.click ? '92%' : '50%' };
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  
  &>:first-child{
    animation: ${rotate} infinite 2.2s linear;
  }
  &>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block' }
    padding-top: 1rem;
  }
`

export const Main = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
        <Container>
          <PowerButton />
          <LogoComponent />
          <SocialIcons />

          <Center click={click}>
            <YinYang onClick={()=> handleClick() } width={click ? 120 : 200 } height={click ? 120 : 200 } fill='currentColor' />
            <span>click here</span>
          </Center>

          <Contact target="_blank" to={{pathname:"mailto:salar.ghi1993@gmail.com"}}>
            <h3>
              say hi...
            </h3>
          </Contact>
          <BLOG target="_blank" to="/blog">
            <h3>
              Blog
            </h3>
          </BLOG>
          <WORK target="_blank" to="/work">
            <h3>
              Work
            </h3>
          </WORK>

          <BottomBar>
            <ABOUT target="_blank" to="/about">
              <h3>
                About.
              </h3>
            </ABOUT>
            <SKILLS target="_blank" to="/skills">
              <h3>
                SKILLS
              </h3>
            </SKILLS>
          </BottomBar>

        </Container>
    </MainContainer>
  )
}

// export default Main