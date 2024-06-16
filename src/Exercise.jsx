import React, { useContext, useEffect } from 'react'
import { exerciseContext } from './App';


function Exercise() {

const{data}=useContext(exerciseContext);
// console.log(data)
  return (
       <div id ="exercise">
           {
            data.map((arr)=>{
              return(
              <div id="exercise-inner">
              <img src={arr.gifUrl}></img> 
               <div  id="muscles">
                  {arr.secondaryMuscles.map((d)=>{
                    return(
                            <p id="muscle">{d}</p>      
                        )
                  })}
               </div>
               <p id="exer-name">{arr.name}</p>
               </div>
              )
            })
           }
       </div>
  )
}

export default Exercise