import React, { useContext, useEffect } from 'react'
import { exerciseContext } from './App';

function Type({name}) {

  const{setPart}=useContext(exerciseContext);
  return (
       <button id="type-inner" onClick={()=>{
        setPart(name)
        // find()
       }}>
        <h2 id="dumb"><i class="fa-solid fa-dumbbell"></i></h2>
        <h2 id="name">{name}</h2>
        </button>
  )
}

export default Type