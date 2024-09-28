import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchTodo } from "../store/useFetch";

const Todos = () => {
  const state = useFetchTodo((state) => state);
  const { todo, fetchTodo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4">
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        {todo?.length > 0 ? (
          <ul className="space-y-2">
            {todo.map((item) => (
              <li key={item.id} className="border-b py-2">
                {item.todo}
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-red-500">No todos available</h1>
        )}
      </div>
    </div>
  );
};

export default Todos;
