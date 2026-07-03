# Todo Application

A simple, modular Todo list application built with vanilla JavaScript, Webpack, and LocalStorage for persistence.

## Features
- Create and manage projects.
- Add, edit, delete, and mark tasks as complete.
- Prioritize tasks with different colors.
- Persistent data storage using `localStorage`.

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm start
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Building for Production
Create a production build in the `dist/` folder:
```bash
npm run build
```

## Architecture Documentation
This project follows a strict separation of concerns:
- `docs/01-setup.md`: Project setup and tooling.
- `docs/02-data-model.md`: Data structure and Class definitions.
- `docs/03-logic.md`: Business logic (no DOM manipulation).
- `docs/04-ui.md`: DOM manipulation and rendering.
- `docs/05-persistence.md`: Data persistence with LocalStorage.
