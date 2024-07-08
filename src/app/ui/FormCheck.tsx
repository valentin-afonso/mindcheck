import { useTodoForm } from "@/app/hooks/useTodoForm";
import AcionsChecked from "@/components/ui/svg/AcionsChecked";

export default function FormCheck({ item, onCreate }: any) {
  const { updateItem } = useTodoForm(onCreate);
  const status_value = item.status === 1 ? 2 : 1;
  let button_text = item.status === 1 ? "Mark as completed" : "Mark as to-do";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="flex-grow">
      <input type="hidden" name="id" value={item.id} />
      <input type="hidden" name="order" value={item.order} />
      <input type="hidden" name="important" value={item.important} />
      <input type="hidden" name="title" value={item.title} />
      <input type="hidden" name="desc" value={item.desc} />
      <input type="hidden" name="status" value={status_value} />
      <button
        type="submit"
        className="flex items-center gap-2 w-full flex-grow"
      >
        <AcionsChecked />
        {button_text}
      </button>
    </form>
  );
}
