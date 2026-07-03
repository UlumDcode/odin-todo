# 05 - Persistence (`localStorage`)

Data harus dipersistenkan ke `localStorage`.

## Algoritma Load Data (Deserialization)
Karena `JSON.parse` hanya mengembalikan objek literal (tanpa method), kita harus menginstansiasi ulang objek tersebut.

```text
ALGORITHM LoadFromStorage():
    1. rawData = localStorage.getItem('todoData')
    2. IF rawData IS NULL RETURN DefaultProject
    3. data = JSON.parse(rawData)
    4. FOR EACH project IN data:
        a. reInstantiatedTodos = []
        b. FOR EACH todo IN project.todos:
            c. reInstantiatedTodos.push(new Todo(todo.title, ...))
        d. project.todos = reInstantiatedTodos
    5. RETURN data
```
