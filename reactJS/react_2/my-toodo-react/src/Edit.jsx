import { useParams } from "react-router-dom";
import axious from "axios";
import { useEffect , useState } from "react";

const BASE_URL = "https://6858129321f5d3463e570313.mockapi.io/api/v1/todos"

function Edit(){
    const { id } = useParams()
    const [todo,setTodo] = useState({
        name :''
    })

async function fetchTodoById(todoId) {
    try {
      const response = await axious.get(
        `${BASE_URL}/${todoId}`
      );
      console.log(response);
      
      setTodo(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  
async function updateName(todoId) {
    try {
     await axious.put(
        `${BASE_URL}/${todoId}`
      ,{
        name: todo.name
      });

    } catch (error) {
      console.log("error", error);
    }
  };

  function handleNameChange(event){
    setTodo((previousState) => ({
        ...previousState,
        name : event.target.value
    }))
  }

  useEffect(() => {
    fetchTodoById(id)
  } , [id])

    return (
        <>
            <div>Hello Edit Page</div>
            <div>
                <input type="text" 
                onChange={handleNameChange}
                value={todo.name}/>
                {todo.status}
            </div>
            <button onClick={() => {updateName(id)}}>edit</button>
        </>
    )
}

export default Edit