import { Button } from "@/components/ui/button";
import DeleteButton from "@/app/ui/DeleteButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Dots from "@/components/ui/svg/Dots";

export default function ItemActions({ id, onCreate }: any) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <Dots />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-max">
          <DropdownMenuGroup>
            <DropdownMenuItem>Edit task</DropdownMenuItem>
            <DropdownMenuItem>Mark as important</DropdownMenuItem>
            <DropdownMenuItem>Mark as completed</DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteButton id={id} onCreate={onCreate} />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
