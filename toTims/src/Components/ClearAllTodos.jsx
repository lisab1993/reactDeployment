import React from 'react'

export const ClearAllTodos = (props) => {
    const { clearAllTodos } = props;
    
  return (
    <button onClick={clearAllTodos} >Clear All Todos</button>
  )
}
