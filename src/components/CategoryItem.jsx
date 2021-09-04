import React from 'react'
import styled from 'styled-components'

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
            </Info>
                
        </Container>
    )
}

export default CategoryItem

const Container = styled.div`
margin: 3px;
 flex:1;
height: 70vh;
position: relative;

`

const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;

width: 100%; 
 height:100%;
top:0px;
left:0px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 
`
const Title = styled.h1`
 color:#fff;
 margin-bottom: 20px;
`
const Button = styled.button`
 border:none;
 padding: 10px;
 background-color: #fff;
 color:gray;
 cursor: pointer;
 font-weight: 600;
` 