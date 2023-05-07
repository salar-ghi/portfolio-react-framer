import React from 'react'
import styled from 'styled-components';

const Box = styled.li`
    width: 16rem;
    height: 40vh;
    background-color : ${props => props.theme.text};
    color : ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;

`

const CardComponent = (props) => {
  const {id, name, description, tags, demo, github} = props.data;
  
    return (
    <Box>
        
    </Box>
  )
}

export default CardComponent