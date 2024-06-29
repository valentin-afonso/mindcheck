import { deleteTodo } from "@/app/actions";
import { Todo } from "@/app/model/TodoModel";

export default function DeleteButton({ id, onCreate }: any) {
  const deleteItem = async () => {
    if (typeof window !== "undefined") {
      let localtodo = localStorage.getItem("todos");
      if (localtodo) {
        let localjson = JSON.parse(localtodo);
        localjson = localjson.filter((todo: Todo) => todo.id !== id.toString());
        localStorage.setItem("todos", JSON.stringify(localjson));
        if (onCreate) {
          onCreate();
        }

        // saveTodos();
      }
    }
    // todos = todos.filter((todo) => todo.id !== id.toString());
    /*
    await deleteTodo(id);

    if (onCreate) {
      onCreate();
    }
      */
  };
  return <button onClick={() => deleteItem()}>Delete task</button>;
}
