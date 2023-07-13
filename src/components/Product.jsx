import React from 'react'
import { styled } from 'styled-components'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
background: rgba(0,0,0,.2);
transition: all 400ms ease;
cursor: pointer;
`


const Container = styled.div`
flex: 1;
margin: 5px;
min-width:280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`

const Image = styled.img`
height: 75%;
z-index: 2;
`



const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
transition: all 400ms ease;

&:hover{
background-color: #e9f5f5;
transform: scale(1.1);

}
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color: white;
position: absolute;
`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <AddShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product


