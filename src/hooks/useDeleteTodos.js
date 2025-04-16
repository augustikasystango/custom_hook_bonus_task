
import { useState } from "react";

function useDeleteTodos(deleteTodos, initialState) {


    const [isDeleting, setIsDeleting] = useState();
    const [errors, setErrors] = useState();
    const [filteredData, setFilteredData] = useState(initialState);


    const deleteThisTodo = async ({id}) => {
        setIsDeleting(true);
        try {
            const deletedData = await deleteTodos(id);
            setFilteredData(deletedData);
            setIsDeleting(false);
        } catch (error) {
            console.log(error, '---error in delete');
            setErrors(error);
        } finally {
            setIsDeleting(false);
        }
    }

    return { isDeleting, filteredData, errors ,deleteThisTodo};
}

export default useDeleteTodos;