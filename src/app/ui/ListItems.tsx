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
import ListItemsClient from "@/app/ui/ListItemsClient";

/*
async function getData() {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    next: { tags: ["collection"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
  */

export default async function ListItems() {
  // const data = await getData();
  return (
    <GridLayout size="boxed" additional_class="">
      <ListItemsClient />
    </GridLayout>
  );
}
