import React from 'react'
import styled from 'styled-components'
import axios from 'axios';


const Pagination = () => {

    const [data,setData]=React.useState([])

    // pagination
    const [currentPage,setCurrentPage]=React.useState(1);
    const [itemsPerPage,setItemsPerPage]=React.useState(5);
    const pages = [];
    //1 - 10   cria dez paginas
    for(let i=1;i<=Math.ceil(data.length/itemsPerPage);i++){
      pages.push(i);
    }

  
    const indexOfLastItem = currentPage * itemsPerPage;
  
    const indexOfFirstItem = indexOfLastItem-itemsPerPage;

    const currentItems= data.slice(indexOfFirstItem,indexOfLastItem);
    
    const handleClick= (e)=>{
     setCurrentPage(e.target.id);
    }
    //mostrar os numeros das paginas
    const showPageNumbers = pages.map((number)=>{
        return(
            <PagiNumber key={number} id={number} onClick={handleClick} >{number}</PagiNumber>
        )
    })


    const fetchData = async ()=>{
        const response =await axios('https://randomuser.me/api/?results=50'); 
        const {results}=response.data;
        setData(results);
    }
    React.useEffect(()=>{
        fetchData();
        
    },[])


  const showData=(data)=>{

      return data.map((item,i)=>{
          return(
              <div key={i}>
                  {item.name.first}
              </div>
          )
      })
  }


    return (
        <Container>
            <Title>Usuarios</Title>
            <PagiContainer>
                {showPageNumbers}
            </PagiContainer>
            {
             showData(currentItems)
            }
        </Container>
    )
}

export default Pagination
const Container= styled.div`
 width:95%;
 height:80vh;
 margin: 10px 20px;
 border: 0.5px solid #D1D7DC;
 padding: 30px 20px;
`
const List = styled.ul`
list-style: none;

`
const ListItem = styled.li`

`

const Title = styled.h3`
 text-align: center;
 font-size: 24px;
 font-weight: 600;
 color:#311D1F;
`

const PagiContainer= styled.ul`
 list-style: none;
 display: flex;
`
const PagiNumber = styled.li`
 padding: 10px;
 border:1px solid #D1D7DC;
 cursor: pointer;
`

