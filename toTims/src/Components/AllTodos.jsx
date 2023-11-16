import React from 'react'

const AllTodos = (props) => {
    const { allTodos } = props;


  return (
    <div>
        {allTodos.map((todoObj) => (
            <span key={todoObj.id} >{todoObj.task}</span>
        ))}
    </div>
  )
}

export default AllTodos