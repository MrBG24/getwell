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
const SleepProblemsSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Sleeping Problems</Topic>
      <Heads>Everything You Need to Know About Sleeping Problems...</Heads><br />
      <Para>
      Falling asleep too early in the evening, struggling to wake up in the morning, or dealing with lethargy throughout all hours of the day can all be symptomatic of circadian rhythm disorders.
      <br /><br />
      Circadian rhythm disorders — also known as sleep-wake cycle disorders — are a group of conditions sharing one common feature: a disruption to the body’s internal clock and, in turn, timing of sleep as your sleep-wake cues fall out of sync with your environment.
      </Para>
      <br/>
      
      <Headtwo>What are the symptoms of Sleeping Problems?</Headtwo>
      <br />
      <Para>The symptoms you’ll encounter will depend on the type of circadian rhythm disorder you have and how severe the condition is, Dr. Cline says.</Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Sleeping Problems can include:</Para>
      <br />
      <Lists>
        <Li>Insomnia (when you have difficulty falling asleep or staying asleep)</Li>
        <Li>Excessive daytime sleepiness or sleepiness during shift work</Li>
        <Li>Lethargy, extreme tiredness, and exhaustion</Li>
        <Li>Difficulty waking up in the morning</Li>
        <Li>Sleep loss</Li>
        <Li>Depression, or irritability</Li>
        <Li>Poor performance at school, work, or other professional settings</Li>
        <Li>Aches and pains, including headaches</Li>
      </Lists>
      <br />
      <Para>Your Sleeping Problems symptoms might be different from someone else’s. That’s why it’s essential to know how Sleeping Problems can present itself. Read about the many types of Sleeping Problems symptoms you might experience.</Para>
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
        <Link to="/selfHarm">  <LiTwo>Self Harm</LiTwo> </Link>
        <LiTwo>Sleeping Problems</LiTwo>
        <Link to="/stress">  <LiTwo>Stress</LiTwo> </Link>
      </ListsTwo>
      </LinkPages>
    </Components>
    
    <Footer/>
    </>
  )
}

export default SleepProblemsSub
