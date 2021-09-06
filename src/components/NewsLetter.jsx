import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Receba notificações sobre seus produtos favoritos</Description>
            <InputContainer>
             <Input placeholder='seu email'/>
             <Button>
                 <Send/>
             </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
const Container = styled.div`
height: 60vh;
background-color:#fcf5f5 ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px; 
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom:20px;
`
const InputContainer = styled.div`
width: 50%;
height:40px;
background-color: white;

display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border:none;
padding-left: 20px;
flex:8;

&:focus{
    outline:none;
}
`
const Button = styled.button`
flex:2;
border:none;
background-color: teal;

`





