import { styled } from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import { sliderItems as items } from '../../data'
import { mobile } from '../responsive'




const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}

`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: .5;
margin: auto;
z-index: 2;
`

const Wrapper = styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideindex * -100}vw);

`

const Slide = styled.div`
display:flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color:#${props => props.bg};
`

const ImgContainer = styled.div`
flex:1;
height: 100%;
padding: 20px;
`

const Image = styled.img`
height: 80%;
${mobile({ height: "50%" })}
`

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`




const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else (
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        )
    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}> <ArrowBackIosNewOutlinedIcon /></Arrow>
            <Wrapper slideindex={slideIndex}>

                {items.map((item) => {
                    return (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}><ArrowForwardIosOutlinedIcon /></Arrow>
        </Container>
    )



}
export default Slider
