import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  /** The userId is the id of the user who the task is for. */
  @Input({ required: true }) userId!: string;

  /** The close event is emitted when the new task form is closed. */
  @Output() close = new EventEmitter<void>();

  /** The enteredTitle is the title of the task. */
  enteredTitle = '';

  /** The enteredSummary is the summary of the task. */
  enteredSummary = '';

  /** The enteredDueDate is the due date of the task. */
  enteredDueDate = '';

  /** The tasksService is the service that manages the tasks. */
  private tasksService = inject(TasksService);

  /** The onCancel method is called when the new task form is closed. */
  onCancel() {
    this.close.emit();
  }

  /** The onCreateTask method is called when the new task form is submitted. */
  onCreateTask() {
    this.tasksService.addTask(this.userId, { title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate });
    this.close.emit();
  }
}
