import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Product = () => {
    return (
        <Container>
            <Announcements/>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?
                    </Desc>
                    <Price>R$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>SM</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer />
        </Container>
    )
}

export default Product
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImageContainer = styled.div`
flex:1;
padding: 0 50px;
`
const Image = styled.img`
width:100%;
height:90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
`

const Title =styled.h1`
font-weight: 200;
` 


const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px; 
`

const FilterContainer   = styled.div`
width:50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
`

const Filter            = styled.div`
display: flex;
align-items: center;

`

const FilterTitle       = styled.span`
font-size: 20px;
font-weight: 200; 
`

const FilterColor       = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin:0 5px;
cursor:pointer;
`

const FilterSize        = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption  = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal; 
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 500;
cursor:pointer;
transition:all .3s ease;
&:hover{
    background-color:teal ;
    color:#fff;
}
`
