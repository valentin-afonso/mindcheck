import { updateTodo } from "@/app/actions";

export default function FormCheck({ item, onCreate }: any) {
  const status_value = item.status === "1" || item.status === 1 ? 2 : 1;
  const button_text =
    item.status === "1" || item.status === 1
      ? "Mark as completed"
      : "Mark as to-do";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await updateTodo(formData);
    if (onCreate) {
      onCreate();
    }
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
