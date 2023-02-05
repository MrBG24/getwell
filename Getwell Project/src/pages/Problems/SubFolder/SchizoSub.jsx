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

const SchizoSub = () => {
  return (
    <>
    <Navbar/>
    <Components>
    <Article>
      <Topic>Schizophrenia</Topic>
    <Heads>Everything You Need to Know About Schizophrenia...</Heads><br />
    <Para>Schizophrenia is a serious mental disorder in which people interpret reality abnormally. Schizophrenia may result in some combination of hallucinations, delusions, and extremely disordered thinking and behavior that impairs daily functioning, and can be disabling. People with schizophrenia require lifelong treatment.</Para>
    <br/>
    
    <Headtwo>What are Schizophrenia disorders?</Headtwo><br />
    <Para>
    Schizophrenia affects fewer than 1 percent of adults in the United States, according to the National Institute of Mental Health (NIMH).
    <br /><br />
    This serious psychiatric disorder is one of the most disabling mental health issues. It can cause disordered thinking, delusions, and hallucinations. It affects how a person feels, thinks, and behaves, per the NIMH.
    <br /><br />
    Nonetheless, it’s possible for people with schizophrenia to live relatively full and satisfying lives.
    <br /><br />
    </Para>

    <Headtwo>What are the symptoms of Schizophrenia?</Headtwo>
    <br />
    <Para>Schizophrenia symptoms usually first appear early in life, during a person’s late teen years through their early thirties. Some people go through a “prodromal period” during which they do not display symptoms of schizophrenia but may have mood symptoms, withdraw socially, or be irritable. People with schizophrenia may display unusual behaviors and symptoms that can be upsetting for friends and family.</Para>
    <br />
    <Para style={{fontWeight:"bolder"}}>Symptoms of Schizophrenia can include:</Para>
    <br />
    <Lists>
      <Li>Hallucinations (when a person sees, hears, smells, or feels things that aren’t there)</Li>
      <Li>Delusions (illogical or untrue beliefs)</Li>
      <Li>Disorganized thinking and speaking</Li>
      <Li>Unusual body movements</Li>
      <Li>Problems with memory, attention, and concentration</Li>
    </Lists>
    <br />
    <Para>Your Schizophrenia symptoms might be different from someone else’s. That’s why it’s essential to know how Schizophrenia can present itself. Read about the many types of Schizophrenia symptoms you might experience.</Para>
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
        <LiTwo> Schizo Affective</LiTwo>
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

export default SchizoSub
