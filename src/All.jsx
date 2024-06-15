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
            'x-rapidapi-key': '2f0689f04bmshd16ce51ece689fap141071jsn08047b40367b',
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
    <div id="all">
    <button id="type-inner" onClick={()=>{
       all();  
       }}>
        <h1><i class="fa-solid fa-dumbbell"></i></h1>
        <h1>All</h1>
        </button> 
        </div>
 )
}

export default All