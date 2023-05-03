import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom:0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin:0.5rem 0;
    }
`
const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body };

`


const SocialIcons = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/sAlArghi93"}}>
                <Github width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/sAlArghi93"}}>
                <Twitter width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/sAlArghi93"}}>
                <Facebook width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/sAlArghi93"}}>
                <YouTube width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <Line color={props.theme} />
    </Icons>


  )
}

export default SocialIcons