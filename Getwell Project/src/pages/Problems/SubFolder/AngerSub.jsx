import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'

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


const AngerSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>ANGER</Topic>
      <Heads>Everything You Need to Know About Anger...</Heads><br />
      <Para>Anger is a natural, instinctive response to threats. Some anger is necessary for our survival. <br />
      <br />
      Anger becomes a problem when you have trouble controlling it, causing you to say or do things you regret. <br />
      <br />
      A 2010 studyTrusted Source found that uncontrolled anger is bad for your physical and mental health. It can also quickly escalate to verbal or physical violence, harming you and those around you. <br />
      </Para>
      <br/>
      <Headtwo>What is Anger?</Headtwo><br />
      <Para>Anger is an emotion characterized by antagonism toward someone or something you feel has deliberately done you wrong.

      Anger can be a good thing. It can give you a way to express negative feelings, for example, or motivate you to find solutions to problems.<br/>
      <br/>
      But if your feelings of anxiety are extreme, last for at least 6 months, and are interfering with your life, you may have an anxiety disorder.</Para>
      <br />

      <Headtwo>What are Anger disorders?</Headtwo><br />
      <Para>
      Intermittent explosive disorder involves repeated, sudden episodes of impulsive, aggressive, violent behavior or angry verbal outbursts in which you react grossly out of proportion to the situation. Road rage, domestic abuse, throwing or breaking objects, or other temper tantrums may be signs of intermittent explosive disorder.
      <br /><br />
      These intermittent, explosive outbursts cause you significant distress, negatively impact your relationships, work and school, and they can have legal and financial consequences.
      <br /><br />
      Intermittent explosive disorder is a chronic disorder that can continue for years, although the severity of outbursts may decrease with age. Treatment involves medications and psychotherapy to help you control your aggressive impulses
</Para>
<br />
      <Headtwo>What are the symptoms of Anger?</Headtwo>
      <br />
      <Para>
        Explosive eruptions occur suddenly, with little or no warning, and usually last less than 30 minutes. These episodes may occur frequently or be separated by weeks or months of nonaggression. Less severe verbal outbursts may occur in between episodes of physical aggression. You may be irritable, impulsive, aggressive or chronically angry most of the time.
      </Para>
      <br /><br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of anger can include:</Para>
      <br />
      <Lists>
        <Li>Rage</Li>
        <Li>Irritability</Li>
        <Li>Increased energy</Li>
        <Li>Racing thoughts</Li>
        <Li>Tingling </Li>
        <Li>Tremors</Li>
        <Li>Tremors</Li>
        <Li>Chest tightness</Li>
      </Lists>
      <br />
      <Para>Your anger symptoms might be different from someone else’s. That’s why it’s essential to know how anger can present itself. Read about the many types of anger symptoms you might experience.</Para>
      <Booking>
        <Link to="/form"><Button>Book Appointment</Button></Link>
      </Booking>
      
      </Article>

      <LinkPages>
      <Heads>Problems</Heads>
      <ListsTwo>
        <LiTwo>Anger</LiTwo>
        <Link to="/anxiety"> <LiTwo>Anxiety</LiTwo> </Link>
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

export default AngerSub
