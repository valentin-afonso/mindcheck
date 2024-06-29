import { updateTodo } from "@/app/actions";
import StarFull from "@/components/ui/svg/StarFull";
import StarEmpty from "@/components/ui/svg/StarEmpty";
import { Todo } from "@/app/model/TodoModel";

export default function FormImportantWithIcon({ item, onCreate }: any) {
  const important_value = item.important === "true" ? "false" : "true";
  const IconStar =
    item.important || item.important === "true" ? StarFull : StarEmpty;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const important_value = item.important === "true" ? "false" : "true";
    /*
    const formData = new FormData(e.target);
    await updateTodo(formData);
    if (onCreate) {
      onCreate();
    }
      */
    try {
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
        } else {
          throw new Error("No Todo found");
        }
      }
    } catch (err) {
      console.error("Error updating todo:", err);
    } finally {
      if (onCreate) {
        onCreate();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={item.id} />
      <input type="hidden" name="order" value={item.order} />
      <input type="hidden" name="status" value={item.status} />
      <input type="hidden" name="title" value={item.title} />
      <input type="hidden" name="desc" value={item.desc} />
      <input type="hidden" name="important" value={important_value} />
      <button type="submit">{IconStar && <IconStar />}</button>
    </form>
  );
}
