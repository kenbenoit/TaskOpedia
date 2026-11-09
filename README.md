# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependency Diagram](#dependency-diagram)
- [How It Works](#how-it-works)
- [Scripts](#scripts)
- [Technology Stack](#technology-stack)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (HMR enabled)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
taskopedia/
├── src/
│   ├── Layout/
│   │   ├── Header.jsx          # Application header component
│   │   └── Footer.jsx          # Application footer component
│   ├── Student.jsx             # Student management component
│   ├── StudentReview.jsx       # Student review component
│   ├── main.jsx                # Application entry point
│   └── images/                 # Static image assets
├── public/                     # Public static assets
├── dist/                       # Production build output
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

### Key Files

- **src/main.jsx** - React application entry point
- **src/Student.jsx** - Handles student data and task management
- **src/StudentReview.jsx** - Manages student review functionality
- **src/Layout/Header.jsx** - Navigation and header UI
- **src/Layout/Footer.jsx** - Footer UI
- **index.html** - Main HTML document with root div for React mounting

## Dependency Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    React Application                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐         ┌──────────────────────┐      │
│  │   main.jsx       │         │   index.html         │      │
│  │  (Entry Point)   │────────▶│  (Root Container)    │      │
│  └──────────────────┘         └──────────────────────┘      │
│           │                                                   │
│           ├──────────────────┬──────────────────┐            │
│           │                  │                  │            │
│           ▼                  ▼                  ▼            │
│      ┌─────────────┐   ┌──────────┐    ┌──────────────┐    │
│      │   Layout    │   │ Student  │    │StudentReview │    │
│      │  (Header,   │   │Component │    │  Component   │    │
│      │   Footer)   │   └──────────┘    └──────────────┘    │
│      └─────────────┘                                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
              │
              │ Dependencies
              ▼
┌─────────────────────────────────────────────────────────────┐
│                  External Libraries                          │
├─────────────────────────────────────────────────────────────┤
│  • React ^19.2.8          (UI Library)                      │
│  • React-DOM ^19.2.8      (DOM Rendering)                   │
│                                                               │
│              Development Tools                              │
│  • Vite ^8.3.0            (Build Tool)                      │
│  • ESLint ^10.10.0        (Code Linting)                    │
│  • @vitejs/plugin-react   (React HMR Plugin)                │
│  • TypeScript Tools       (Type Support)                    │
│  • React Hooks Plugin     (Linting Rules)                   │
└─────────────────────────────────────────────────────────────┘
```

## How It Works

### 1. Application Initialization

- **index.html** serves as the entry point and contains a root `<div id="root">` element
- **src/main.jsx** mounts the React application to the root element
- Vite's HMR (Hot Module Replacement) is enabled for seamless development experience

### 2. Component Hierarchy

The application follows a hierarchical component structure:

- **Layout Components** - Provide consistent UI structure across the app
  - `Header.jsx` - Displays navigation and branding
  - `Footer.jsx` - Shows footer information
  
- **Page Components** - Handle main functionality
  - `Student.jsx` - Manages student list and task assignment
  - `StudentReview.jsx` - Handles reviewing student tasks and providing feedback

### 3. Data Flow

```
User Interaction
       │
       ▼
Component Event Handlers
       │
       ├─▶ State Updates (React State)
       │
       ├─▶ Component Re-render
       │
       └─▶ DOM Updates (via React-DOM)
```

### 4. Build Process

- **Development** (`npm run dev`)
  - Vite starts a dev server with HMR
  - Changes are reflected instantly without full page reload
  - Source maps available for debugging

- **Production** (`npm run build`)
  - Vite bundles and minifies the application
  - Output generated in `/dist` directory
  - Optimized for performance and size

### 5. Code Quality

- **ESLint** enforces code standards and best practices
- Configuration includes React hooks rules for safe React usage
- Run `npm run lint` to check code quality

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Technology Stack

### Runtime
- **React 19.2.8** - Modern UI library with latest features
- **React-DOM 19.2.8** - React rendering engine for the DOM

### Build & Development
- **Vite 8.3.0** - Lightning-fast build tool and dev server
- **@vitejs/plugin-react** - Vite plugin with Oxc support for React optimization
- **ESLint 10.10.0** - Code quality and consistency linting

### Type Support
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React-DOM
