import React from 'react';
import { updateTodos } from '../apiService/crud';
import useUpdateTodos from '../hooks/useUpdateTodos';

const UpdateTodos = () => {

    const {}=useUpdateTodos(updateTodos);
  return (
    <div>
      
    </div>
  )
}

export default UpdateTodos
