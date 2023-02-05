import styled from "styled-components"

const Container =styled.div`
height :30px;
background-color :  teal;
color :white;
display: flex;
align-items : center;
justify-content : center;
font-size :14px;
font-weight:500;

@media (max-width: 380px) {
  display : none;
}

`
const Announcement = () => {
  return (
    <div>
      <Container>
        50% Off For your 1st Appointment.. Hurry Up!!
      </Container>
    </div>
  )
}

export default Announcement
