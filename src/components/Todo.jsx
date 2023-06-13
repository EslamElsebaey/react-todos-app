import React from 'react'
import FeatherIcon from 'feather-icons-react';

function Todo({todo , toggleDone , deleteTodo , editTodo , mode}) {
  return (
    <div className={`todos-todo ${todo.done ? `done` : ``} ` } >
      <div className="todos-todo_icon" onClick={()=>toggleDone(todo.id)}>  <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />   </div>
      <div className="todos-todo_text"> {todo.title}</div>
      {mode !== "edit" ? (  <div className="todos-todo_cta">  
      <div className="todos-todo_cta-edit" onClick={ ()=> editTodo(todo)}>
      <FeatherIcon icon="edit" size="22" />
      </div>
      <div onClick={()=> deleteTodo(todo.id)} className="todos-todo_cta-delete">
      <FeatherIcon icon="trash-2" size="22" />
      </div>
      </div>) : ""}
    
    </div>
  )
}

export default Todo
