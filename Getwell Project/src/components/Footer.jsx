
// import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display : flex;
`
const Left = styled.div`
    flex :1;
    display : flex;
    flex-direction : column;
    text-align : justify;
    padding : 20px;
    @media (max-width: 380px) {
     padding :0 5px;
      }
`
const Logo = styled.h1`
@media (max-width: 380px) {
    font-size : 20px;
  }
`
const Desc = styled.p`
    margin : 20px 0;
    @media (max-width: 380px) {
        font-size : 9px;
      }
`
// const SocialCont = styled.div`
//     display : flex;
// `

// const SocIcon = styled.div`
//     width : 40px;
//     height : 40px;
//     border-radius : 50%;
//     color : white;
//     background-color : #${props=>props.color};
//     display : flex;
//     align-items : center;
//     justify-content  center;
//     margin-right : 20px;
    
// `

const Center = styled.div`
    flex :1;
    padding : 20px;
    @media (max-width: 380px) {
        font-size : 9px;
        padding : 0 10px;
      }
`
const Title = styled.h3`
    margin-bottom : 30px;
    @media (max-width: 380px) {
        font-size : 10px;
      }
`
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;
`
const ListItem = styled.li`
    width : 50%;
    margin-bottom: 15px;
    @media (max-width: 380px) {
        font-size : 10px;
        width : 100%;
        margin-bottom : 5px;
      }
`

const Right = styled.div`
    flex :1;
    padding : 20px;
    @media (max-width: 380px) {
    padding : 0 10px;  
    }
`

const ContactItem = styled.div`
    margin-bottom : 20px;
    display : flex;
    align-items : center;
    @media (max-width: 380px) {
        font-size : 10px;
        margin-bottom : 5px;
      }
`

// const Payment = styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>GETWELL</Logo>
        <Desc>
            the he defined his story is muc better yhem mine so i told him to narrate tje another stor nd reach me back and so after day he came beck with the better story.
        </Desc>
        {/* <SocialCont >
            <SocIcon color='3b5999'>
                <Facebook/>
            </SocIcon>

            <SocIcon color='E4405F'>
                <Instagram/>
            </SocIcon>

            <SocIcon color='55ACEE'>
                <Twitter/>
            </SocIcon>

        </SocialCont> */}
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Achivements</ListItem>
                <ListItem>Traetments</ListItem>
                <ListItem>Gallery</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                {/* <Room style={{marginRight:"10px"}}/> */}
                Egmore - chennai 600002
            </ContactItem>
                
            <ContactItem>
                {/* <Phone style={{marginRight:"10px"}}/> */}
                +91 - 7010****56
            </ContactItem>

            <ContactItem>
                {/* <MailOutline style={{marginRight:"10px"}}/> */}
                contact @ Getwell@helpline.com
            </ContactItem>

        </Right>

    </Container>
  )
}

export default Footer
