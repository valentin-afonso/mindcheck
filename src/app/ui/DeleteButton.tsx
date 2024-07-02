import { useTodoForm } from "@/app/hooks/useTodoForm";

export default function DeleteButton({ id, onCreate }: any) {
  const { deleteItem } = useTodoForm(onCreate);

  return <button onClick={() => deleteItem(id)}>Delete task</button>;
}
