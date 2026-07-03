# Todo App Development Guidelines

## Architecture
- **Logic/Data (`src/logic/`):** Contains factory functions or classes for `Todo` and `Project` objects. Must NOT contain any DOM manipulation code.
- **UI/DOM (`src/dom/`):** Contains all code related to rendering, event listeners, and DOM updates.
- **Entry Point:** `src/index.js` links logic and DOM.

## Data Model Requirements
- **Todo:** Must include `title`, `description`, `dueDate`, and `priority`. Optional: `notes`, `checklist`.
- **Project:** Container for Todos. Ensure a 'default' project exists upon initialization.

## Technical Constraints
- **Persistence:** Use `localStorage` to save/load all data. 
    - *Crucial:* Because `JSON.stringify` strips methods, you must re-instantiate or re-attach methods to objects loaded from `localStorage`.
    - *Safety:* Ensure the app does not crash if `localStorage` data is missing or malformed.
- **Dependencies:** Use `date-fns` for all date/time manipulation.

## Workflow
- Before implementing features, check `src/logic/` and `src/dom/` for separation of concerns.
- Always verify the app builds and functions with `localStorage` after making changes.
