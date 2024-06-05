import data from "@/app/data.json";
import { getById, updateTodo, deleteTodo } from "@/app/lib/data";

export async function GET(request: Request, context: any) {
  try {
    const { params } = context;
    const todo = getById(params.todoId);
    if (!todo) {
      return Response.json("error", { status: 404 });
    }
    return Response.json({ todo }, { status: 200 });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}
export async function PUT(request: Request, context: any) {
  try {
    const { params } = context;
    const id = params.todoId;
    const { title, desc, order, status } = await request.json();
    updateTodo(id, title, desc, order, status);
    return Response.json("toto updated with success", { status: 200 });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}
export async function DELETE(request: Request, context: any) {
  try {
    const { params } = context;
    const id = params.todoId;
    deleteTodo(id);
    return Response.json("toto deleted with success", { status: 200 });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}
