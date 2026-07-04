import { getProjects } from "../logic/app";

const projects = [{ name: "default" }];

// render sidebar
export const renderSidebar = () => {
  const container = document.getElementById("projects-list");
  const projects = getProjects();

  container.innerHTML = "";

  projects.map((projects) => {
    const btn = document.createElement("button");
    btn.textContent = projects.name;
    btn.classList.add("project-btn");

    btn.addEventListener("click", () => {
      renderTodos(project);
    });

    container.appendChlid(btn);
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
