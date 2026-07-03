# 02 - Data Model

Gunakan *Class* untuk struktur data agar mendukung metode instans.

## Diagram Hubungan
```mermaid
classDiagram
    class Todo {
        +string title
        +string description
        +date dueDate
        +string priority
        +string notes
        +array checklist
        +bool isDone
        +toggleDone()
    }
    class Project {
        +string name
        +Todo[] todos
        +addTodo(todo)
        +removeTodo(todoId)
        +getTodo(todoId)
    }
    class TodoApp {
        +Project[] projects
        +Project defaultProject
        +addProject(name)
        +loadData()
        +saveData()
    }
    TodoApp "1" *-- "*" Project : contains
    Project "1" *-- "*" Todo : contains
```

## Struktur Implementasi
### Todo Class (Low Level)
```javascript
// src/logic/Todo.js
export class Todo {
  constructor(title, description, dueDate, priority, notes = "", checklist = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate; // Gunakan date-fns untuk manipulasi
    this.priority = priority; // 'Low', 'Medium', 'High'
    this.notes = notes;
    this.checklist = checklist;
    this.isDone = false;
  }
  toggleDone() { this.isDone = !this.isDone; }
}
```

### Project Class
```javascript
// src/logic/Project.js
export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addTodo(todo) { this.todos.push(todo); }
  removeTodo(todoTitle) {
    this.todos = this.todos.filter(todo => todo.title !== todoTitle);
  }
}
```

## Persyaratan Khusus
1. **Default Project:** Saat `TodoApp` diinisialisasi, buat satu instans `Project` dengan nama 'Default'.
2. **Dynamic Objects:** Seluruh data harus bisa di-instansiasi ulang dari data JSON yang disimpan.
