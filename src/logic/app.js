import { createProject } from "./project.js";

let projects = [];
projects.push(createProject("Default"));

export const getProjects = () => {
  return projects;
};

export const addProject = (name) => {
  const newProject = createProject(name);
  projects.push(newProject);
};

export const getProjectByName = (name) => {
  return projects.find((p) => p.name === name);
};

export const removeProject = (name) => {
  projects = projects.filter((p) => p.name !== name);
};

export const addTodoToProject = (projectName, todo) => {
  const project = getProjectByName(projectName);
  if (project) project.addTodo(todo);
};

export const removeTodoFromProject = (projectName, todoId) => {
  const project = getProjectByName(projectName);
  if (project) project.removeTodo(todoId);
};
