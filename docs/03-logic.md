# 03 - Logic

Modul logika berada di `src/logic/`. **ATURAN MUTLAK:** Modul ini tidak boleh berinteraksi dengan DOM (`document`, `window`, `getElementById`, dll).

## Diagram Alur Logika
```mermaid
graph TD
    A[UI (Input Form)] --> B[index.js (Controller)]
    B --> C[TodoApp.addTodoToProject()]
    C --> D[Project Object]
    D --> E[Todo Object]
    E --> F[Storage.saveAll()]
```

## Metode Logika Utama
Setiap *Class* harus memiliki metode untuk memanipulasi datanya sendiri.

### Algoritma Menambah Todo
```text
ALGORITHM AddTodo(projectId, todoData):
    1. project = TodoApp.getProject(projectId)
    2. newTodo = NEW Todo(todoData.title, todoData.description, ...)
    3. project.addTodo(newTodo)
    4. Storage.saveAll(TodoApp.projects)
    5. RETURN newTodo
```

### Algoritma Menghapus Todo
```text
ALGORITHM RemoveTodo(projectId, todoTitle):
    1. project = TodoApp.getProject(projectId)
    2. project.removeTodo(todoTitle)
    3. Storage.saveAll(TodoApp.projects)
```

## Struktur Modul Logika
- `src/logic/Todo.js`: Definisi Class `Todo`.
- `src/logic/Project.js`: Definisi Class `Project`.
- `src/logic/TodoApp.js`: Controller utama yang menyimpan array `projects` dan menangani logika lintas proyek.
- `src/logic/storage.js`: Fungsi wrapper untuk `localStorage`.
