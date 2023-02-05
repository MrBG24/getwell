import { Link } from "react-router-dom"
import styled from "styled-components"
// import { mobile } from "../Responsive"

const ContainerOne = styled.div`
 display : flex;
 padding-top: 30px;
 @media (max-width: 380px) {
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction: column;



 }
`

const MidContainer = styled.div`
@media (max-width: 380px) {
display : none;
 }
`

const Add = styled.h1`
 text-align : center;
 font-size : 70px;
`

const ContainerTwo = styled.div`
 display : flex;
 @media (max-width: 380px) {
 display : none;
 }
`

const InfoOne = styled.div`
 flex : 1 ;
 padding : 0px 20px;
`

const InfoTwo = styled.div`
 flex : 1 ;
 padding : 0px 0px;
`

const InfoThree = styled.div`
 flex : 1 ;
 padding : 0px 20px;
`

const Image = styled.img`
width :400px;
height :90%;
border-radius : 25px;
object-fit :cover;
box-shadow: 0px 0px 10px green, 0px 0px 20px #aaa, 0px 0px 30px #aaa, 0px 0px 40px #aaa;
transition: all 0.5s;
  &:hover{
    background: teal;
    border: 1px solid #000;
  }

@media (max-width: 380px) {
  width : 250px;
  height : 300px;
}
`

const Title = styled.h1`
text-align : center;
font-size: 40px;
color :  black;
@media (max-width: 380px) {
  font-size : 25px;
  padding-bottom : 30px;
`

// const Button = styled.button`
// text-align : center;
// `
// const Container = styled.div`
//     flex : 1;
//     margin :10px;
//     height : 70vh;
//     padding-bottom : 50px;
//     position : relative;
// `

// const Image = styled.img`
//     width :100%;
//     height :110%;
//     object-fit :cover;
//     border-radius : 50px;
// `

// const Info = styled.div`
//     position : absolute;
//     display : flex;
//     flex-direction : column;
//     margin-top: 95%;
//     align-items:  center;
//     width : 100%;
//     top:0;
//     left : 0;
// `

// const Title = styled.h1`
//     color : teal;
//     width : 100%;
//     display : flex;
//     justify-content : center;
//     background-color : rgba(0,0,0,0.7);
//     margin-botton :20px;
//     -webkit-text-stroke : .5px white;
   
// `
// const Buttons = styled.div`
// `

// const Button = styled.button`
//     border : none;
//     padding : 10px;
//     margin-top : 5px;
//     border-radius : 25px;
//     width : 70px;
//     background-color : rgba(0,0,0,0.4);
//     color : white;
//     cursor : pointer;
//     font-weight :600;
// `

const DoctorItem = () => {
  return (
  <>
    <ContainerOne>
    <InfoOne>
    <Link to='/bandora'><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Albert_Bandura_Psychologist.jpg/800px-Albert_Bandura_Psychologist.jpg"/></Link>
      
        
           <Link to='/bandora' style={{ textDecoration: "none" }}><Title>Albert Bandora</Title></Link> 
        
        {/* <Button>Learn More</Button> */}
    </InfoOne>

    <InfoTwo>
    <Link to='/carol'><Image src="https://images.gr-assets.com/authors/1640845711p8/217172.jpg"/></Link>
      
        
        <Link to='/carol' style={{ textDecoration: "none" }}><Title>Carol Dweck</Title></Link> 
        
        {/* <Button>Learn More</Button> */}
    </InfoTwo>

    <InfoThree>
      <Link to = '/roy'><Image src="https://roybaumeister.com/wp-content/uploads/2019/10/Roy-F-Baumeister-932x1024.jpg"/></Link>
      
         <Link to = '/roy' style={{ textDecoration: "none" }}><Title>Roy Baumeister</Title></Link>
        
        {/* <Button>Learn More</Button> */}
    </InfoThree>
    </ContainerOne>

    <MidContainer>
      <Add>50% Of For Your First Booking</Add>
    </MidContainer>

    <ContainerTwo>
    <InfoOne>
    <Link to='/hans'><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hans-Werner_Gessmann.png/1483px-Hans-Werner_Gessmann.png"/></Link>
      
        
           <Link to='/hans' style={{ textDecoration: "none" }}><Title>Hans-Werner Gessmann</Title></Link> 
        
        {/* <Button>Learn More</Button> */}
    </InfoOne>

    <InfoTwo>
    <Link to='/susan'><Image src="https://www.fhconservatives.org.uk/sites/www.fhconservatives.org.uk/files/2021-05/susan%20carey.jpg"/></Link>
      
        
        <Link to='/susan' style={{ textDecoration: "none" }}><Title>Susan Carey</Title></Link> 
        
        {/* <Button>Learn More</Button> */}
    </InfoTwo>

    <InfoThree>
      <Link to = '/margrid'><Image src="https://live.staticflickr.com/2611/3666914691_8f5bea91dd_b.jpg"/></Link>
      
         <Link to = '/margrid' style={{ textDecoration: "none" }}><Title>Margrid</Title></Link>
        
        {/* <Button>Learn More</Button> */}
    </InfoThree>
    </ContainerTwo>
  </>
  )
}

export default DoctorItem
