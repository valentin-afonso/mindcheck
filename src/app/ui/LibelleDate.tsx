import useFormattedDate from "@/app/hooks/useFormattedDate";

export default function LibelleDate({ date }: any) {
  const formattedDate = useFormattedDate(date);
  return <p className="d text-xs text-slate-500">{formattedDate}</p>;
}
