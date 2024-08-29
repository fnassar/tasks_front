import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Task_type } from '../../../../types';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule, ButtonModule, CheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor() {}

  @ViewChild('deleteButton') deleteButton: any;

  @Input() task!: Task_type;
  @Output() edit: EventEmitter<Task_type> = new EventEmitter();
  @Output() delete: EventEmitter<Task_type> = new EventEmitter();
  @Output() confirm: EventEmitter<Task_type> = new EventEmitter();

  editing: boolean = false;
  value: string = '';

  toggleTaskCompletion(task: Task_type) {
    this.confirm.emit(task);
  }
  toggleEdit(task: Task_type) {
    this.value = task.task;
    this.editing = !this.editing;
  }

  updateTask(event: Event, val: string, task: Task_type) {
    this.editing = !this.editing;
    task = { id: task.id, task: val, completed: task.completed };
    this.edit.emit(task);
    this.value = '';
  }

  confirmDelete(task: Task_type) {
    this.delete.emit(task);
  }

  ngOnInit() {}
}
