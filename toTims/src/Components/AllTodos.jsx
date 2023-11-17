import React from 'react'

const AllTodos = (props) => {
    const { allTodos } = props;


  return (
    <div>
        {allTodos.map((todoObj) => (
            <div key={todoObj.id} >{todoObj.task}</div>
        ))}
    </div>
  )
}

export default AllTodos