import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const STORAGE_KEY = "odin-todo-data";

export const saveProject = (project) => {
  try {
    const jsonString = JSON.stringify(project);
    localStorage.setItem(STORAGE_KEY, jsonString);
  } catch (err) {
    console.err("gagal menyimpan data ke local storage");
  }
};

export function loadProject() {
  try {
    const jsonString = localStorage.getItem(STORAGE_KEY);

    if (!jsonString) return [];

    const rawProject = JSON.parse(jsonString);
    const project = rawProject.map((rp) => {
      const project = createProject(rp.name);

      project.todos = rp.todos.map((rt) => {
        return createTodo(rt.title, rt.description, rt.dueDate, rt.priority);
      });
      return project;
    });
    return project;
  } catch (err) {
    console.err("gagal memuat data dari local storage", err);
    return [];
  }
}

export function clearProject() {
  localStorage.removeItem(STORAGE_KEY);
}
