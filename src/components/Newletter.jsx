import styled from '@emotion/styled';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { mobile } from '../responsive'


const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;

`

const Title = styled.h1`
font-size: 70px;

`



const Description = styled.p`
font-size: 24px;
font-weight: 300;
${mobile({ textAlign: 'center' })}
`

const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
`

const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color: white ;
cursor: pointer;

`


const InputContainer = styled.div`

width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
border:  1px solid lightgray;
${mobile({ width: '80%' })}
`




const Newletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button><SendOutlinedIcon /></Button>
            </InputContainer>
        </Container>
    )
}

export default Newletter
