import React from 'react';
import useDeleteTodos from '../hooks/useDeleteTodos';
import { deleteTodos } from '../apiService/crud';




const DeleteTodos = (id) => {

    const { isDeleting, filteredData, errors, deleteThisTodo } = useDeleteTodos(deleteTodos, []);

    const handleDelete = () => {
        deleteThisTodo(id);
        console.log(id);
    }


    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteTodos
