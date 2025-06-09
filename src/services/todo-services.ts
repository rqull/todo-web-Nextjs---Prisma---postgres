"use server";
import { db } from "@/utils/todo_prisma";
import { revalidatePath } from "next/cache";

// Get all todos
export async function getTodos() {
  const todos = await db.todo.findMany({});
  revalidatePath("/");
  return todos;
  // Revalidate the path after fetching todos
}

// Create a new todo
export async function createTodo(formData: FormData) {
  const content = formData.get("content") as string;
  if (!content || content.trim() === "") {
    throw new Error("Title is required");
  }

  await db.todo.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/"); // Revalidate the path after creating a todo
}

// Update an existing todo
export async function updateTodo(formData: FormData) {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;

  if (!id || id.trim() === "" || !content || content.trim() === "") {
    throw new Error("ID and content are required");
  }

  await db.todo.update({
    where: {
      id: id,
    },
    data: {
      content: content,
    },
  });
  revalidatePath("/"); // Revalidate the path after updating a todo
}

// Delete an existing todo
export async function deleteTodo(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id || id.trim() === "") {
    throw new Error("ID and content are required");
  }

  await db.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/"); // Revalidate the path after deleting a todo
}
