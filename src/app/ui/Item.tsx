import StarFull from "@/components/ui/svg/StarFull";
import ItemActions from "@/app/ui/ItemActions";
import { Todo } from "@/app/model/TodoModel";

export default function Item({ item, onCreate }: any) {
  return (
    <div className="flex items-center justify-between w-full min-w-[450px]">
      {item.title}
      <div className="t flex items-center gap-3">
        <StarFull />
        <ItemActions id={item.id} onCreate={onCreate} />
      </div>
    </div>
  );
}
