import StarFull from "@/components/ui/svg/StarFull";
import ItemActions from "@/app/ui/ItemActions";
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
  return (
    <Dialog>
      <div className="flex items-center justify-between w-full min-w-[450px]">
        <DialogTrigger asChild>
          <div className="flex w-full justify-between pr-3">
            <p>{item.title}</p>
            <p>today</p>
          </div>
        </DialogTrigger>
        <div className="flex items-center gap-3">
          <StarFull />
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
