import React, { createContext, useEffect, useState } from 'react'
import Type from './Type';
import './App.css'
import Exercise from './Exercise';
import All from './All';
import Header from './Header';

export const exerciseContext = createContext();

function App() {



  const [type,setType] = useState([]);
  const [data,setData] = useState([]);
  const [part,setPart] = useState("all");
  const[searchText,setSearchText] = useState("");


  useEffect(() => {
    if(searchText != ""){
      search()
    }
  }, [searchText]);


  function search() {
    setData(
      data.filter((da) => {
        if (da.name.toLowerCase().includes(searchText.toLowerCase())) return da;
      })
    );
  }

  useEffect(()=>{
    console.log(part);
    setPart(part)
    find()
  },[part])


useEffect(()=>{
  async function get(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
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
      setType(result)
    } catch (error) {
      console.error(error);
    }
} 

  get();
},[])

async function find(){
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=10&offset=0`
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
     setData([...result]);
} catch (error) {
    console.error(error);
}
}






  return (
    <>
  <Header/>
  <div id="main">
      <h1>Awesome Exercises You Should Know</h1>
      <div id="search">
        <input type="text" placeholder='Search Exercises' value={searchText} onChange={(e)=>{
          setSearchText(e.currentTarget.value)
        }}></input>
      </div>
    <div id="type">
      <exerciseContext.Provider value ={{data,setData}} >
      <All/>
      </exerciseContext.Provider>
     
     
     <exerciseContext.Provider value ={{part,setPart}} >
       {
      type.map((e)=>{
       return<Type name={e}/>
        })
      }
      </exerciseContext.Provider>
    </div>

    <div id="result">
      <h1>Showing result for {part}</h1>
        <exerciseContext.Provider value ={{data,setData}} >
        <Exercise/>
        </exerciseContext.Provider>
    </div>
    </div>
    </>
  )
}

export default App