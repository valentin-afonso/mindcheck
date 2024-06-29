import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTodo } from "@/app/actions";

export default function DialogNewItem({ onCreate }: any) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const todo = {
        id: Date.now().toString(),
        title: formData.get("title"),
        desc: formData.get("desc"),
        order: 1,
        status: 1,
        important: false,
        date: new Date(),
      };

      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          localjson.push(todo);
          localStorage.setItem("todos", JSON.stringify(localjson));
        } else {
          const defaultTodos = [];
          defaultTodos.push(todo);
          localStorage.setItem("todos", JSON.stringify(defaultTodos));
          // saveTodos();
        }
      }
      /*
      const response = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }
    
      const data = await response.json();
      console.log("Todo created:", data);
        */
    } catch (err) {
      console.error("Error creating todo:", err);
    } finally {
      // revalidateTag("collection");
      if (onCreate) {
        onCreate();
      }
    }

    /*
    await createTodo(formData);
    if (onCreate) {
      onCreate();
    }
      */
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
            <DialogDescription>
              Create a new task here. Click save when you re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                title
              </Label>
              <Input className="col-span-3" type="text" name="title" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input className="col-span-3" type="text" name="desc" />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit">Save changes</Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
