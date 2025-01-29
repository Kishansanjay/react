import { useState } from 'react';

import './App.css'

function App() {
  let [counter, updatedValue] = useState(5)
  const style = {
    color: 'white',
    fontSize: 20
  };
  const addValue = () =>{
    if (counter >= 20){
      counter = 20
    }
    else{
      updatedValue(counter + 1)   
    }
  }
  
  const removeValue = () =>{
    if (counter <= 0){
      counter = 0
    }
    else{
      updatedValue(counter - 1)   
    }
  }
  console.log("counter number", counter);

  return (
    <>
       <h1>Counter number</h1>
       <h2>count the number: {counter} </h2>
       <button onClick={addValue} style={style}>Add Number {counter} </button>
       <br />
       <br />
       <button onClick={removeValue} style={style}>Remove Value {counter}</button>
    </>
  )
}

export default App
