import Spinner from "@/app/ui/Spinner";

export default function loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
