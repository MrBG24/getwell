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

const DepressionSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Depression</Topic>
      <Heads>Everything You Need to Know About Depression...</Heads><br />
      <Para>Depression affects everyone in different ways. Sometimes, the feelings of fear and dread don’t go away or get worse over time. Here, you can learn about Depression, who it affects, and how to manage it.</Para>
      <br/>
      <Headtwo>What are Depression disorders?</Headtwo><br />
      <Para>
      Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.
      <br /><br />
      More than just a bout of the blues, depression isn't a weakness and you can't simply "snap out" of it. Depression may require long-term treatment. But don't get discouraged. Most people with depression feel better with medication, psychotherapy or both.
      </Para><br /><br />

      <Headtwo>What are the symptoms of Depression?</Headtwo>
      <br />
      <Para>Although depression may occur only once during your life, people typically have multiple episodes. During these episodes, symptoms occur most of the day, nearly every day and may include:</Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Depression can include:</Para>
      <br />
      <Lists>
        <Li>Feelings of sadness, tearfulness, emptiness or hopelessness</Li>
        <Li>Angry outbursts, irritability or frustration, even over small matters</Li>
        <Li>Loss of interest or pleasure in most or all normal activities, such as sex, hobbies or sports</Li>
        <Li>Sleep disturbances, including insomnia or sleeping too much</Li>
        <Li>Tiredness and lack of energy, so even small tasks take extra effort </Li>
        <Li>Anxiety, agitation or restlessness</Li>
        <Li>Unexplained physical problems, such as back pain or headaches</Li>
      </Lists>
      <br />
      <Para>For many people with depression, symptoms usually are severe enough to cause noticeable problems in day-to-day activities, such as work, school, social activities or relationships with others. Some people may feel generally miserable or unhappy without really knowing why.</Para>
      <Booking>
      <Link to="/form"><Button>Book Appointment</Button></Link>
      </Booking>
      
      </Article>

      <LinkPages>
      <Heads>Problems</Heads>
      <ListsTwo>
        <Link to="/anger"> <LiTwo>Anger</LiTwo> </Link>
        <Link to="/anxiety"> <LiTwo>Anxiety</LiTwo> </Link>
        <LiTwo>Depression</LiTwo>
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

export default DepressionSub
