"use client";

import { loadTodos } from "@/app/lib/data";
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

function getData() {
  /*
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    next: { tags: ["collection"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
  */
  if (typeof window !== "undefined") {
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      return JSON.parse(sessionData);
    } else {
      return null;
    }
  }
}

export default function ListItemsClient({ initialData }: any) {
  const todos = getData();
  const [data, setData] = useState(todos);

  /*
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
    const res = await fetch("http://localhost:3000/api/todos");
    if (res.ok) {
      const updatedData = await res.json();
      setData(updatedData);
      sessionStorage.setItem("todos", JSON.stringify(updatedData));
    }
  };
  */

  useEffect(() => {
    // loadTodos();
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      setData(JSON.parse(sessionData));
    }
  }, []);

  const refreshData = async () => {
    const sessionData = window.localStorage.getItem("todos");
    if (sessionData) {
      console.log("refreshdata");
      setData(JSON.parse(sessionData));
    }
    /*
    const res = await fetch("http://localhost:3000/api/todos");
    if (res.ok) {
      const updatedData = await res.json();
      if (typeof window !== "undefined") {
        window.localStorage.setItem("todos", JSON.stringify(updatedData));
        setData(updatedData);
      }
    }
      */
  };

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
