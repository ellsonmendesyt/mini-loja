import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchStyled />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Elson.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <MenuItem><Badge badgeContent={4} color='primary' >
                <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
height:60px;
color:#333;
`


const Wrapper = styled.div`
 padding: 10px 20px ;
 display: flex;
 justify-content: space-between;
 align-items: center;

`
// ESQUERDA
const Left = styled.div`
flex:2;

display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor:pointer;
`

const SearchContainer= styled.div`
 border:0.1px solid lightgray;
 border-radius: 3px;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
`

const SearchStyled = styled(Search)`
  color:gray;
  font-size: 15px;
`;

const Input= styled.input`
border:none;

&:focus{
    outline:none;
}

`


// CENTRO
const Center = styled.div`
flex:2;
text-align:center;

`
const Logo = styled.div`
font-weight: bold;
`










// DIREITA
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;

`
const MenuItem = styled.div`
font-size: 14;
cursor:pointer; 
margin-left: 10px; //25
`
