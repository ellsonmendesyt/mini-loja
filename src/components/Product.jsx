import { ShoppingCartOutlined,SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Product = ({item}) => {
    return (
        <Container>
          <Circle/>
           <Image src={item.img} /> 
           <Info>
               <Icon ><ShoppingCartOutlined /></Icon>
               <Icon ><SearchOutlined /></Icon>
               <Icon ><FavoriteBorderOutlined /></Icon>
           </Info>
        
        </Container>
    )
}

export default Product


const Info = styled.div`
opacity:0;
background-color: rgba(0,0,0,0.2);
width: 100%;
height: 100%;
position:absolute;
top:0;
left:0;
z-index: 2;

display: flex;
justify-content: center;
align-items: center;
transition:all .4s ease-in-out;
cursor:pointer;
`

const Container = styled.div`
flex:1;
margin: 5px;
align-items: center;
justify-content: center;
min-width:280px;  
height: 350px;
background-color: #f5fbfd;
/* background-color: salmon; */
position:relative;

&:hover ${Info}{
    opacity:1;
}


`
const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: white;
 position: absolute;
 z-index: 2;

`


const Icon = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 50%;
margin: 10px;
transition:all .5s ease;

&:hover{
    background-color: #e9f5f5;
    transform:scale(1.1)
}
`

const Image= styled.img`
 height:75%;
 position:absolute;
 z-index: 2;

`
