type Todo = {
  id: string;
  title: string;
  desc: string;
  order: number;
  status: number;
  date: Date;
};

let todos: Todo[] = [];

// handlers
export const getTodos = () => todos;

export const getById = (id: number) => {
  return todos.find((todo) => todo.id === id.toString());
};

export const addTodo = (todo: Todo) => {
  todos.push(todo);
};

export const deleteTodo = (id: number) => {
  todos = todos.filter((todo) => todo.id !== id.toString());
};

export const updateTodo = (
  id: string,
  title: string,
  desc: string,
  order: number,
  status: number
) => {
  const todo = todos.find((todo) => todo.id === id.toString());

  if (todo) {
    todo.title = title;
    todo.desc = desc;
    todo.order = order;
    todo.status = status;
  } else {
    throw new Error("No Todo found");
  }
};
