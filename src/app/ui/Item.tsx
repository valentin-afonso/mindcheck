import StarFull from "@/components/ui/svg/StarFull";
import StarEmpty from "@/components/ui/svg/StarEmpty";
import ItemActions from "@/app/ui/ItemActions";
import RadioChecked from "@/components/ui/svg/RadioChecked";
import RadioUnchecked from "@/components/ui/svg/RadioUnchecked";
import { Todo } from "@/app/model/TodoModel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Item({ item, onCreate }: any) {
  const IconStar =
    item.important || item.important === "true" ? StarFull : StarEmpty;
  const IconRadio =
    item.status === 1 || item.status === "1" ? RadioUnchecked : RadioChecked;
  return (
    <Dialog>
      <div className="flex items-center justify-between w-full min-w-[450px]">
        <div className="flex gap-2 items-center w-full">
          {IconRadio && <IconRadio />}
          <DialogTrigger asChild>
            <div className="flex w-full justify-between pr-3">
              <p>{item.title}</p>
              <p>today</p>
            </div>
          </DialogTrigger>
        </div>

        <div className="flex items-center gap-3">
          {IconStar && <IconStar />}
          <ItemActions item={item} onCreate={onCreate} />
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p>{item.title}</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{item.desc}</DialogDescription>
        <DialogFooter>
          <p>{item.date}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
