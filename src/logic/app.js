import { createProject } from "./project.js";
import { saveProjects, loadProjects } from "./storage.js";

let projects = [];
projects.push(createProject("Default"));

const initData = () => {
  const saved = loadProjects();
  if (saved.length > 0) {
    projects = saved;
  } else {
    projects.push(createProject("Default"));
    saveProjects(projects); // Simpan ke localStorage
  }
};

initData();

export const getProjects = () => {
  return projects;
};

export const addProject = (name) => {
  const newProject = createProject(name);
  projects.push(newProject);
  saveProjects(projects);
};

export const getProjectByName = (name) => {
  return projects.find((p) => p.name === name);
};

export const removeProject = (name) => {
  projects = projects.filter((p) => p.name !== name);
  saveProjects(projects);
};

export const addTodoToProject = (projectName, todo) => {
  const project = getProjectByName(projectName);
  if (project) {
    project.addTodo(todo);
    saveProjects(projects);
  }
};

export const removeTodoFromProject = (projectName, todoId) => {
  const project = getProjectByName(projectName);
  if (project) {
    project.removeTodo(todoId);
    saveProjects(projects);
  }
};
