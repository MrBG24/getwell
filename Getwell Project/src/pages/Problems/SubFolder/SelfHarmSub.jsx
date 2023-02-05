import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

const Components = styled.div`
  display : flex;
  padding :20px;
  @media (max-width: 380px) {
    flex-direction : column;
  }

`
const Topic = styled.h1`
  display: flex;
  align-items : center;
  justify-content : center;
  padding : 30px;
  font-size : 50px;
  color : teal;
  @media (max-width: 380px) {
    font-size : 30px;
    padding : 0;

  }
`

const Article = styled.div`
  flex : 2;
  padding : 50px;
  @media (max-width: 380px) {
    padding : 0;
  }
`
const Heads = styled.h1`
  font-size : 50px;
  @media (max-width: 380px) {
    font-size : 20px;
  }
`
const Headtwo = styled.h2`
  font-size : 40px;
  @media (max-width: 380px) {
    font-size : 20px;
  }
`
const Para = styled.p`
  font-size : 20px;
  text-align : justify;
  text-indent : 30px;
  @media (max-width: 380px) {
    font-size : 15px;
  }
  
`
const Lists = styled.ul`

`
const Li = styled.li`
  font-size : 20px;
  margin-left : 20px;
  padding-left : 10px;
  @media (max-width: 380px) {
    font-size : 15px;
  }
  
`

const ListsTwo = styled.ul`
  padding-left : 30px;
  
`
const LiTwo = styled.li`
  font-size : 20px;
  margin-left : 20px;
  padding-left : 10px;
  padding:5px;
  list-style-type: upper-roman;
  text-decoration-line: none;
  cursor : pointer;
  aligm-items : center;
  @media (max-width: 380px) {
    font-size : 15px;
  }
  
`
const Booking = styled.div`
  height : 30px;
  margin-top : 20px;
  display : flex;
align-items : center;
justify-content : center; 
`

const Button =styled.button `
color : white;
background-color : teal;
padding : 15px;
font-weight : bolder;
border : 1px solid black;
border-radius : 25px;
@media (max-width: 380px) {
  font-size : 15px;
  padding : 5px 10px;
}
cursor : pointer;
`

const LinkPages = styled.div`
  flex : 1;
  display : flex;
  flex-direction : column;
  padding : 20px;
  top : 20px;
  position : relative;
  background-image: linear-gradient(to right, grey , teal);
  border-radius : 25px;
`

const SelfHarmSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Self-Harm</Topic>
      <Heads>Everything You Need to Know About Self-Harm...</Heads><br />
      <Para>While self-injury may bring a brief sense of calm and a release of physical and emotional tension, it's usually followed by guilt and shame and the return of painful emotions. Life-threatening injuries are usually not intended, but it's possible that more-serious and even fatal self-harm could happen.</Para>
      <br/>
      <Headtwo>What are Self-Harm disorders?</Headtwo><br />
      <Para>
      Nonsuicidal self-injury, often simply called self-injury, is the act of harming your own body on purpose, such as by cutting or burning yourself. It's usually not meant as a suicide attempt. This type of self-injury is a harmful way to cope with emotional pain, sadness, anger and stress.
      <br /><br />
      </Para>

      <Headtwo>What are the symptoms of Self-Harm?</Headtwo>
      <br />
      <Para>Self-injury mostly happens in private. Usually, it's done in a controlled manner or the same way each time, which often leaves a pattern on the skin. Examples of self-harm include.</Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Self-Harm can include:</Para>
      <br />
      <Lists>
        <Li>Cutting, scratching or stabbing with a sharp object, one of the most common methods.</Li>
        <Li>Burning with lit matches, cigarettes or heated, sharp objects such as knives.</Li>
        <Li>Carving words or symbols on the skin.</Li>
        <Li>Self-hitting, punching, biting or head banging.</Li>
        <Li>Piercing the skin with sharp objects.</Li>
        <Li>Inserting objects under the skin.</Li>
      </Lists>
      <br />
      <Para>Your Self-Harm symptoms might be different from someone else’s. That’s why it’s essential to know how Self-Harm can present itself. Read about the many types of Self-Harm symptoms you might experience.</Para>
      <Booking>
      <Link to="/form"><Button>Book Appointment</Button></Link>
      </Booking>
      
      </Article>

      <LinkPages>
      <Heads>Problems</Heads>
      <ListsTwo>
      <Link to="/anger"> <LiTwo>Anger</LiTwo> </Link>
        <Link to="/anxiety"> <LiTwo>Anxiety</LiTwo> </Link>
        <Link to="/depression"> <LiTwo>Depression</LiTwo> </Link>
        <Link to="/hypomania"> <LiTwo>Hypomania</LiTwo> </Link>
        <Link to="/lonelinenss"> <LiTwo>Loneliness</LiTwo> </Link>
        <Link to="/panicAttack">  <LiTwo>Panic Attack</LiTwo> </Link>
        <Link to="/psychosis"> <LiTwo>Psychosis</LiTwo> </Link>
        <Link to="/schizo"> <LiTwo> Schizo Affective</LiTwo> </Link>
        <Link to="/selfEsteem"> <LiTwo>Self Esteem</LiTwo> </Link>
        <LiTwo>Self Harm</LiTwo>
        <Link to="/sleepProblems">  <LiTwo>Sleeping Problems</LiTwo> </Link>
        <Link to="/stress">  <LiTwo>Stress</LiTwo> </Link>
      </ListsTwo>
      </LinkPages>
    </Components>
    
    <Footer/>
    </>
  )
}

export default SelfHarmSub
