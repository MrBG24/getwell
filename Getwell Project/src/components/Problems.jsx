import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display : flex;
margin :3px;
height : 30vh;
margin-top : 40px;
position : relative;
padding : 30px 20px;
align-items : center;
justify-content : space-between;
@media (max-width: 380px) {
  display : none;
}  
`
const Container1 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
   
`

const Container2 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container3 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container4 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container5 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container6 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Image = styled.img`
    width :210px;
    height :100%;
    object-fit :cover;
    display : block;
    border-radius : 10px;
    box-shadow: 0px 0px 10px black, 0px 0px 40px #aaa;
    transition: all 0.5s;
    &:hover{
      background: teal;
      border: 1px solid #000;
      z-index:1;
  }
  @media (max-width: 380px) {
    display : none;
  }
     
`

const Info = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100%
    height :200px;
    @media (max-width: 380px) {
      display : none;
    }
       
`

const Title = styled.h1`
   padding : 10px 0;
   font-size : 20px;
   @media (max-width: 380px) {
    display : none;
  }
     
`


const Button = styled.button`
    width : 150px;
    color : white;
    background-color : green;
    font-size : 15px;
    border : 1px solid black;
    border-radius : 25px;
    cursor : pointer;
    padding : 5px;
    transition : 0.5s ease;

    &:hover {
    background-color : rgba(0,0,0,0.5);
    transform : scale (1.1);
    }
    @media (max-width: 380px) {
      display : none;
    }
       
`

const ImgCont =styled.div`
position : relative;
   
`
const Problems = () => {
  return (
    <Container>
        <Container1>
          <ImgCont>
          <Image src="https://medlux.net.ua/wp-content/uploads/2022/08/psyhotychnyj-epizod-1.jpg" />
          </ImgCont>
          <Info>
            <Title>Psychosis</Title>
                
            <Link to="/psychosis"><Button>Learn More</Button></Link>
          </Info>
        </Container1>

        <Container2>
        <Image src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22376_1649928158761267.jpg" />
          <Info>
            <Title>Schizo-affective</Title>
                
            <Link to="/schizo"><Button>Learn More</Button></Link>
          </Info>
        </Container2>

        <Container3>
        <Image src="https://mpowerminds.com/assetOLD/images/low-self-esteem.jpg" />
          <Info>
            <Title>Self-esteem</Title>
                
            <Link to="/selfEsteem"><Button>Learn More</Button></Link>
          </Info>
        </Container3>

        <Container4>
        <Image src="https://www.bmj.com/content/bmj/342/bmj.d592/F1.large.jpg" />
          <Info>
            <Title>Self-harm</Title>
                
            <Link to="/selfHarm"><Button>Learn More</Button></Link>
          </Info>
        </Container4>

        <Container5>
        <Image src="https://images.squarespace-cdn.com/content/v1/5beb00a47e3c3abd688e43b4/1584077530459-ZBIUGNWZM9TTBEEI0BU2/sleep+disorder" />
          <Info>
            <Title>Sleep problems</Title>
                
            <Link to="/sleepProblems"><Button>Learn More</Button></Link>
          </Info>
        </Container5>

        <Container6>
        <Image src="https://static01.nyt.com/images/2019/10/15/science/15WELLSTRESS/15WELLSTRESS-superJumbo.jpg" />
          <Info>
            <Title>Stress</Title>
                
            <Link to="/stress"><Button>Learn More</Button></Link>
          </Info>
        </Container6>
    </Container>
  )
}

export default Problems
