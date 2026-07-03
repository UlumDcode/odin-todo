# 03 - Logic

Pemisahan logika adalah kunci. Modul di `src/logic/` **TIDAK BOLEH** mengandung manipulasi DOM.

## Diagram Alur Logika
```mermaid
graph TD
    A[UI Event] --> B[Project.addTodo()]
    B --> C[Todo Class Instance]
    C --> D[Storage.save()]
    D --> E[Update UI]
```

## Algoritma Menambah Todo
```text
ALGORITHM AddTodoToProject(projectId, todoData):
    1. Retrieve project by ID
    2. newTodo = Create New Todo Object(todoData)
    3. project.todos.push(newTodo)
    4. Storage.saveAll()
    5. RETURN newTodo
```
