import React from 'react'
import styled from 'styled-components'
const Announcements = () => {
    return (
        <Container>
            <p> Super Oferta! Frete grátis em compras a partir de R$ 50.<sup style={{ fontSize:'11px' }}> 00</sup></p>
        </Container>
    )
}

export default Announcements


const Container = styled.div`
height: 30px;
background-color: teal;
color:#fff;
font-size: 14px;
font-weight: 500;

display: flex;
align-items: center;
justify-content: center;
`
