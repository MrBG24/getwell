import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display : flex;
margin :3px;
height : 30vh;

position : relative;
padding : 30px 20px;
align-items : center;
justify-content : space-between;
@media (max-width: 380px) {
  display : none;
}
   
`

const Container1 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
   
`

const Container2 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container3 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container4 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container5 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Container6 = styled.div`
@media (max-width: 380px) {
  display : none;
}
   
`

const Image = styled.img`
    width :210px;
    height :100%;
    object-fit :cover;
    display : block;
    border-radius : 10px;
    box-shadow: 0px 0px 10px black, 0px 0px 40px #aaa;
    transition: all 0.5s;
    &:hover{
      background: teal;
      border: 1px solid #000;
      z-index:1;
  }
  @media (max-width: 380px) {
    display : none;
  }
     
`

const Info = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100%
    height :200px;
    @media (max-width: 380px) {
      display : none;
    }
       
`

const Title = styled.h1`
   padding : 10px 0;
   font-size : 20px;
   @media (max-width: 380px) {
    display : none;
  }
     
`


const Button = styled.button`
    width : 150px;
    color : white;
    background-color : green;
    font-size : 15px;
    border : 1px solid black;
    border-radius : 25px;
    cursor : pointer;
    padding : 5px;
    transition : 0.5s ease;

    &:hover {
    background-color : rgba(0,0,0,0.5);
    transform : scale (1.1);
    }
    @media (max-width: 380px) {
      display : none;
    }
       
`

const ProblemTwo = () => {
    return (
      <Container>
        <Container1>
          <Image src="https://static.toiimg.com/thumb/msid-88280349,imgsize-53824,width-800,height-600,resizemode-75/88280349.jpg" />
          <Info>
            <Title>
                Anger
            </Title>
            <Link to="/anger"><Button>Learn More</Button></Link>
          </Info>
        </Container1>
        <Container2>
        <Image src="https://www.helpguide.org/wp-content/uploads/woman-suffering-an-anxiety-attack-alone-in-the-night-picture.jpg" />
          <Info>
            <Title>
            Anxiety
            </Title>
            <Link to="/anxiety"><Button>Learn More</Button></Link>
            </Info>
        </Container2>
        <Container3>
        <Image src="https://www.sleepfoundation.org/wp-content/uploads/2020/09/shutterstock_1502365082.jpg" />
          <Info>
            <Title>
            Depression
            </Title>
            <Link to="/depression"><Button>Learn More</Button></Link>
            </Info>
        </Container3>
        <Container4>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsbpx36JBriwuyA6fC4CB4IFIhKC3uTi8Vw&usqp=CAU" />
          <Info>
            <Title>
            Hypomania
            </Title>
            <Link to="/hypomania"><Button>Learn More</Button></Link>
          </Info>
        </Container4>
        <Container5>
        <Image src="https://media.newyorker.com/photos/5e7a9667ace85e000886316e/master/w_2560%2Cc_limit/200406_r36147.jpg" />
          <Info>
            <Title>
            Loneliness
            </Title>
            <Link to="/lonelinenss"><Button>Learn More</Button></Link>
          </Info>
        </Container5>
        <Container6>
        <Image src="https://perspectivestherapyservices.com/wp-content/uploads/2021/09/Panic-Attacks-scaled.jpeg" />
          <Info>
            <Title>
            Panic attacks
            </Title>
            <Link to="/panicAttack"><Button>Learn More</Button></Link>
          </Info>
        </Container6>
    </Container>
      )
    }
    
export default ProblemTwo
