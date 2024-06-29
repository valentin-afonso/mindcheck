import { updateTodo } from "@/app/actions";
import { Todo } from "@/app/model/TodoModel";

export default function FormImportant({ item, onCreate }: any) {
  const important_value = item.important === "true" ? "false" : "true";
  const button_text =
    item.important === "true" || item.important
      ? "Remove from important"
      : "Mark as important";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const important_value = item.important === "true" ? "false" : "true";
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
          todo_to_update.status = item.status;
          todo_to_update.important = important_value;
          if (typeof window !== "undefined") {
            localStorage.setItem("todos", JSON.stringify(localjson));
          }
          // saveTodos();
        } else {
          throw new Error("No Todo found");
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
      <input type="hidden" name="status" value={item.status} />
      <input type="hidden" name="title" value={item.title} />
      <input type="hidden" name="desc" value={item.desc} />
      <input type="hidden" name="important" value={important_value} />
      <button type="submit">{button_text}</button>
    </form>
  );
}
