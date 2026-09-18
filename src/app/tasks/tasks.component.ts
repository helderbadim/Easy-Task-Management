import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  /** The name is the name of the user who the tasks are for. */
  @Input({ required: true }) name!: string;

  /** The userId is the id of the user who the tasks are for. */
  @Input({ required: true }) userId!: string;

  /** The tasksService is the service that manages the tasks. */
  private tasksService = inject(TasksService);

  /** The isAddingTask is a boolean that indicates if the user is adding a task. */
  isAddingTask = false;

  /** The selectedUserTasks is the tasks for the selected user. */
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  /** The startAddingTask method is called when the user starts adding a task. */
  startAddingTask() {
    this.isAddingTask = true;
  }

  /** The onCloseAddingTask method is called when the user closes the new task form. */
  onCloseAddingTask() {
    this.isAddingTask = false;
  }
}
