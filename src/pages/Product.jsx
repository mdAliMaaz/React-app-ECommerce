import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``


const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ flexDirection: "column", padding: '10px' })}
`
const ImageContainer = styled.div`
flex:1;
`


const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: '40vh' })};
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: '10px' })}
`
const Title = styled.h1`
font-weight: 200;
${mobile({ fontSize: '24px' })};
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-size: 40px;
font-weight: 200;
`
const FilterContainer = styled.div`
display: flex;
width: 50%;
margin: 30px 0px;
justify-content: space-between;
${mobile({ width: "100%" })}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin:0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOptions = styled.option`

`
const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
${mobile({ width: "100%" })}
`


const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
`



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                </ImageContainer>
                <InfoContainer>
                    <Title> Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nulla nam sunt autem a porro dolorum ullam cum officia temporibus!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>


                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOptions>XL</FilterSizeOptions>
                                <FilterSizeOptions>S</FilterSizeOptions>
                                <FilterSizeOptions>M</FilterSizeOptions>
                                <FilterSizeOptions>XL</FilterSizeOptions>
                                <FilterSizeOptions>L</FilterSizeOptions>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
