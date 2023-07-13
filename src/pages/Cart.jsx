import { styled } from 'styled-components'

import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'






const Container = styled.div``


const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: '10px' })}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding:20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type == 'filled' && "none"};
background-color: ${props => props.type == 'filled' ? "black" : "transparent"};
color: ${props => props.type == 'filled' && "white"};
`
const TopTexts = styled.div``

const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0 10px;
${mobile({ display: 'none' })}
`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: 'column' })}

`


const Info = styled.div`
flex:3;
`

const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({ flexDirection: 'column' })}


`

const ProductDetails = styled.div`
flex:2;
display: flex;
`

const ProductName = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50px;
background-color: ${props => props.color};
`

const ProductId = styled.span``

const ProductSize = styled.div``

const Details = styled.div`
padding: 20px;;
display: flex;
flex-direction: column;
justify-content: space-around;
`


const PriceDetails = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const Image = styled.img`
width: 200px;
`


const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: '20px' })}
`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: '5px 15px' })}

`


const HR = styled.hr`
background-color:#eee;
border: none;
height: 1;
`

const Summary = styled.div`
flex:1;
border:  .5px solid lightgray;
border-radius: 5px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin:  30px 0px;
display: flex;
justify-content: space-between;
font-weight:${props => props.type == "total" && "500"};
font-size:${props => props.type == "total" && "24px"}
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight:600;
border:none;
`




const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText >Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECK OUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHFPn0LU_ANvWYrSWb1MrgOko8Ei6FYlvZrrKpsCfPdwp5f3X6DZQ1EJ9JSgLJKjAWNxTzggWyKFsvNWBJ-CCLTLrvugvCiENLL0z42FVeRwbVHtTJ5tei" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUMDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>123456</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size</b> 37</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$456</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <HR />
                        <Product>
                            <ProductDetails>
                                <Image src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKGmGGvDxkR7VifsIGUnH7L_gt-eSK3JP8MNBfwppyjIKIwRE8Mp1_zbe-5qH0rnCPPr0brwl66oBvR679dQNV8SyH8esKJIw7P2mZ7d-ShcpCrXZJ7TdS" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUMDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>123456</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size</b> 37</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$456</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 40</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Chechout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
