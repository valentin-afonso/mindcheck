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

export default function DialogEditItem({ item, onCreate }: any) {
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.desc);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await updateTodo(formData);
    if (onCreate) {
      onCreate();
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
