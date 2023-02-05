// import { Chat, Mic, Videocam } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    @media (max-width: 380px) {
        height : 100vh;
        display : flex;
        justify-content : center;
        flex-direction : column;
      }
`

const HOne  = styled.h1`
    font-size : 50px;
    padding-bottom : 10px;
    padding-right : 10px;
    margin-bottom : 30px;
    border-bottom : 5px solid teal;
    border-right : 5px solid teal;
    border-radius : 10px;
    @media (max-width: 380px) {
        font-size : 25px;
        padding : 0;
        border-bottom : 2px solid teal;
        border-right : 2px solid teal;
      }
`

const HTwo  = styled.h2`
    margin-bottom : 30px;
    @media (max-width: 380px) {
        font-size : 20px;
        padding : 0 10px;
        text-align : center;
    }
`

const Para  = styled.p`
    padding : 0 150px;
    line-indent: 50px;
    text-align : center;
    font-size : 25px;
    margin-bottom : 30px;
    @media (max-width: 380px) {
        font-size : 15px;
        padding : 0 10px;

      }
`

const Icons  = styled.div`
    display : flex;
`

const Icon  = styled.div`
    padding :0 30px;
`

const Name  = styled.h3`
@media (max-width: 380px) {
    font-size : 15px;
    text-align : center;
  }
`
const Hed =styled.h4`
@media (max-width: 380px) {
    margin-bottom : 20px;
  }
`

const SectionTwo = () => {
  return (
    <Container>
        <HOne>Choose Help. Not Suffering.</HOne>
        <HTwo>Counselling Therapy Sessions With Licensed & Verified Experts :)</HTwo>
        <Para>Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process. Trained and experienced in all psychotherapy techniques.</Para>
        <Hed>You Can Connect us With...</Hed>
        <Icons>
            
            <Icon>
                {/* <Videocam style={{fontSize:"110px" ,color:"teal"}}/> */}
                <Name>Video Sessions</Name>
            </Icon>
            <Icon>
                {/* <Mic style={{fontSize:"110px" ,color:"teal"}}/> */}
                <Name>Audio Sessions</Name>
            </Icon>
            <Icon>
                {/* <Chat style={{fontSize:"110px" ,color:"teal"}}/> */}
                <Name>Chat Sessions</Name>
            </Icon>
        </Icons>
    </Container>
  )
}

export default SectionTwo
