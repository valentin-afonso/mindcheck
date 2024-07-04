"use client";

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
import { Reorder } from "framer-motion";
import SkeletonItems from "@/app/ui/SkeletonItems";

export default function ListItemsClient() {
  const { todos, refreshTodos, saveTodos } = useTodos();

  const handleReorder = (
    updatedTodos: Todo[],
    type: "important" | "regular"
  ) => {
    if (type === "important") {
      const regularTodos = todos?.filter((item: Todo) => !item.important) || [];
      saveTodos([...updatedTodos, ...regularTodos]);
    } else {
      const importantTodos =
        todos?.filter((item: Todo) => item.important) || [];
      saveTodos([...importantTodos, ...updatedTodos]);
    }
  };

  if (todos === null) {
    return (
      <>
        <SkeletonItems onCreate={refreshTodos} />
      </>
    );
  }

  const importantTodos = todos.filter((item: Todo) => item.important);
  const regularTodos = todos.filter((item: Todo) => !item.important);

  return (
    <>
      <Command>
        <CommandList>
          <CommandEmpty>No tasks found.</CommandEmpty>
          <CommandGroup heading="Important">
            <Reorder.Group
              axis="y"
              values={importantTodos}
              onReorder={(set) => handleReorder(set, "important")}
            >
              {importantTodos.map((item: Todo) => (
                <CommandItem key={item.id}>
                  <Item item={item} onCreate={refreshTodos} />
                </CommandItem>
              ))}
            </Reorder.Group>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            <Reorder.Group
              axis="y"
              values={regularTodos}
              onReorder={(set) => handleReorder(set, "regular")}
            >
              {regularTodos.map((item: Todo) => (
                <CommandItem key={item.id}>
                  <Item item={item} onCreate={refreshTodos} />
                </CommandItem>
              ))}
            </Reorder.Group>
          </CommandGroup>
        </CommandList>
        <SearchBar onCreate={refreshTodos} />
      </Command>
    </>
  );
}
