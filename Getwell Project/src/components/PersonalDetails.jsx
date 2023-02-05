import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

// const Container = styled.div`
//     height : 80vh;
//     background-color : white;
//     display : flex;
//     align-items : center;
//     justify-content : center;
//     flex-direction : column;
// `

// const InputContainer = styled.div`
//     display: flex;
//     flex-direction : column;
//     align-items : center;
//     justify-content : center;
// `

// const Name = styled.input`
//     padding : 10px;
//     width : 400px;
//     margin-bottom : 20px;
//     border-radius : 20px;
//     border : 2px solid grey;
// `
// const Phone = styled.input`
//     padding : 10px;
//     width : 400px;
//     margin-bottom : 20px;
//     border-radius : 20px;
//     border : 2px solid grey;
// `
// const Input = styled.input`
//     padding : 10px;
//     width : 400px;
//     margin-bottom : 20px;
//     border-radius : 20px;
//     border : 2px solid grey;
// `

// const Button = styled.button`
//     border-radius : 20px;
//     padding : 10px;
//     border : 2px solid green;
//     cursor : pointer;
//     font-weight : 600;
//     width : 100px; 
//     background-color : white;
// `

const StyledForm = styled.div`
    height : 100vh;
    background-color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    @media (max-width: 380px) {
      display : flex;
      align-items : center;
      justify-content : center;
    }
`
const Title = styled.h1`
    font-size : 70px;
    @media (max-width: 380px) {
      font-size : 30px;
    }
`
const Description = styled.div`
    font-size:24px;
    font-weight : 300;
    margin-bottom :20px;
    @media (max-width: 380px) {
      font-size : 20px;
      padding : 0 10px;
      text-align : center;
    }
`

const Input = styled.input`
width : 500px;
  border:2px solid black;
  border-radius : 25px;
  padding : 10px;
  font-weight : 300;
  box-shadow: none;
  transition: box-shadow 0.5s;
  &:hover{
    box-shadow: 0px 0px 10px teal, 0px 0px 20px #aaa, 0px 0px 30px grey, 0px 0px 40px #aaa;
  }

  @media (max-width: 380px) {
    width : 300px;
  }
`
const InputTwo = styled.input`
  width : 140px;
  border:2px solid black;
  border-radius : 25px;
  padding : 10px;
  background-color : teal;
  cursor : pointer;
  @media (max-width: 380px) {
    width : 300px;
  }
`

const InputBlock = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  
`

const Label = styled.label`
  font-weight : 500;
  padding : 10px;

  
`

const Textarea = styled.textarea`
width : 500px;
border:2px solid black;
border-radius : 25px;
padding : 10px;
margin-bottom : 10px;
font-weight : 300;
transition: box-shadow 0.5s;
  &:hover{
    box-shadow: 0px 0px 10px teal, 0px 0px 20px #aaa, 0px 0px 30px grey, 0px 0px 40px #aaa;
  }
  @media (max-width: 380px) {
    width : 300px;
  }
`

const Form =styled.form`
display : flex;
flex-direction : column;
`

const PersonalDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q7etagv', 'template_3cy4ws7', form.current, '1uj1xrlhTmyNdOLya')
      .then((result) => {
          console.log(result.text);
          alert("Successfuly Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <StyledForm>
      <Title>Let Us Know You</Title>
      <Description>We will reach as soon as possible please be cool.</Description>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="user_name" />
        <Label>Email</Label>
        <Input type="email" name="user_email" />
        <Label>Message</Label>
        <Textarea name="message" />
        <InputBlock>
        <InputTwo type="submit" value="Send" />
        </InputBlock>
        
      </Form>
    </StyledForm>
  );

  // return (
  //   <Container>
      // <Title>Let Us Know You</Title>
      // <Description>We will reach as soon as possible please be cool.</Description>
  //     <InputContainer>
  //     <Name placeholder="Name"/>
  //     <Phone placeholder="Phone Number"/>
  //     <Input placeholder="Your Email" />
  //     <Button>
  //       Send
  //     </Button>
  //     </InputContainer>
  //   </Container>
  // )
}

export default PersonalDetails
