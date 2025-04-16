import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTodos } from '../apiService/crud';
import useGetTodos from '../hooks/useGetTodos';
import AddTodos from './AddTodos';

const Todos = () => {

    const {todosData,isLoading ,errors}=useGetTodos(getTodos,[]);


  return (
    <div>
        <AddTodos/>

        {isLoading && <p>Loading todos ....</p> }
        
      {
        todosData.map((todo)=>(<ul key={todo.id}>
            <li>{todo.todos}</li>
        </ul>))
      }
    </div>
  )
}

export default Todos
