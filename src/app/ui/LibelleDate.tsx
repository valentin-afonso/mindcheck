import useFormattedDate from "@/app/hooks/useFormattedDate";

export default function LibelleDate({ date }: any) {
  const formattedDate = useFormattedDate(date);
  return <p>{formattedDate}</p>;
}
