import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import GridLayout from "@/app/ui/GridLayout";
import Item from "@/app/ui/Item";

export default function ListItems() {
  return (
    <GridLayout size="boxed" additional_class="">
      <Command>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Important">
            <CommandItem>My first task</CommandItem>
            <CommandItem>My second task</CommandItem>
            <CommandItem>
              <Item />
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            <CommandItem>My fourth task</CommandItem>
            <CommandItem>
              <span>My fifth task</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <div className="flex gap-1">
          <CommandInput placeholder="Type a command or search..." />
          <Button variant="outline">Add</Button>
        </div>
      </Command>
    </GridLayout>
  );
}
