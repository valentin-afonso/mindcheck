"use server";

import { revalidateTag } from "next/cache";

export async function createTodo(formData: FormData) {
  try {
    const todo = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      order: 1,
      status: 1,
      important: false,
    };
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Failed to create todo");
    }

    const data = await response.json();
    console.log("Todo created:", data);
  } catch (err) {
    console.error("Error creating todo:", err);
  } finally {
    // revalidateTag("collection");
  }
}

export async function deleteTodo(id: any) {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    const data = await response.json();
    console.log("Todo deleted:", data);
  } catch (err) {
    console.error("Error creating todo:", err);
  } finally {
    // revalidateTag("collection");
  }
}

export async function updateTodo(formData: FormData) {
  try {
    const id = formData.get("id");
    const todo = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      order: formData.get("order"),
      status: formData.get("status"),
      important: formData.get("important"),
    };
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    const data = await response.json();
    console.log("Todo updated:", data);
  } catch (err) {
    console.error("Error updating todo:", err);
  } finally {
    // revalidateTag("collection");
  }
}
