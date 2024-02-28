
import { useState } from 'react';
import './App.css';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
//extract todo from backend and give it a state
function App() {
  const[state,setState]=useState("")
  fetch("http://localhost:3000/todo")
  .then(async function(res){
    const json=await res.json
    setState(json.todo)
  })
  return (
    <div className="App">
      <CreateTodo/> 
      <Todo todo={state}/>
    </div>
  );
}

export default App;
