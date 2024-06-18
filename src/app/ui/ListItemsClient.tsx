"use client";

import { useEffect, useState } from "react";
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

export default function ListItemsClient({ initialData }: any) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("todos");
    if (sessionData) {
      setData(JSON.parse(sessionData));
    } else {
      sessionStorage.setItem("todos", JSON.stringify(initialData));
    }
  }, [initialData]);

  const refreshData = async () => {
    const res = await fetch("https://mindcheck-afso.vercel.app/api/todos");
    if (res.ok) {
      const updatedData = await res.json();
      setData(updatedData);
      sessionStorage.setItem("todos", JSON.stringify(updatedData));
    }
  };

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
        <SearchBar onCreate={refreshData} />
      </Command>
    </GridLayout>
  );
}