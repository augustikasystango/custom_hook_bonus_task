import axios from "axios";
import { useEffect,useState } from "react";

function useGetTodos(getTodos,initialState=[]){

    const [todosData,setTodosData]=useState(initialState);
    const [isLoading,setIsLoading]=useState();
    const [errors,setErrors]=useState();

    const fetchTodo =async()=>{
        setIsLoading(true);
        const result = await getTodos();
        console.log(result,'--------rr');
        setTodosData(result || []);
    }
    useEffect(()=>{
       fetchTodo();
       setIsLoading(false);
    },[])

    return {todosData , isLoading ,errors}
    

}

export default useGetTodos;