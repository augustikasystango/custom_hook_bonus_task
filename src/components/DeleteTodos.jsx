import React from 'react';
import useDeleteTodos from '../hooks/useDeleteTodos';
import { deleteTodos } from '../apiService/crud';




const DeleteTodos = (id) => {

    const { isDeleting, filteredData, errors, deleteThisTodo } = useDeleteTodos(deleteTodos, []);

    const handleDelete = () => {
        deleteThisTodo(id);

    }



    return (

        <div>
            <button onClick={handleDelete} disabled={isDeleting}>{isDeleting ? "Deleting" : "Delete"}</button>
            {errors && <p>Error deleting todo.</p>}
        </div>
    )
}

export default DeleteTodos
