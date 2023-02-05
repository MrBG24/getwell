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

const PsychosisSub = () => {
  return (
  <>
    <Navbar/>
    <Components>
      <Article>
        <Topic>Psychosis</Topic>
      <Heads>Everything You Need to Know About Psychosis...</Heads><br />
      <Para>psychosis is a severe mental illness characterized by extreme difficulty in responding emotionally to a newborn baby — it can even include thoughts of harming the child.
              <br /><br />
            The condition is different from postpartum depression, though the two conditions may occur together.
              <br /><br />
            "It usually represents a bipolar disorder, not just a depressive disorder," says psychiatrist Charlotte Ladd, MD, associate professor of psychiatry at the University of Wisconsin in Madison.
              <br /><br />
            In fact, Dr. Ladd qualifies postpartum psychosis as a "psychiatric emergency," because of the potential for harm to the baby or the new mother.
      </Para>
      <br/>
      <Headtwo>What are Psychosis disorders?</Headtwo><br />
      <Para>
      A mental disorder characterised by a disconnection from reality. <br /><br />
      Psychosis may occur as a result of a psychiatric illness such as schizophrenia. In other instances, it may be caused by a health condition, medication or drug use.
      <br /><br />
      Possible symptoms include delusions, hallucinations, talking incoherently and agitation. The person with the condition usually isn't aware of his or her behaviour.
      <br />
      Treatment may include medication and talk therapy.
      <br /><br />
      </Para>

      <Headtwo>What are the symptoms of Psychosis?</Headtwo>
      <br />
      <Para>
      Symptoms go beyond those associated with postpartum depression.
      </Para>
      <br />
      <Para style={{fontWeight:"bolder"}}>Symptoms of Psychosis can include:</Para>
      <br />
      <Lists>
       <Li>Sudden thoughts of throwing the baby or harming it in some way</Li>
       <Li>Delusions (beliefs that have no basis in reality)</Li>
       <Li>Hallucinations (seeing or hearing things that aren't there)</Li>
       <Li>Difficulty responding emotionally to the baby</Li>
       <Li>Difficulty sleeping beyond the normal interrupted sleep of new motherhood</Li>
       <Li>Changes in appetite or eating</Li>
       <Li>Confusion</Li>
       <Li>Agitation</Li>
      </Lists>
      <br />
      <Para>Your Psychosis symptoms might be different from someone else’s. That’s why it’s essential to know how Psychosis can present itself. Read about the many types of Psychosis symptoms you might experience.</Para>
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
        <LiTwo>Psychosis</LiTwo>
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

export default PsychosisSub
