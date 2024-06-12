import StarFull from "@/components/ui/svg/StarFull";
import ItemActions from "@/app/ui/ItemActions";

export default function Item({ item }: any) {
  return (
    <div className="flex items-center justify-between w-full min-w-[450px]">
      {item.title}
      <div className="t flex items-center gap-3">
        <StarFull />
        <ItemActions />
      </div>
    </div>
  );
}
