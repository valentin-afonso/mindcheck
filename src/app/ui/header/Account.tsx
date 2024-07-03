import Avatar from "@/components/ui/svg/Avatar";
import ChevronDown from "@/components/ui/svg/ChevronDown";

export default function Account() {
  return (
    <div className="flex items-center gap-2 border border-[#C6C6C6] rounded-sm py-1 px-2">
      <Avatar />
      <p className="text-xs">val.afso</p>
      <ChevronDown />
    </div>
  );
}
