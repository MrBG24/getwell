import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height : 115vh; 


`

const Wrapper = styled.div`
  display : flex;
  align-item:center;
  padding : 70px 30px;
  @media (max-width: 380px) {
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  }

`

const ImageContainer = styled.div`
height : 100%;
flex:1;

`
const Image = styled.img`
  height:80%;
  @media (max-width: 380px) {
    width : 100%;
    height : 250px;
  }
`

const InfoContainer = styled.div`
flex:1;
align-items: center;
justify-content: center;
text-align: center;
padding-top : 90px;
`
const Title = styled.h1`
    font-size :70px;
    @media (max-width: 380px) {
      font-size : 30px;
    }
`
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing:3px;
    @media (max-width: 380px) {
      font-size : 20px;
      margin : 30px 0;
    }
`
const Button = styled.button`
padding : 10px;
font-size : 20px;
background-color: transparent;
cursor: pointer;
`

const SectionOne = () => {
  return (
    <Container>
 
        <Wrapper>

                <ImageContainer>
                  <Image src="https://cdn3.iconfinder.com/data/icons/positive-patients/512/positive-patients-19-512.png"/>
                </ImageContainer>
                <InfoContainer>
                  <Title>Wellcom Guys</Title>
                  <Desc>Here We are for you to sort out and trying to fix your porblem what you have come on we can getwell.</Desc>
                  <Button>Learn More</Button>
                </InfoContainer>

        </Wrapper>
  
    </Container>
  )
}
export default SectionOne