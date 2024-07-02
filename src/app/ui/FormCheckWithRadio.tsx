import { updateTodo } from "@/app/actions";
import RadioChecked from "@/components/ui/svg/RadioChecked";
import RadioUnchecked from "@/components/ui/svg/RadioUnchecked";
import { Todo } from "@/app/model/TodoModel";
import { useTodoForm } from "@/app/hooks/useTodoForm";

export default function FormCheckWithRadio({ item, onCreate }: any) {
  const { updateItem } = useTodoForm(onCreate);
  const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
  const IconRadio =
    item.status === 1 || item.status === "1" ? RadioUnchecked : RadioChecked;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
    const updatedData = {
      title: item.title,
      desc: item.desc,
      order: item.order,
      status: status_value,
      important: item.important,
    };

    updateItem(item, updatedData);
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
