import React,{useState} from 'react'

const StateHooks = () => {
  const [names,setNames]=useState({name:"Saurav"})
  const [place,setPlace]=useState({city:"Ernakulam"})
  const clickHandler=()=>{
    setNames({name:"Appu"})
    setPlace({city:"Aluva"})
  }
  return (
    <>
    <div>StateHooks - {names.name} -{place.city}</div>
    <button onClick={clickHandler}>Refresh</button>
    </>
  )
}

export default StateHooks