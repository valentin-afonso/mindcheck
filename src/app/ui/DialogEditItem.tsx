import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { updateTodo } from "@/app/actions";
import { Todo } from "@/app/model/TodoModel";

export default function DialogEditItem({ item, onCreate }: any) {
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.desc);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      /*
      const id = formData.get("id");
      const todo = {
        title: formData.get("title"),
        desc: formData.get("desc"),
        order: formData.get("order"),
        status: formData.get("status"),
        important: formData.get("important"),
      };
      */
      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          const todo_to_update = localjson.find(
            (todo: Todo) => todo.id === item.id.toString()
          );
          if (todo_to_update) {
            todo_to_update.title = title;
            todo_to_update.desc = desc;
            todo_to_update.order = item.order;
            todo_to_update.status = item.status;
            todo_to_update.important = item.important;
            localStorage.setItem("todos", JSON.stringify(localjson));
            // saveTodos();
          } else {
            throw new Error("No Todo found");
          }
        }
      }

      /*
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        throw new Error(responseData.message || "Failed to update todo");
        // throw new Error("Failed to update todo");
      }

      const data = await response.json();
      console.log("Todo updated:", data);
      */
    } catch (err) {
      console.error("Error updating todo:", err);
    } finally {
      // await updateTodo(formData);
      if (onCreate) {
        onCreate();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Edit task</DialogTitle>
        <DialogDescription>
          Edit this task. Click save when you re done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <input type="hidden" name="id" value={item.id} />
          <input type="hidden" name="order" value={item.order} />
          <input type="hidden" name="status" value={item.status} />
          <input type="hidden" name="important" value={item.important} />
          <Label htmlFor="title" className="text-right">
            title
          </Label>
          <Input
            className="col-span-3"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="desc" className="text-right">
            Description
          </Label>
          <Input
            className="col-span-3"
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger asChild>
          <Button type="submit">Save changes</Button>
        </DialogTrigger>
      </DialogFooter>
    </form>
  );
}
