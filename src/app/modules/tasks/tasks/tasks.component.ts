import { Component, OnInit } from '@angular/core';
import { TaskDBService } from '../../../services/task-db.service';
import { Task_type, Tasks_type } from '../../../../types';
import { TaskComponent } from '../../tasks/task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task_type[] = [];
  total: number = 0;
  newTask: string = '';
  curr_date: Date = new Date();

  constructor(private taskService: TaskDBService) {}

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  get notcompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  ngOnInit() {
    this.fetchTasks();
  }

  onEdit(task: Task_type) {
    this.editTask(task);
  }

  onDelete(task: Task_type) {
    this.deleteTask(task);
  }

  onConfirmEdit(task: Task_type) {
    this.confirmTaskCompletion(task);
  }

  addnewTask(event: Event) {
    event.preventDefault();
    this.addTask({ task: this.newTask, completed: false });
    this.newTask = '';
  }

  fetchTasks() {
    this.taskService.getTasks('http://localhost:3000/tasks', '').subscribe({
      next: (task_obj: Tasks_type) => {
        this.tasks = task_obj.task_arr;
        this.total = task_obj.total;
      },
      error: (error) => {
        console.error('fetch error', error);
      },
    });
  }

  addTask(task: Task_type) {
    this.taskService.addTask('http://localhost:3000/tasks', task).subscribe({
      next: (newTask: Task_type) => {
        console.log('added task', newTask);
        this.fetchTasks();
      },
      error: (error) => {
        console.error('add error', error);
      },
    });
  }

  confirmTaskCompletion(task: Task_type) {
    this.taskService
      .editTask(`http://localhost:3000/tasks/${task.id}/complete`, task)
      .subscribe({
        next: (updatedTask: Task_type) => {
          console.log('confirm task', updatedTask);
          this.fetchTasks();
        },
        error: (error) => {
          console.error('edit error', error);
        },
      });
  }
  editTask(task: Task_type) {
    this.taskService
      .editTask(`http://localhost:3000/tasks/${task.id}`, task)
      .subscribe({
        next: (updatedTask: Task_type) => {
          console.log('edit task', updatedTask);
          this.fetchTasks();
        },
        error: (error) => {
          console.error('edit error', error);
        },
      });
  }

  deleteTask(task: Task_type) {
    this.taskService
      .deleteTask(`http://localhost:3000/tasks/${task.id}`)
      .subscribe({
        next: (deletedTask: Task_type) => {
          console.log('delete task', deletedTask);
          this.fetchTasks();
        },
        error: (error) => {
          console.error('delete error', error);
        },
      });
  }
}
