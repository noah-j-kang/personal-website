# Ubuntu-Themed Personal Website

Welcome to my personal portfolio website, designed to mimic the Ubuntu 22.04 LTS desktop environment. This project is built with React and aims to provide an interactive and unique user experience.

## Project Overview

This is a single-page application (SPA) that functions like a desktop operating system.
- **Desktop Environment**: A fully functional desktop shell with a wallpaper, top bar, and dock.
- **Window Management**: Open, close, minimize, and maximize windows.
- **File System**: A simulated file system to navigate through my portfolio content (documents, pictures, projects).
- **Interactive Apps**: Includes a File Manager, Terminal, and placeholder applications.

## Project Structure

The project follows a modular React architecture for maintainability and scalability.

```
src/
├── assets/             # Static assets (icons, wallpapers)
├── components/         # Reusable UI components
│   ├── Desktop/        # Main desktop shell and background
│   ├── Taskbar/        # Dock application launcher
│   ├── TopBar/         # System status panel
│   ├── Window/         # Wrapper for draggable/resizable windows
│   ├── FileExplorer/   # File manager application
│   ├── Terminal/       # Interactive terminal simulator
│   └── Icon/           # Desktop/File icons
├── contexts/           # Global state (FileSystemContext)
├── App.jsx             # Main Desktop Manager (handles window state)
├── index.css           # Global theme variables (Ubuntu colors)
└── index.js            # Entry point
```

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites
- Node.js installed on your machine.

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
-   `npm run build`: Builds the app for production to the `build` folder.
