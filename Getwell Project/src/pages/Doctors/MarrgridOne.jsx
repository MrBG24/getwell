
// import { Chat, CheckCircle, Contactless, HeadsetMic, Mic, School, Stars, Videocam } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Container = styled.div`
    display : flex;
    height : 100%;
    @media (max-width: 380px) {
        flex-direction : column;
        justify-content : center;
        align-items : center;
      }
`

const ImageContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    flex : 1;
`

const ImgCont = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


`
const Image = styled.img`
width : 250px;
height :300px;
box-shadow: 0px 0px 10px black, 0px 0px 20px lightgrey, 0px 0px 30px teal, 0px 0px 40px yellow;
border-radius : 25px;
border-radius : 25px;
`

const Name = styled.h1`
    font-size : 70px;
`

const Deg = styled.p`
    font-size : 20px;
    margin-bottom : 10px;
`

const Button = styled.button`
    padding : 10px;
    border-radius : 25px;
    background-color : orange;
    font-weight : bold;
    cursor : pointer;
`
const ContainerOne = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    flex :1;
`
const SecOne = styled.div`
    display : flex;
    margin-bottom : 30px;
`
const SecTwo = styled.div`
    display : flex;
    margin-bottom : 30px;
`
const SecThree = styled.div`
    display : flex;

`
const Text = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`

const Head = styled.h4`
    font-size : 40px;
    @media (max-width: 380px) {
        font-size : 25px;
      }
`

const Para = styled.p`
font-size : 20px;
margin-left : 10px;
text-align : center;
@media (max-width: 380px) {
    font-size : 15px;
    text-align : center;
    padding : 0 20px;
  }
`

const ContainerTwo = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    flex :1;
`

const MarrgridOne = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <ImageContainer>
        <ImgCont>
            <Image src="https://live.staticflickr.com/2611/3666914691_8f5bea91dd_b.jpg"/>
            <Name>Margrid</Name>
            <Deg>Phd In psychology</Deg>
            {/* <Icons> */}
                {/* <Videocam style={{fontSize:"60px",color : "teal"}}/>
                <Mic style={{fontSize:"60px", paddingRight:"10px",paddingLeft:"10px",color : "teal"}}/>
                <Chat style={{fontSize:"60px",color : "teal"}}/> */}
            {/* </Icons> */}
        </ImgCont>
        <Link to="/form"> <Button>Book Session</Button></Link>
        </ImageContainer>
        <ContainerOne>
            <SecOne>
                {/* <School style={{fontSize:"50px", color :"orange"}}/> */}
                <Text>
                    <Head>Qualification</Head>
                    <Para>Masters in psychology</Para>
                </Text>
            </SecOne>
            <SecTwo>
                {/* <Stars style={{fontSize:"50px",color :"orange"}}/> */}
                <Text>
                    <Head>Specialization</Head>
                    <Para>Anxiety, Stress, Depression, Relationship Issues, Grief, Trauma, Couple Counseling, Suicidal Ideation, Sleep Issues, Narcissistic Abuse, Self-Harm, Body Image, LGBTQI, Phobia, Psycho-Somatic Disorders, Self Confidence</Para>
                </Text>
            </SecTwo>
            <SecThree>
                {/* <CheckCircle style={{fontSize:"50px", color :"orange"}}/> */}
                <Text>
                    <Head>Next Available at</Head>
                    <Para>-</Para>
                </Text>
            </SecThree>
        </ContainerOne>
        <ContainerTwo>
        <SecOne  style={{display:"none"}}>
                {/* <HeadsetMic style={{fontSize:"50px", color :"orange"}}/> */}
                <Text>
                    <Head>Languages Spoken</Head>
                    <Para>English</Para>
                </Text>
            </SecOne>
            <SecTwo>
                {/* <Contactless style={{fontSize:"50px",color :"orange"}}/> */}
                <Text>
                    <Head>Therapeutic Expertise</Head>
                    <Para>Cognitive Behavioural Therapy (CBT), Dialectical Behavioural Therapy (DBT), Client Centred, Rational Emotive Behavioural Therapy (REBT), Trauma Informed Therapy, Mindfulness Based Therapies, Art Therapy, Neuro-Linguistic Programming (NLP)</Para>
                </Text>
            </SecTwo>
        </ContainerTwo>
    </Container>
    <Footer/>
    </>
  )
}


export default MarrgridOne
