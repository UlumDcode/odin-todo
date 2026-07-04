export const createTodo = (title, description, dueDate, priority, status = "todo") => {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
    status, // "todo" | "doing" | "done"
  };
};
