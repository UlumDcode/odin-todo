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
        +setComplete()
    }
    class Project {
        +string name
        +Todo[] todos
        +addTodo(todo)
        +removeTodo(todoId)
    }
    Project "1" *-- "*" Todo : contains
```

## Struktur Implementasi
### Todo Class
```javascript
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  toggleDone() { this.isDone = !this.isDone; }
}
```
