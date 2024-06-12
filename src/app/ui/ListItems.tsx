import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import GridLayout from "@/app/ui/GridLayout";
import Item from "@/app/ui/Item";
import SearchBar from "@/app/ui/SearchBar";
import { Todo } from "@/app/model/TodoModel";

async function getData() {
  const res = await fetch("https://mindcheck-afso.vercel.app/api/todos", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ListItems() {
  const data = await getData();
  return (
    <GridLayout size="boxed" additional_class="">
      <Command>
        <CommandList>
          <CommandEmpty>No tasks found.</CommandEmpty>
          <CommandGroup heading="Important">
            {data.todos
              .filter((item: Todo) => item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            {data.todos
              .filter((item: Todo) => !item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
        </CommandList>
        <SearchBar />
      </Command>
    </GridLayout>
  );
}
