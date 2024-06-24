import { deleteTodo } from "@/app/actions";

export default function DeleteButton({ id, onCreate }: any) {
  const deleteItem = async () => {
    await deleteTodo(id);

    if (onCreate) {
      onCreate();
    }
  };
  return <button onClick={() => deleteItem()}>Delete task</button>;
}
