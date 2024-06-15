import React, { useContext, useEffect } from 'react'
import { exerciseContext } from './App';

function Type({name}) {

  const{setPart}=useContext(exerciseContext);
  return (
       <button id="type-inner" onClick={()=>{
        setPart(name)
        // find()
       }}>
        <h1><i class="fa-solid fa-dumbbell"></i></h1>
        <h1>{name}</h1>
        </button>
  )
}

export default Type