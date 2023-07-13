import React from 'react'
import { styled } from 'styled-components'



const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
align-items: center;
display: flex;
justify-content: center;
font-size: 14px;
font-weight: 500;
`
const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 500₹
        </Container>
    )
}

export default Announcement
