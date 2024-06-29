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
import Item from "@/app/ui/Item";
import SearchBar from "@/app/ui/SearchBar";
import { Todo } from "@/app/model/TodoModel";

export default function ListItemsClient() {
  const [data, setData] = useState<Todo[] | null>(null);

  useEffect(() => {
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      setData(JSON.parse(sessionData));
    }
  }, []);

  const refreshData = () => {
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      setData(JSON.parse(sessionData));
    }
  };

  if (data === null) {
    return (
      <>
        <Command>
          <CommandList>
            <CommandEmpty>No tasks found.</CommandEmpty>
            <CommandGroup heading="Important"></CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tasks"></CommandGroup>
          </CommandList>
          <SearchBar onCreate={refreshData} />
        </Command>
      </>
    );
  }

  return (
    <>
      <Command>
        <CommandList>
          <CommandEmpty>No tasks found.</CommandEmpty>
          <CommandGroup heading="Important">
            {data
              .filter((item: Todo) => item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} onCreate={refreshData} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            {data
              .filter((item: Todo) => !item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} onCreate={refreshData} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
        </CommandList>
        <SearchBar onCreate={refreshData} />
      </Command>
    </>
  );
}
