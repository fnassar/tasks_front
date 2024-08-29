import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./app/modules/tasks/tasks.module').then((m) => m.TasksModule),
  },
];
