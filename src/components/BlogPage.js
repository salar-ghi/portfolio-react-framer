import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  backgrond-position: center;
  width: 100vw;
  height: 100vh;
`


export const BlogPage = () => {
  return (
    <MainContainer>
        
    </MainContainer>
  )
}