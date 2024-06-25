import DeleteButton from "@/app/ui/DeleteButton";
import DialogEditItem from "@/app/ui/DialogEditItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Dots from "@/components/ui/svg/Dots";

export default function ItemActions({ item, onCreate }: any) {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <Dots />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-max">
          <DropdownMenuGroup>
            <DialogTrigger asChild>
              <DropdownMenuItem>Edit task</DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>Mark as important</DropdownMenuItem>
            <DropdownMenuItem>Mark as completed</DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteButton id={item.id} onCreate={onCreate} />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="sm:max-w-[425px]">
        <DialogEditItem item={item} onCreate={onCreate} />
      </DialogContent>
    </Dialog>
  );
}
