import { useTodoForm } from "@/app/hooks/useTodoForm";

export default function FormImportant({ item, onCreate }: any) {
  const { updateItem } = useTodoForm(onCreate);
  const important_value = item.important === 1 ? 0 : 1;
  const button_text =
    item.important === 1 ? "Remove from important" : "Mark as important";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

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
      <button type="submit">{button_text}</button>
    </form>
  );
}
