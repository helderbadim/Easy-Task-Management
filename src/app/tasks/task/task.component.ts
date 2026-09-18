import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  /** The task is the task to display. */
  @Input({ required: true }) task!: Task;

  /** The tasksService is the service that manages the tasks. */
  private tasksService = inject(TasksService);

  /** The onCompleteTask method is called when the task is completed. */
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
