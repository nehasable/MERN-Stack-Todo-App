import React from 'react'

const CreateTodo = () => {
  return (
    <div className='task'>
      <input type="text" placeholder='Add Task' /><br />
      <input type="text" placeholder='Add description' /><br />
      <button className="Add">Add</button>
    </div>
  )
}

export default CreateTodo
