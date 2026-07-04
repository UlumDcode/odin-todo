export function createProject(name) {
  return {
    name,
    todos: [],
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  };
}
