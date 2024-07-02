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
import { useTodos } from "@/app/hooks/useTodos";

export default function ListItemsClient() {
  const { todos, refreshTodos } = useTodos();
  if (todos === null) {
    return (
      <>
        <Command>
          <CommandList>
            <CommandEmpty>No tasks found.</CommandEmpty>
            <CommandGroup heading="Important"></CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tasks"></CommandGroup>
          </CommandList>
          <SearchBar onCreate={refreshTodos} />
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
            {todos
              .filter((item: Todo) => item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} onCreate={refreshTodos} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            {todos
              .filter((item: Todo) => !item.important)
              .map((item: Todo) => (
                <div key={item.id}>
                  <CommandItem>
                    <Item item={item} onCreate={refreshTodos} />
                  </CommandItem>
                </div>
              ))}
          </CommandGroup>
        </CommandList>
        <SearchBar onCreate={refreshTodos} />
      </Command>
    </>
  );
}
