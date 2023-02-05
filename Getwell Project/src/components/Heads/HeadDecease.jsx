import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
@media (max-width: 380px) {
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
}
`

const Heading = styled.div`
    height : 20vh;
    margin-top : 30px;
    display : flex;
    align-items : center;
    justify-content: center;
`
const Hed = styled.h1`
    font-size : 50px;
    padding : 10px;
    border-bottom : 5px solid teal; 
    border-right : 5pxsolid teal; 
    border-radius : 25px;
    @media (max-width: 380px) {
      font-size : 25px;
      border-bottom : 2px solid teal; 
      border-left : 2px solid teal; 
      text-align : center;
      padding :5px;
    }
`
const About = styled.p`
  font-size : 20px;
  font: italic small-caps bold 16px/2 cursive;
  padding : 10px 150px;
  text-align : center;
  @media (max-width: 380px) {
    font-size : 10px;
    padding :10px 5px;
  }
`
const ButtonForMob =styled.button`
display : none;
@media (max-width: 380px) {
  display : initial;
  font-size : 10px;
  font-weight :700;
  color : white ;
  background-color : teal;
  border-radius : 25px;
  padding : 5px 20px;
}
`

const HeadDecease = () => {
    return (
      <Container>
        <Heading>
          <Hed>Most Common Problems..!</Hed>
        </Heading>
        <About>
        Personal issues: what are they? In practice, personal issues can be defined as any personal problem that affects a certain individual. Typical personal issues could relate, among others, to family, finance, addiction, disability or health.
        </About>
        <About>
          Here is some of the most common problems..
        </About>
        <Link to = "./anger" style={{ textDecoration: "none", color: "white" }}><ButtonForMob>Click Here To Learn More..</ButtonForMob></Link>
      </Container>
      )
    }

export default HeadDecease
