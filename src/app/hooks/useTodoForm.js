import { useState } from "react";

export const useTodoForm = (onCreate) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Date.now().toString(),
      title: formData.title,
      desc: formData.desc,
      order: 1,
      status: 1,
      important: false,
      date: new Date(),
    };

    try {
      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          localjson.push(todo);
          localStorage.setItem("todos", JSON.stringify(localjson));
        } else {
          const defaultTodos = [];
          defaultTodos.push(todo);
          localStorage.setItem("todos", JSON.stringify(defaultTodos));
        }
      }
    } catch (err) {
      console.error("Error creating todo:", err);
    } finally {
      if (onCreate) {
        onCreate();
      }
    }
  };

  const deleteItem = async (id) => {
    try {
      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          localjson = localjson.filter((todo) => todo.id !== id.toString());
          localStorage.setItem("todos", JSON.stringify(localjson));
          if (onCreate) {
            onCreate();
          }
        }
      }
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const updateItem = async (item, updatedData) => {
    try {
      if (typeof window !== "undefined") {
        let localtodo = localStorage.getItem("todos");
        if (localtodo) {
          let localjson = JSON.parse(localtodo);
          const todo_to_update = localjson.find(
            (todo) => todo.id === item.id.toString()
          );
          if (todo_to_update) {
            Object.assign(todo_to_update, updatedData);
            localStorage.setItem("todos", JSON.stringify(localjson));
          } else {
            throw new Error("No Todo found");
          }
        }
      }
    } catch (err) {
      console.error("Error updating todo:", err);
    } finally {
      if (onCreate) {
        onCreate();
      }
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    deleteItem,
    updateItem,
  };
};
