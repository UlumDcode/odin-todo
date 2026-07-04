import {
  addProject,
  addTodoToProject,
  removeTodoFromProject,
  getProjectByName,
} from "../logic/app.js";
import { createTodo } from "../logic/todo.js";
import {
  renderSidebar,
  renderTodos,
  showModal,
  hideModal,
  getModalData,
} from "./ui.js";

let activeProject = null;

export const setActiveProject = (project) => {
  activeProject = project;
};

export const handleAddProject = () => {
  const fields = `
  <div class='form-group'>
  <label for='project-name'>Project Name</label>
  <input type='text' id='project-name' required />
  </div>
  `;
  showModal("New Project", fields);
};

export const handleAddTodo = (project) => {
  if (!activeProject) return;

  const fields = `
      <div class="form-group">
      <label for="todo-title">Title</label>
      <input type="text" id="todo-title" required />
    </div>
    <div class="form-group">
      <label for="todo-desc">Description</label>
      <textarea id="todo-desc" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="todo-date">Due Date</label>
      <input type="date" id="todo-date" />
    </div>
    <div class="form-group">
      <label for="todo-priority">Priority</label>
      <select id="todo-priority">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  `;
  showModal("Add Todo", fields);
};

export const handleModalSubmit = () => {
  const title = document.getElementById("modal-title").textContent;

  if (title === "New Project") {
    const data = getModalData(["project-name"]);
    if (data["project-name"].trim()) {
      addProject(data["project-name"].trim());
      renderSidebar();
      hideModal();
    }
  }

  if (title === "Add Todo") {
    const data = getModalData([
      "todo-title",
      "todo-desc",
      "todo-date",
      "todo-priority",
    ]);
    if (data["todo-title"].trim()) {
      const newTodo = createTodo(
        data["todo-title"].trim(),
        data["todo-desc"],
        data["todo-date"],
        data["todo-priority"],
      );
      addTodoToProject(activeProject.name, newTodo);
      const updatedProject = getProjectByName(activeProject.name);
      renderTodos(updatedProject);
      hideModal();
    }
  }
};

export const handleDeleteTodo = (projectName, todoId) => {
  removeTodoFromProject(projectName, todoId);
  const updatedProject = getProjectByName(projectName);
  renderTodos(updatedProject);
};
