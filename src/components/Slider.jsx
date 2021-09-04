import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data';
const Slider = () => {

   const [slideIndex,setSlideIndex]=React.useState(0);

    const handleClick=(direction)=>{
     console.log(slideIndex)

     if(direction==='left'){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 ) //se nao for o primeiro volta, mas se for vai pro ultimo
     }
     else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1: 0) //se nao for o  ultimo avança, se for volta pro primeiro
     }


    }
    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}><ArrowLeftOutlined/></Arrow>
            <Wrapper slideIndex={slideIndex}>

            {
                sliderItems.map(item=>{
                    return(
                        <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                                <Image src={item.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>COMPRE AGORA</Button>
                            </InfoContainer>
                       </Slide>
                    )
                })
            }

               


            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}><ArrowRightOutlined/></Arrow>
        </Container>
    )
}

export default Slider

// bg='#f5fafd'  
const Container = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
/* background-color:coral; */

display: flex;
position:relative;
`

const Wrapper = styled.div`
 height:100%;
 display: flex;
 transform:translateX(${props=>props.slideIndex * -100}vw);
 
`;


const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #f5f7f7;  
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

position:absolute;
margin: auto;
top:0px;
bottom:0px;
left: ${props => props.direction==='left' && '10px'};
right: ${props => props.direction==='right' && '10px'};

opacity:1;
z-index:3;
&:hover{
    opacity:1;
}
`



const Slide = styled.div`
 display: flex;
 align-items: center;
 width: 100vw;
 height: 100vh;
 background-color: #${props=> props.bg};
 
 
`

const ImgContainer = styled.div`
height: 100%;

flex:1;

`

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`

const Title = styled.h1`
 font-size: 17px;
`
    

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor:pointer;
`


const Image = styled.img`

 height: 100%;
`