import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [CommonModule, TasksRoutingModule, TaskComponent, TasksComponent],
  exports: [TasksComponent],
  providers: [],
})
export class TasksModule {}
