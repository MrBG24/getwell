import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding : 20px;
  display : flex;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  max-width : 50%
  @media (max-width: 380px) {
    
  }
`

const Details = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`

const Head = styled.h1`
  font-size : 50px;
  margin-bottom : 20px;
  @media (max-width: 380px) {
    font-size : 30px;
    margin-bottom : 30px;
  }
`

const Detail = styled.p`
  font-weight : 700;
  margin-bottom : 20px;
  @media (max-width: 380px) {
    text-align : center;

  }
`

const Button = styled.button`
    padding : 10px;
    border-radius : 25px;
    background-color : teal;
    color : white;
    font-weight : 600;
    @media (max-width: 380px) {
      font-size : 10px;
      padding : 5px;
    }
`

const Intro = () => {
  return (
    <Container>
        <Image src='https://www.onlinecounselling4u.com/blog/wp-content/uploads/2021/12/7-reasons-why-you-should-choose-online-counselling.jpg'/>
        <Details>
          <Head>Talk. Resolve. Heal.</Head>
          <Detail>
            Online Counselling Therapy With Top Psychologists
            Anytime, Anywhere, Any device.
          </Detail>
          <Button>
            <Link to='/learn-more' style={{ textDecoration: "none", color: "white" }}>GET STARTED</Link>
            
            </Button>
        </Details>
    </Container>
  )
}

export default Intro
