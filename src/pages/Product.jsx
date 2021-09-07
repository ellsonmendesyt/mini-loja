import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

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

const Wrapper = styled.div``
const InfoContainer = styled.div``

const ImageContainer = styled.div``
const Image = styled.img``

const Title =styled.h1``
const Desc = styled.p``
const Price = styled.span`
`
