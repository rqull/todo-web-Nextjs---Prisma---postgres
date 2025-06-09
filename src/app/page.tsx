"use server";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/services/todo-services";
import React from "react";

const Home = async () => {
  const todos = await getTodos();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <form action={createTodo} className="mb-6">
          <input
            type="text"
            name="content"
            placeholder="Add new todo..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
        <div className="space-y-4">
          {todos.map((todo) => (
            <form key={todo.id} className="flex items-center gap-2">
              <input hidden type="text" name="id" value={todo.id} readOnly />
              <input
                type="text"
                defaultValue={todo.content}
                name="content"
                placeholder="Update todo..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                formAction={updateTodo}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Save
              </button>
              <button
                formAction={deleteTodo}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
