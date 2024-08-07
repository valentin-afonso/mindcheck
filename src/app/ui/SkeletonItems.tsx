import { Skeleton } from "@/components/ui/skeleton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import SearchBar from "@/app/ui/SearchBar";

export default function SkeletonItems({ onCreate }: any) {
  return (
    <div>
      <Command>
        <CommandList>
          <CommandGroup heading="Important">
            <div className="flex gap-2 flex-col">
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
            </div>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tasks">
            <div className="flex gap-2 flex-col">
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
              <Skeleton className="w-[468px] h-[35px] rounded-sm" />
            </div>
          </CommandGroup>
        </CommandList>
        <SearchBar onCreate={onCreate} />
      </Command>
    </div>
  );
}
