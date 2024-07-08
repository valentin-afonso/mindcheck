import { useTodoForm } from "@/app/hooks/useTodoForm";
import ActionsDelete from "@/components/ui/svg/ActionsDelete";

export default function DeleteButton({ id, onCreate }: any) {
  const { deleteItem } = useTodoForm(onCreate);

  return (
    <button
      onClick={() => deleteItem(id)}
      className="flex items-center gap-2 text-red-800 w-full"
    >
      <ActionsDelete />
      <span className="flex-grow text-left">Delete task</span>
    </button>
  );
}
