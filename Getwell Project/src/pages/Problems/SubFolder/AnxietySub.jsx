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

const AnxietySub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>ANXIETY</Topic>
      <Heads>Everything You Need to Know About Anxiety...</Heads><br />
      <Para>Anxiety affects everyone in different ways. Sometimes, the feelings of fear and dread don’t go away or get worse over time. Here, you can learn about anxiety, who it affects, and how to manage it.</Para>
      <br/>
      <Headtwo>What is anxiety?</Headtwo><br />
      <Para>Anxiety is your body’s natural response to stress. It’s a feeling of fear or apprehension about what’s to come. For example, going to a job interview or giving a speech on the first day of school may cause some people to feel fearful and nervous.<br/>
      <br/>
      But if your feelings of anxiety are extreme, last for at least 6 months, and are interfering with your life, you may have an anxiety disorder.</Para>
      <br />

      <Headtwo>What are anxiety disorders?</Headtwo><br />
      <Para>
      It’s normal to feel anxious about moving to a new place, starting a new job, or taking a test. This type of anxiety is unpleasant, but it may motivate you to work harder and do a better job. Ordinary anxiety is a feeling that comes and goes but doesn’t interfere with your everyday life.<br/><br/>
      In the case of an anxiety disorder, the feeling of fear may be with you all the time. It’s intense and sometimes debilitating.<br/><br />
      This type of anxiety may cause you to stop doing things you enjoy. For example, it may prevent you from entering an elevator, crossing the street, or even leaving your home in extreme cases. If left untreated, the anxiety will keep getting worse. <br /><br />
      Anxiety disorders are the most common form of emotional disorder and can affect anyone. But, according to the American Psychiatric Association, women are more likely than men to receive a diagnosis of an anxiety disorder. <br /><br />
      </Para>

      <Headtwo>What are the symptoms of anxiety?</Headtwo>
      <br />
      <Para>Anxiety feels different depending on the person experiencing it. Feelings can range from butterflies in your stomach to a racing heart. You might feel out of control like there’s a disconnect between your mind and body.</Para>
      <br />
      <Para>You may have a general feeling of fear and worry, or you may fear a specific place or event. In some cases, you may experience a panic attack.</Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of anxiety can include:</Para>
      <br />
      <Lists>
        <Li>anxious thoughts or beliefs that are difficult to control</Li>
        <Li>restlessness</Li>
        <Li>trouble concentrating</Li>
        <Li>difficulty falling asleep</Li>
        <Li>fatigue </Li>
        <Li>irritability</Li>
        <Li>unexplained aches and pains</Li>
      </Lists>
      <br />
      <Para>Your anxiety symptoms might be different from someone else’s. That’s why it’s essential to know how anxiety can present itself. Read about the many types of anxiety symptoms you might experience.</Para>
      <Booking>
      <Link to="/form"><Button>Book Appointment</Button></Link>
      </Booking>
      
      </Article>

      <LinkPages>
      <Heads>Problems</Heads>
      <ListsTwo>
        <Link to="/anger"> <LiTwo>Anger</LiTwo> </Link>
        <LiTwo>Anxiety</LiTwo> 
        <Link to="/depression"> <LiTwo>Depression</LiTwo> </Link>
        <Link to="/hypomania"> <LiTwo>Hypomania</LiTwo> </Link>
        <Link to="/lonelinenss"> <LiTwo>Loneliness</LiTwo> </Link>
        <Link to="/panicAttack">  <LiTwo>Panic Attack</LiTwo> </Link>
        <Link to="/psychosis"> <LiTwo>Psychosis</LiTwo> </Link>
        <Link to="/schizo"> <LiTwo> Schizo Affective</LiTwo> </Link>
        <Link to="/selfEsteem"> <LiTwo>Self Esteem</LiTwo> </Link>
        <Link to="/selfHarm"> <LiTwo>Self Harm</LiTwo> </Link>
        <Link to="/sleepProblems">  <LiTwo>Sleeping Problems</LiTwo> </Link>
        <Link to="/stress">  <LiTwo>Stress</LiTwo> </Link>
      </ListsTwo>
      </LinkPages>
    </Components>
    <Footer/>
    </>
  )
}

export default AnxietySub
