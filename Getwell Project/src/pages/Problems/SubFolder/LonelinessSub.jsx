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

const LonelinessSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Loneliness</Topic>
      <Heads>Everything You Need to Know About Loneliness...</Heads><br />
      <Para>During an ongoing global pandemic that’s kept loved ones apart and made it potentially unsafe to socialize in many of the ways we’re accustomed to doing, loneliness is becoming salient. Thirty-six percent of Americans felt “serious loneliness” in 2020 (or felt lonely “frequently” or “almost all the time or all the time” in the previous month), according to Harvard research.right up arrow A large-scale Cigna survey that same year pegged loneliness in the United States as being as high as 61 percent.right up arrow U.S. surgeon general Vivek Murthy warned of a “loneliness epidemic” sweeping the country back in 2017, in an article he authored on the subject — and that was before “social distancing” became part of our daily lexicon.</Para>
      <br/>

      <Headtwo>What are Loneliness disorders?</Headtwo><br />
      <Para>
      Loneliness is cognitive discomfort or uneasiness from being or perceiving oneself to be alone, according to the American Psychological Association (APA).right up arrow The APA defines it as the emotional distress we feel when our inherent needs for intimacy and companionship are not met.
      </Para>

      <Headtwo>What are the symptoms of Loneliness?</Headtwo>
      <br />
      <Para>Symptoms of loneliness vary depending on what’s causing it and the person’s individual circumstances. But loneliness often involves the following, according to Olds:</Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Loneliness can include:</Para>
      <br />
      <Lists>
        <Li>Feelings of sadness, emptiness, discomfort, or disconnectedness </Li>
        <Li>Feeling left out or isolated from others</Li>
        <Li>A longing for companionship</Li>
        <Li>Feeling like you’re misunderstood or not heard</Li>
        <Li>Feeling isolated even when you're surrounded by others</Li>
        <Li>Feeling exhausted or burnt out by social interactions</Li>
        <Li>Feeling insecure</Li>
        <Li>Ruminating and reminiscing on the past</Li>
      </Lists>
      <br />
      <Para>Your Loneliness symptoms might be different from someone else’s. That’s why it’s essential to know how Loneliness can present itself. Read about the many types of Loneliness symptoms you might experience.</Para>
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
        <LiTwo>Loneliness</LiTwo>
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

export default LonelinessSub
