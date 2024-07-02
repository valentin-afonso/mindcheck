import { updateTodo } from "@/app/actions";
import StarFull from "@/components/ui/svg/StarFull";
import StarEmpty from "@/components/ui/svg/StarEmpty";
import { Todo } from "@/app/model/TodoModel";
import { useTodoForm } from "@/app/hooks/useTodoForm";

export default function FormImportantWithIcon({ item, onCreate }: any) {
  const { updateItem } = useTodoForm(onCreate);
  const important_value = item.important === "true" ? "false" : "true";
  const IconStar =
    item.important || item.important === "true" ? StarFull : StarEmpty;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const important_value = item.important === "true" ? "false" : "true";
    const updatedData = {
      title: item.title,
      desc: item.desc,
      order: item.order,
      status: item.status,
      important: important_value,
    };

    updateItem(item, updatedData);
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
