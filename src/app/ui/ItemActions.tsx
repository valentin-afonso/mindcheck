import DeleteButton from "@/app/ui/DeleteButton";
import DialogEditItem from "@/app/ui/DialogEditItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FormImportant from "@/app/ui/FormImportant";
import FormCheck from "@/app/ui/FormCheck";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Dots from "@/components/ui/svg/Dots";
import ActionsUpdate from "@/components/ui/svg/ActionsUpdate";

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
              <DropdownMenuItem className="cursor-pointer gap-2 items-center">
                <ActionsUpdate />
                <p className="leading-none">Edit task</p>
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>
              <FormImportant item={item} onCreate={onCreate} />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FormCheck item={item} onCreate={onCreate} />
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-red-100 focus:text-red-800">
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
