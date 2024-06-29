import { updateTodo } from "@/app/actions";
import { Todo } from "@/app/model/TodoModel";

export default function FormCheck({ item, onCreate }: any) {
  const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
  let button_text =
    item.status === "1" || item.status === 1
      ? "Mark as completed"
      : "Mark as to-do";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
    const formData = new FormData(e.target);

    try {
      /*
      const id = formData.get("id");
      const todo = {
        title: formData.get("title"),
        desc: formData.get("desc"),
        order: formData.get("order"),
        status: formData.get("status"),
        important: formData.get("important"),
      };
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const data = await response.json();
      console.log("Todo updated:", data);
      */
      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          const todo_to_update = localjson.find(
            (todo: Todo) => todo.id === item.id.toString()
          );
          if (todo_to_update) {
            todo_to_update.title = item.title;
            todo_to_update.desc = item.desc;
            todo_to_update.order = item.order;
            todo_to_update.status = status_value;
            todo_to_update.important = item.important;
            localStorage.setItem("todos", JSON.stringify(localjson));

            if (onCreate) {
              onCreate();
            }
            // saveTodos();
          } else {
            throw new Error("No Todo found");
          }
        }
      }
    } catch (err) {
      console.error("Error updating todo:", err);
    } finally {
      // revalidateTag("collection");
      if (onCreate) {
        onCreate();
      }
    }

    /*
    await updateTodo(formData);
    if (onCreate) {
      onCreate();
    }
      */
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={item.id} />
      <input type="hidden" name="order" value={item.order} />
      <input type="hidden" name="important" value={item.important} />
      <input type="hidden" name="title" value={item.title} />
      <input type="hidden" name="desc" value={item.desc} />
      <input type="hidden" name="status" value={status_value} />
      <button type="submit">{button_text}</button>
    </form>
  );
}
