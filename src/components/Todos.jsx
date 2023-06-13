import React from 'react'
import Todo from './Todo';

function Todos({todos , toggleDone , deleteTodo , editTodo , mode}) {

 
  return (
    <div className='todos-list'>
     
     {todos.length === 0 && <h2 className='no-todos'>لا يوجد مهام حالية</h2> }
    {todos.map(todo => (
      <Todo mode={mode} editTodo={editTodo} deleteTodo={deleteTodo} toggleDone={toggleDone} todo ={todo} key ={todo.id}  />
    ))}
     
     
    </div>
  )
}

export default Todos
