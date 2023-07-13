import React from 'react'
import { styled } from 'styled-components'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive'
import { red } from '@mui/material/colors';





const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "10px 0px" })}
`
// !--------------------LEFT--------------------
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  `

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`
// !--------------------RIGHT--------------------
const Right = styled.div`
  flex:1;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

// !--------------------CENTER--------------------
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`

const Center = styled.div`
  flex:1;
  text-align: center;
`


// !--------------------NAVBAR--------------------
const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left >
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchSharpIcon style={{ color: 'gray', fontSize: "16px" }} />
                    </SearchContainer>
                </Left>

                <Center ><Logo>MAAZ.</Logo></Center>


                <Right >
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
