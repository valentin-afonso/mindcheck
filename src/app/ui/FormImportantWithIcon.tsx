import { updateTodo } from "@/app/actions";
import StarFull from "@/components/ui/svg/StarFull";
import StarEmpty from "@/components/ui/svg/StarEmpty";

export default function FormImportantWithIcon({ item, onCreate }: any) {
  const important_value = item.important === "true" ? "false" : "true";
  const IconStar =
    item.important || item.important === "true" ? StarFull : StarEmpty;

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
      <input type="hidden" name="status" value={item.status} />
      <input type="hidden" name="title" value={item.title} />
      <input type="hidden" name="desc" value={item.desc} />
      <input type="hidden" name="important" value={important_value} />
      <button type="submit">{IconStar && <IconStar />}</button>
    </form>
  );
}
