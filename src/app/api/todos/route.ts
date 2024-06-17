import { getTodos, addTodo } from "@/app/lib/data";

export async function GET() {
  try {
    const todos = getTodos();
    return Response.json({ todos });
  } catch (err) {
    return new Response("error", {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  const { title, desc, order, status, important } = await request.json();
  try {
    const todo = {
      id: Date.now().toString(),
      title,
      desc,
      order,
      status,
      important,
      date: new Date(),
    };
    addTodo(todo);
    return Response.json("todo create with success", {
      status: 201,
    });
  } catch (err) {
    return new Response("error", {
      status: 500,
    });
  }
}
