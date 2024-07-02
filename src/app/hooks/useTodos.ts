import { useState, useEffect } from "react";
import { Todo } from "@/app/model/TodoModel";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const fetchTodos = () => {
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      setTodos(JSON.parse(sessionData));
    }
  };

  const saveTodos = (updatedTodos: Todo[]) => {
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    refreshTodos: fetchTodos,
    saveTodos,
  };
};
