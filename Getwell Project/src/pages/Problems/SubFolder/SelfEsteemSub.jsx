import React from 'react'
import { Link } from 'react-router-dom'
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

const SelfEsteemSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Self-Esteem</Topic>
      <Heads>Everything You Need to Know About Self-Esteem...</Heads><br />
      <Para>
      Research studies have suggested that about 2 percent of American adults have BPD, but the number could be as high as almost 6 percent. (2)
      <br /><br />
      From a diagnostic standpoint, it’s seemingly more common in women, people in lower-income communities, people younger than 30, and those who have been separated or divorced. (4) Around 75 percent of people diagnosed with BPD are women. (2) But men with BPD are often incorrectly diagnosed with depression, a different personality disorder, or post-traumatic stress disorder (PTSD) without a co-occuring diagnosis of BPD, which could mean the number of men with BPD is higher than recorded.  
      <br /><br />
      </Para>
      <br/>
  
      <Headtwo>What are Self-Esteem disorders?</Headtwo><br />
      <Para>
      Borderline personality disorder (BPD) is a complex, often misunderstood mental health condition. Mental health professionals used to think it was untreatable. But thanks to research in the last 30 years, we know it’s possible for people with BPD to benefit from specially developed talk therapies.
      <br /><br />
      At its most basic level, BPD is a disorder that causes a person to have impairments in self-identity and in regulating their emotions. People may go from one intense emotion to the next, feeling extremely loving followed by feeling irrationally angry. Once an event triggers a strong emotion, it’s harder for the person to return to a more peaceful state of mind. These mood swings can last hours or days.
      <br /><br />
      </Para>

      <Headtwo>What are the symptoms of Self-Esteem?</Headtwo>
      <br />
      <Para>
      “It’s really a relationship disorder — relationships can’t be functional, and that’s the trigger and pinpoint,” says Bethany Kassar, a licensed clinical social worker and addiction counselor based in Ambler, Pennsylvania.
      </Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Self-Esteem can include:</Para>
      <br />
      <Lists>
        <Li>An extreme, often irrational fear of abandonment and extreme efforts to avoid experiencing it.</Li>
        <Li>Intense, unstable relationships (going from extremely loving someone to despising them completely)</Li>
        <Li>A negative self-image (thinking they’re bad or worthless) and an unstable sense of self</Li>
        <Li>Risky or impulsive behavior (drug abuse, unsafe sex, reckless spending, gambling)</Li>
        <Li>Self-harm through injury (for example cutting) or suicide attempts</Li>
        <Li>Severe mood swings that can last a few hours or a few days</Li>
        <Li>Having problems controlling anger and outbursts</Li>
        <Li>Chronic feelings of emptiness</Li>
      </Lists>
      <br />
      <Para>Your Self-Esteem symptoms might be different from someone else’s. That’s why it’s essential to know how Self-Esteem can present itself. Read about the many types of Self-Esteem symptoms you might experience.</Para>
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
        <LiTwo>Self Esteem</LiTwo>
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

export default SelfEsteemSub
