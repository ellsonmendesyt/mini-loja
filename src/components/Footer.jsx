import { Facebook,Instagram,Twitter,Pinterest, RoomOutlined, PhoneOutlined,  MailOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <Container>
            <Left>
              <Logo>ELSON.</Logo>
              <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa voluptas similique repudiandae sint saepe dolor debitis atque consectetur officia.
              </Description>
              <SocialContainer>
                  <SocialIcon color="3B5999" ><Facebook /></SocialIcon>
                  <SocialIcon color="E4405F"><Instagram  /></SocialIcon>
                  <SocialIcon color="55ACEE"><Twitter  /></SocialIcon>
                  <SocialIcon color="E60023"><Pinterest  /></SocialIcon>
                  
              </SocialContainer>
            </Left>
            <Center>
              <Title>Links Uteis</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man fashion</ListItem>
                  <ListItem>Woman fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order tracking</ListItem>
                  <ListItem>Whishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
            </Center>
            <Right>
             <Title>Contato</Title>
             <ContactItem>
               <RoomOutlined /> 678 Rua 16,  Timon Maranhão
             </ContactItem>
             <ContactItem>
                <PhoneOutlined/> (86) 99999-4433
             </ContactItem>
             <ContactItem>
               <MailOutlined/> elsonmendes@gmail.com
             </ContactItem>
             <Payment src= "./imgs/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer

const Container= styled.div`
display: flex;

`
// LEFT
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
margin: 20px 0;
`

const SocialContainer= styled.div`
display: flex;

`

const SocialIcon= styled.div`
width: 40px;
height: 40px;
color:#fff;
background-color:#${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
border-radius:50%;
margin-right: 20px;
`
// CENTER
const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`
const ListItem= styled.li`
width: 50%;
margin-bottom: 10px;
`

// RIGHT
const Right = styled.div`
flex:1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-content: center;
& > *{
  margin-right: 10px;
}
`
const Payment= styled.img`
width:60%;
`
