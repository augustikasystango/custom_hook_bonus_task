import { useEffect, useState } from "react";



function usePostTodos(addTodos, initialState = '') {
    const [isLoading, setIsLoading] = useState();
    const [addNewData, setAddNewData] = useState(initialState);
    const [errors, setErrors] = useState();

    const postTodos = async (newTodo) => {
        setIsLoading(true);
        try {
            const newData = await addTodos(newTodo);
            console.log(newData);
            setAddNewData({todos:newData});
            setIsLoading(false);
        }
        catch (error) {
            console.log(error, `--error in post`);
            setErrors(error);
            
        }
        finally{
            setIsLoading(false);
        }
    }



    return  {isLoading , errors , addNewData ,postTodos}
}


export default usePostTodos; 