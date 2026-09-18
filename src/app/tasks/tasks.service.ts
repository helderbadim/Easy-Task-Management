import { NewTaskData, Task } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Design dashboard layout',
      summary: 'Create the initial responsive layout for the main dashboard.',
      dueDate: '2026-09-18',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Implement task filters',
      summary: 'Add filters for task status, priority, assignee, and due date.',
      dueDate: '2026-09-20',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Fix mobile navigation',
      summary: 'Resolve layout issues affecting the navigation menu on small screens.',
      dueDate: '2026-09-22',
    },

    {
      id: 't4',
      userId: 'u2',
      title: 'Create authentication service',
      summary: 'Implement login, logout, and session management functionality.',
      dueDate: '2026-09-19',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Add route guards',
      summary: 'Protect private routes and redirect unauthenticated users to login.',
      dueDate: '2026-09-21',
    },
    {
      id: 't6',
      userId: 'u2',
      title: 'Handle token refresh',
      summary: 'Implement automatic access token renewal when the token expires.',
      dueDate: '2026-09-24',
    },

    {
      id: 't7',
      userId: 'u3',
      title: 'Create task API',
      summary: 'Build REST endpoints for creating, updating, deleting, and listing tasks.',
      dueDate: '2026-09-18',
    },
    {
      id: 't8',
      userId: 'u3',
      title: 'Add task validation',
      summary: 'Validate required fields and task data before saving to the database.',
      dueDate: '2026-09-22',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Implement task assignment',
      summary: 'Allow tasks to be assigned and reassigned to project members.',
      dueDate: '2026-09-25',
    },

    {
      id: 't10',
      userId: 'u4',
      title: 'Set up WebSocket connection',
      summary: 'Establish the real-time connection between the frontend and backend.',
      dueDate: '2026-09-19',
    },
    {
      id: 't11',
      userId: 'u4',
      title: 'Broadcast task updates',
      summary: 'Notify connected clients when tasks are created, updated, or deleted.',
      dueDate: '2026-09-23',
    },
    {
      id: 't12',
      userId: 'u4',
      title: 'Handle connection errors',
      summary: 'Implement reconnect logic and error handling for dropped WebSocket connections.',
      dueDate: '2026-09-26',
    },

    {
      id: 't13',
      userId: 'u5',
      title: 'Create NgRx task store',
      summary: 'Define the task state, actions, reducers, selectors, and effects.',
      dueDate: '2026-09-20',
    },
    {
      id: 't14',
      userId: 'u5',
      title: 'Load tasks from API',
      summary: 'Create an effect that retrieves tasks from the backend and updates the store.',
      dueDate: '2026-09-22',
    },
    {
      id: 't15',
      userId: 'u5',
      title: 'Update task state',
      summary: 'Synchronize task changes received from the API with the NgRx store.',
      dueDate: '2026-09-25',
    },

    {
      id: 't16',
      userId: 'u6',
      title: 'Create database schema',
      summary: 'Define the initial database models for users, projects, and tasks.',
      dueDate: '2026-09-18',
    },
    {
      id: 't17',
      userId: 'u6',
      title: 'Add task indexes',
      summary: 'Create indexes for frequently queried task fields to improve performance.',
      dueDate: '2026-09-21',
    },
    {
      id: 't18',
      userId: 'u6',
      title: 'Seed development data',
      summary: 'Create sample users, projects, and tasks for local development and testing.',
      dueDate: '2026-09-24',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(userId: string, taskData: NewTaskData) {
    this.tasks.unshift({
      id: this.tasks.length + 1 + '',
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
