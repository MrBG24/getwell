import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 60vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    @media (max-width: 380px) {
      display : none;
    }
`

const Header = styled.h1`
    font-size : 40px;
    padding : 10px;
    color : teal;
    border-bottom : 5px solid black;
    border-left : 5px solid black;
    border-radius : 25px;
    @media (max-width: 380px) {
      font-size : 15px;
      border-bottom : 2px solid black;
      border-left : 2px solid black;
      padding : 5px;
    }
  
`

const ButtonsOne = styled.div`
    margin-top : 40px;
`

const ButtonsTwo =styled.div`

`

const Button = styled.button`
    padding :10px;
    margin : 10px;
    width : 130px;
    border-radius : 25px;
    font-weight : 600;
    border : 1px solid teal;
    color : teal;
    background-color : white;
    cursor : pointer;
    @media (max-width: 380px) {
      font-size : 10px;
      padding : 5px;
    }
    
`

const SectionThree = () => {
  return (
    <Container>
      <Header>Specialized Help For Your Mental Health</Header>
    
        <ButtonsOne>
          <Button>Anxiety & Stress</Button>
          <Button>Depression</Button>
          <Button>Relationship Issues</Button>
          <Button>OCD</Button>
          <Button>Bipolar Disorder</Button>
          <Button>Psychosis</Button>
          <Button>Grief & Loss</Button>
          <Button>Trauma</Button>
        </ButtonsOne>
        <ButtonsTwo>
          <Button>Couple Therapy</Button>
          <Button>LGBTQIA+</Button>
          <Button>Teenage Issues</Button>
          <Button>Sexual Issues</Button>
        </ButtonsTwo>
      
    </Container>
  )
}

export default SectionThree
