type Todo = {
  id: string;
  title: string;
  desc: string;
  order: number;
  status: number;
  date: Date;
};

let todos: Todo[] = [
  {
    id: "145245",
    title: "my first todo",
    desc: "this is a description...",
    order: 1,
    status: 1,
    date: new Date(),
  },
  {
    id: "1452487",
    title: "my second todo",
    desc: "this is a description...",
    order: 2,
    status: 1,
    date: new Date(),
  },
  {
    id: "1452149",
    title: "my third todo",
    desc: "this is a description...",
    order: 3,
    status: 1,
    date: new Date(),
  },
];

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
