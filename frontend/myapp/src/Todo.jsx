//renders all the task put into the input

import React from 'react'

const Todo = ({todo}) => {   //extract from array in backend and map each value, it just shows how it should be displayed
  // const todos = todo || [];
  return (
    <div className='todo'>

    {todo.map(function(todos){
        return(
        <div>
<span>{todos.title}</span>
<span>{todos.description}</span>
<button>{todos.completed === true ? "Completed" :"Mark as Complete"}</button>
        </div>
        )
    })}
    <span></span>
    </div>
  )
}

export default Todo
