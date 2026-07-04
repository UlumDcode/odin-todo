import { getProjects } from "../logic/app.js";
import { setActiveProject } from "./handler.js";

// const projects = [{ name: "default" }];

// render sidebar
export const renderSidebar = () => {
  const container = document.getElementById("projects-list");
  const projects = getProjects();

  container.innerHTML = "";

  projects.forEach((project) => {
    const item = document.createElement("div");
    item.classList.add("project-item");

    const btn = document.createElement("button");
    btn.textContent = project.name;
    btn.classList.add("project-btn");

    btn.addEventListener("click", () => {
      renderTodos(project);
    });

    item.appendChild(btn);

    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.classList.add("project-delete-btn");
    delBtn.dataset.project = project.name;

    item.appendChild(delBtn);
    container.appendChild(item);
  });
};

// render todo
export const renderTodos = (project) => {
  const container = document.getElementById("main-content");

  // Hitung jumlah per status
  const todos = project.todos.filter((t) => t.status === "todo").length;
  const doings = project.todos.filter((t) => t.status === "doing").length;
  const dones = project.todos.filter((t) => t.status === "done").length;

  container.innerHTML = `
  <div class='todo-header'>
  <h2>${project.name}</h2>
  <button id='add-todo-btn'>+Add Todo</button>
  </div>
  <div class="status-counter">
    <span class="counter-item counter-todo">📋 ${todos}</span>
    <span class="counter-item counter-doing">🔄 ${doings}</span>
    <span class="counter-item counter-done">✅ ${dones}</span>
  </div>
  `;

  project.todos.forEach((todo) => {
    const card = document.createElement("div");
    card.classList.add("todo-card");

    let priorityClass = "priority-low";
    if (todo.priority === "medium") priorityClass = "priority-medium";
    if (todo.priority === "high") priorityClass = "priority-high";

    const isTodo = todo.status === "todo";
    const isDoing = todo.status === "doing";
    const isDone = todo.status === "done";

    card.innerHTML = `
      <div style="flex: 1;">
        <div class="todo-title">${todo.title}</div>
        <div class="todo-due-date">${todo.dueDate || "No date"}</div>
      </div>
      <div class="todo-right">
        <div class="status-buttons">
          <button class="status-btn ${isTodo ? "active" : ""} status-todo" data-id="${todo.id}" data-status="todo">Todo</button>
          <button class="status-btn ${isDoing ? "active" : ""} status-doing" data-id="${todo.id}" data-status="doing">Doing</button>
          <button class="status-btn ${isDone ? "active" : ""} status-done" data-id="${todo.id}" data-status="done">Done</button>
        </div>
        <div class="todo-actions">
          <span class="todo-priority ${priorityClass}">${todo.priority}</span>
          <button class="delete-btn" data-id="${todo.id}">&times;</button>
        </div>
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
