/** The Task interface represents a task. */
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

/** The NewTaskData interface represents the data for a new task. */
export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
