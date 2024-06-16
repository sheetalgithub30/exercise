import React, { useContext, useEffect } from 'react'
import { exerciseContext } from './App';

function All() {
    useEffect(()=>{
        all();
    },[])

 const{setData}=useContext(exerciseContext);

  async function all(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd30b549b5cmsh39886e10e7446e6p1ebc4bjsnfc5d815c7e96',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        setData(result)
    } catch (error) {
        console.error(error);
    }
  }



  return (
    <button id="type-inner" onClick={()=>{
       all();  
       }}>
        <h2 id="dumb"><i class="fa-solid fa-dumbbell"></i></h2>
        <h2 id="name">All</h2>
        </button> 
 )
}

export default All