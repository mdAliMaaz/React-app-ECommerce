import React from 'react'
import { styled } from 'styled-components'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
padding:  20px;
${mobile({ flexDirection: 'column' })}

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 20px;
`
const Center = styled.div`
flex: 1;
${mobile({ display: 'none' })}

`
const Title = styled.h2`
margin-bottom: 30px;


`
const List = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;

`
const ListItem = styled.li`
list-style: none;
cursor: pointer;
width: 50%;
margin-bottom: 10px;
`


const Right = styled.div`
flex:1;
${mobile({ marginTop: '20px', backgroundColor: '#fcf5f5' })}
`

const Logo = styled.h1`

`
const Description = styled.p`

`
const SocialContainer = styled.div`
display: flex;
gap: 20px;


`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.bg};
display: flex;
justify-content: center;
align-items: center;
`
const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MAAZ.</Logo>
                <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error repellendus labore earum mollitia, totam unde odit maxime consequatur.</Description>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <FacebookOutlinedIcon />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <WhatshotIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOnIcon style={{ marginRight: '10px' }} />Bangalore,Vijayanagara.</ContactItem>
                <ContactItem><LocalPhoneIcon style={{ marginRight: '10px' }} />8217683972</ContactItem>
                <ContactItem><AlternateEmailIcon style={{ marginRight: '10px' }} />alimaazali6@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
