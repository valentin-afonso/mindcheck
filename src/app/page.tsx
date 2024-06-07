import ListItems from "@/app/ui/ListItems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to mindcheck !</h1>
      <ListItems />
    </main>
  );
}
