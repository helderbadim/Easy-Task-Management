# Task Management App

A small task-management dashboard built with Angular. Select a user to view their tasks, create new tasks, and mark existing tasks as complete.

Live demo: [helderbadim.github.io/Easy-Task-Management](https://helderbadim.github.io/Easy-Task-Management/)

## Features

- Displays six sample users with avatars.
- Filters the task list by the selected user.
- Creates tasks with a title, summary, and due date.
- Marks tasks as complete by removing them from the list.
- Persists task data in the browser's `localStorage`, so changes survive page reloads.
- Uses Angular standalone components and the modern control-flow syntax (`@if` and `@for`).

## Tech stack

- Angular 18
- TypeScript
- RxJS
- Angular Forms
- CSS

## Getting started

### Prerequisites

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app reloads automatically when source files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm run build` | Create a production build in `dist/essentials`. |
| `npm run watch` | Build in development mode and rebuild on changes. |
| `npm test` | Run the Angular unit-test suite with Karma. |

## Project structure

```text
src/
├── app/
│   ├── header/             Application header
│   ├── shared/card/        Reusable card component
│   ├── tasks/              Task list, task items, and new-task form
│   ├── user/               User selector component
│   ├── dummy-users.ts      Sample users
│   └── app.component.*     Application shell and user selection
├── assets/                 Images and logos
├── main.ts                 Application bootstrap
└── styles.css              Global styles
```

## Data and persistence

The initial users and tasks are defined in the source code. `TasksService` manages task creation and completion, and stores the current task list under the `tasks` key in `localStorage`.

To reset the app to its initial task data, remove the `tasks` entry from your browser's local storage for `localhost:4200`, then reload the page.

## Notes

This project currently uses local sample data and has no backend, authentication, routing, or remote API integration.
