import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axious from "axios";
import "./App.css";

const BASE_URL = "https://6858129321f5d3463e570313.mockapi.io/api/v1/todos"

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading , setIsLoading] = useState(true)

  async function fetchTodo() {
    try {
      const response = await axious.get(
        `${BASE_URL}`
      );
      setTodos(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  };

  async function deleteTodo(id) {
    try {
      setIsLoading(true)
      await axious.delete(
        `${BASE_URL}/${id}`
      );
      fetchTodo()
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
    {
      isLoading && <div>Loading...</div>
    }
    { !isLoading && 
      <div>
        {
        todos.map((todo, index) => 
           (
            <div key={index}>
              {todo.id} {todo.name} {todo.status}
              <Link to={`/todo/${todo.id}`}>
                <button>Edit</button>
              </Link>
              
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          )
        )
    }
      </div>
}
    </>
  );
}

export default App;
