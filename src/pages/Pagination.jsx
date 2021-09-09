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
    
   const [pageNumberLimit,setPageNumberLimit]=React.useState(5);
   const [maxPageNumberLimit,setMaxPageNumberLimit]=React.useState(5);
   const [minPageNumberLimit,setMinPageNumberLimit]=React.useState(0);



    const handleClick= (e)=>{
     setCurrentPage(Number(e.target.id));
    }
    //mostrar os numeros das paginas
    const showPageNumbers = pages.map((number)=>{
   
       if( number> minPageNumberLimit && number< maxPageNumberLimit+1 ){

        return(
            <PagiNumber   
            number={number}
            key={number+'a'} 
            id={number} 
            currentPage={currentPage}
            onClick={handleClick} >
                {number}
            </PagiNumber>   
        )
       }else{
           return null;
       }
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
              <div key={i+'c'}>
                  {item.name.first}
              </div>
          )
      })
  }


  const handleNextButton=()=>{
      setCurrentPage(currentPage+1);
      if(currentPage+1 > maxPageNumberLimit){
          setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit); 
      }
  }

 const handlePrevButton = ()=>{
     setCurrentPage(currentPage-1);

     if((currentPage-1 )% pageNumberLimit==0){
         setMinPageNumberLimit(minPageNumberLimit- pageNumberLimit);
         setMaxPageNumberLimit(maxPageNumberLimit- pageNumberLimit);
     }
 }

    return (
        <Container>
            <Title>Usuarios</Title>
            {
             showData(currentItems)
            }
            <PagiContainer>
                <Button>
                <button disabled={currentPage==pages[0]} onClick={handlePrevButton}>prev</button>
                </Button>
                {showPageNumbers}
                <Button onClick={handleNextButton}>
                <button disabled={currentPage==pages[pages.length-1]}>next</button>
                </Button>
            </PagiContainer>
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
 background-color: ${(props)=>props.currentPage === props.id ? 'royalblue': null};
 user-select: none;
 
`
const Button = styled.div`
cursor:pointer;
/* padding:8px 4px; */
border:1px solid #D1D7DC;
transition:all .4s ease;
& button{
    cursor:pointer;
    border: none;
    background-color: transparent;
    padding:0px 4px;
    height:100%;
    width:100%;

}

& button:disabled{
    background-color:lightgray;
    cursor:not-allowed;

}

`


