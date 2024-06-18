import { CommandInput } from "@/components/ui/command";
import DialogNewItem from "@/app/ui/DialogNewItem";

export default function SearchBar({ onCreate }: any) {
  return (
    <div className="flex gap-1">
      <CommandInput placeholder="Type a command or search..." />
      <DialogNewItem onCreate={onCreate} />
    </div>
  );
}
