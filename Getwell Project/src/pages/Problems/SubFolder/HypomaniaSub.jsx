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

const HypomaniaSub = () => {
  return (
    <>
    <Navbar/>
    
    <Components>
    <Article>
      <Topic>Hypomania</Topic>
    <Heads>Everything You Need to Know About Hypomania...</Heads><br />
    <Para>Hypomania is a condition in which you display a revved up energy or activity level, mood or behavior. The new “energized you” is recognized by others as beyond your usual self. Hypomania is a less severe form of mania, and both are commonly part of bipolar disorder. Treatments include psychotherapy, medication and self-care strategies.</Para>
    <br/>
    <Headtwo>What are Hypomania diso rders?</Headtwo><br />
    <Para>
    Hypomania is a condition in which you have a period of abnormally elevated, extreme changes in your mood or emotions, energy level or activity level. This energized level of energy, mood and behavior must be a change from your usual self and be noticeable by others.
    <br /><br />
    Hypomania is a symptom of bipolar disorder, but can also be a symptom of other mental health conditions.
    </Para><br />

    <Headtwo>What are the symptoms of Hypomania?</Headtwo>
    <br />
    <Para>Symptoms of a hypomanic episode are the same but less intense than mania. Hypomanic symptoms, which vary from person to person.</Para>
    <br />
    <Para style={{fontWeight:"bolder"}}>Symptoms of Hypomania can include:</Para>
    <br />
    <Lists>
      <Li>Having an abnormally high level of activity or energy.</Li>
      <Li>Feeling extremely happy, excited.</Li>
      <Li>Not sleeping or only getting a few hours of sleep but still feel rested.</Li>
      <Li>Having an inflated self-esteem, thinking you’re invincible.</Li>
      <Li>Being easily distracted by unimportant or unrelated things. </Li>
      <Li>Being obsessed with and completely absorbed in an activity you’re focus on.</Li>
      <Li>Showing impulsive behavior that can lead to poor choices, such as buying sprees, reckless sex or foolish business investments.</Li>
    </Lists>
    <br />
    <Para>Your Hypomania symptoms might be different from someone else’s. That’s why it’s essential to know how Hypomania can present itself. Read about the many types of Hypomania symptoms you might experience.</Para>
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
        <LiTwo>Hypomania</LiTwo>
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

export default HypomaniaSub
