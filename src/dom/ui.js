import { getProjects } from "../logic/app.js";
import { setActiveProject } from "./handler.js";

// const projects = [{ name: "default" }];

// render sidebar
export const renderSidebar = () => {
  const container = document.getElementById("projects-list");
  const projects = getProjects();

  container.innerHTML = "";

  projects.forEach((project) => {
    const btn = document.createElement("button");
    btn.textContent = project.name;
    btn.classList.add("project-btn");

    btn.addEventListener("click", () => {
      renderTodos(project);
    });

    container.appendChild(btn);
  });
};

// render todo
export const renderTodos = (project) => {
  const container = document.getElementById("main-content");

  container.innerHTML = `
  <div class='todo-header'>
  <h2>${project.name}</h2>
  <button id='add-todo-btn'>+Add Todo</button>
  </div>
  `;

  project.todos.map((todo) => {
    const card = document.createElement("div");
    card.classList.add("todo-card");

    let priorityClass = "priority-low";
    if (todo.priority === "medium") priorityClass = "priority-medium";
    if (todo.priority === "high") priorityClass = "priority-high";

    card.innerHTML = `
     <div>
        <div class="todo-title">${todo.title}</div>
        <div class="todo-due-date">${todo.dueDate || "No date"}</div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="todo-priority ${priorityClass}">${todo.priority}</span>
        <button class="delete-btn" data-id="${todo.id}">&times;</button>
      </div>
    `;

    container.appendChild(card);
  });
};

export const showModal = (title, fieldsHTML) => {
  const overlay = document.getElementById("modal-overlay");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-fields").innerHTML = fieldsHTML;
  overlay.classList.remove("hidden");
};

export const hideModal = () => {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("hidden");

  document.getElementById("modal-form").reset();
};

export const getModalData = (fieldsIds) => {
  const data = {};
  fieldsIds.map((id) => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  return data;
};
