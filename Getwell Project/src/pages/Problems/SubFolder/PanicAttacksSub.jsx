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

const PanicAttacksSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Panic Attack</Topic>
      <Heads>Everything You Need to Know About Panic Attack...</Heads><br />
      <Para>Panic disorder is an anxiety disorder characterized by spontaneous, unexpected panic attacks. Panic attacks are sudden episodes of intense fear that also feature physical symptoms. People who have panic disorder are very worried about having another panic attack. They often try to prevent future attacks by avoiding places, situations, or behaviors they associate with panic attacks. As a result, panic disorder can significantly interfere with daily life.</Para>
      <br/>

      <Headtwo>What are Panic Attack disorders?</Headtwo><br />
      <Para>
      “Our heart races and our circulation favors our large muscle groups, so we can run away, and we in turn get dizzy because the blood is flowing in a different way. Our body is readying us to try to get away from the danger,”<br /><br />
      </Para>

      <Headtwo>What are the symptoms of Panic Attack?</Headtwo>
      <br />
      <Para>
      The hallmark symptom of panic disorder is the persistent fear of having future panic attacks. (3) If you experience repeated panic attacks and are constantly worried about having another one, you may have panic disorder.
      </Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Panic Attack can include:</Para>
      <br />
      <Lists>
       <Li>Palpitations, pounding heartbeat, or accelerated heart rate</Li>
       <Li>Sweating</Li>
       <Li>Trembling or shaking</Li>
       <Li>Sensations of choking</Li>
       <Li>Chest pain or discomfort</Li>
       <Li>Feeling dizzy, unsteady, light-headed, or faint</Li>
       <Li>Chills or heat sensations</Li>
       <Li>Fear of losing control or “going crazy”</Li>
      </Lists>
      <br />
      <Para>Your Panic Attack symptoms might be different from someone else’s. That’s why it’s essential to know how Panic Attack can present itself. Read about the many types of Panic Attack symptoms you might experience.</Para>
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
        <LiTwo>Panic Attack</LiTwo>
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

export default PanicAttacksSub
