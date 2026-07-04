import { addProject } from "../logic/app";
import { createTodo } from "../logic/todo";
import { renderSidebar, renderTodos } from "./ui";

export const handleAddProject = () => {
  const name = prompt("enter project name: ");
  if (name && name.trim() !== "") {
    addProject(name);
    renderSidebar();
  }
};

export const handleAddTodo = (project) => {
  const title = prompt("enter todo title: ");
  if (!title || title.trim() === "") return;

  const description = prompt("enter todo description: ");
  const dueDate = prompt("enter todo due date: ");
  const priority = prompt("enter todo priority: ");

  const newTodo = createTodo(
    title.trim(),
    description.trim(),
    dueDate.trim(),
    priority.trim(),
  );
  project.addTodo(newTodo);
  renderTodos(project);
};

export const handleDeleteTodo = (project) => {
  project.removeTodo(todoId);
  renderTodos();
};
