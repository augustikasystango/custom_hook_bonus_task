import React, { useState } from 'react'
import usePostTodos from '../hooks/usePostTodos';
import { addTodos } from '../apiService/crud';

const AddTodos = () => {
  const [inputTodo, setInputTodo] = useState('');

  const { isLoading, errors, addNewData, postTodos } = usePostTodos(addTodos, '');


  const handleSubmit = (e) => {
    e.preventDefault();
    postTodos({ todos: inputTodo });
    setInputTodo('');
  }

  if (errors)
    return <p>Errors in post...</p>
  return (
    <div>
      {isLoading ? <p>Adding todo</p> :
        <form onSubmit={handleSubmit}>
          <input placeholder='Add a todo' type='text' onChange={(e) => setInputTodo(e.target.value)} />
          <button type='submit' >{isLoading ? "Adding" : "Add"}</button>
        </form>}

    </div>

  )
}

export default AddTodos
