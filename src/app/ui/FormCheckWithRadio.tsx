import { updateTodo } from "@/app/actions";
import RadioChecked from "@/components/ui/svg/RadioChecked";
import RadioUnchecked from "@/components/ui/svg/RadioUnchecked";
import { Todo } from "@/app/model/TodoModel";

export default function FormCheckWithRadio({ item, onCreate }: any) {
  const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
  const IconRadio =
    item.status === 1 || item.status === "1" ? RadioUnchecked : RadioChecked;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
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
          todo_to_update.status = status_value;
          todo_to_update.important = item.important;
          if (typeof window !== "undefined") {
            localStorage.setItem("todos", JSON.stringify(localjson));
          }
          if (onCreate) {
            onCreate();
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
    /*
    const formData = new FormData(e.target);
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
      <button type="submit">{IconRadio && <IconRadio />}</button>
    </form>
  );
}
