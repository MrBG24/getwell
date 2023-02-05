import styled from 'styled-components'

const Container = styled.div`
  height : 20vh;
  display : flex;
  align-items : center;
  justify-content: center;
  flex-direction : column;
  
`

const Heading = styled.div`
    
`
const Hed = styled.h1`
    font-size : 50px;
    padding : 10px;
    border-bottom : 5px solid teal; 
    border-left : 5px solid teal; 
    border-radius : 25px;
    @media (max-width: 380px) {
      padding-top : 10%;
      font-size : 25px;
      border-bottom : 2px solid teal; 
      border-left : 2px solid teal; 
      text-align : center;
      padding :5px;
    }

`
const About = styled.p`
  font-size : 20px;
  font: italic small-caps bold 16px/2 cursive;
  padding : 10px 150px;
  text-align : center;
  @media (max-width: 380px) {
    font-size : 10px;
    padding : 10px 20px;
  }

`
const HeadDocs = () => {
  return (
    <Container>
    <Heading>
      <Hed>Our Specialists ~</Hed>
    </Heading>
    <About>
      We have the best doctors all around the word for you. they will take care of you untill you get free yourself. they all are 
      university level tutors and best in industry level peoples. Here Some Of the for your reference.
    </About>
    </Container>
  )
}
export default HeadDocs
