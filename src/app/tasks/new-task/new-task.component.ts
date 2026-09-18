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
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksService.addTask(this.userId, { title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate });
    this.close.emit();
  }
}
