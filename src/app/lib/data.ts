import { Todo } from "@/app/model/TodoModel";

let todos: Todo[] = [];

// Initialiser les todos à partir du localStorage
export const loadTodos = () => {
  if (typeof window !== "undefined") {
    const todosFromStorage = localStorage.getItem("todos");
    if (todosFromStorage) {
      todos = JSON.parse(todosFromStorage);
    }
  }
};

// Sauvegarder les todos dans le localStorage
const saveTodos = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

// handlers
export const getTodos = () => {
  if (typeof window !== "undefined") {
    const todosFromStorage = localStorage.getItem("todos");
    if (todosFromStorage) {
      todos = JSON.parse(todosFromStorage);
    }
  }
  return todos;
};

export const getById = (id: number) => {
  return todos.find((todo) => todo.id === id.toString());
};

export const addTodo = (todo: Todo) => {
  console.log(typeof window);
  if (typeof window !== "undefined") {
    console.log("todoo !!!!!!!");
    let localtodo = localStorage.getItem("todos");
    if (localtodo) {
      let localjson = JSON.parse(localtodo);
      localjson.push(todo);
      localStorage.setItem("todos", JSON.stringify(localjson));
    } else {
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      // saveTodos();
    }
  }
};

export const deleteTodo = (id: number) => {
  todos = todos.filter((todo) => todo.id !== id.toString());
  saveTodos();
};

export const updateTodo = (
  id: string,
  title: string,
  desc: string,
  order: number,
  status: number,
  important: boolean
) => {
  const todo = todos.find((todo) => todo.id === id.toString());

  if (todo) {
    todo.title = title;
    todo.desc = desc;
    todo.order = order;
    todo.status = status;
    todo.important = important;
    saveTodos();
  } else {
    throw new Error("No Todo found");
  }
};
