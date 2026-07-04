import "./assets/style.css";
import { createTodo } from "./logic/todo.js";
import { createProject } from "./logic/project.js";
import { getProjects } from "./logic/app.js";
import { renderSidebar, renderTodos, hideModal } from "./dom/ui.js";
import {
  handleAddProject,
  handleAddTodo,
  handleDeleteTodo,
  handleModalSubmit,
  setActiveProject,
} from "./dom/handler.js";

function init() {
  renderSidebar();

  const projects = getProjects();
  if (projects.length > 0) {
    renderTodos(projects[0]);
    setActiveProject(projects[0]);
  }

  document.getElementById("add-project-btn").addEventListener("click", () => {
    handleAddProject();
    console.log("add di pencet");
  });

  document
    .getElementById("modal-close-btn")
    .addEventListener("click", hideModal);

  document.getElementById("modal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleModalSubmit();
  });

  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) {
      hideModal();
    }
  });

  document.getElementById("main-content").addEventListener("click", (e) => {
    if (e.target.id === "add-todo-btn") {
      handleAddTodo();
    }

    if (e.target.classList.contains("delete-btn")) {
      const projectName = document.querySelector(".todo-header h2").textContent;
      handleDeleteTodo(projectName, e.target.dataset.id);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
