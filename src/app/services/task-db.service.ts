import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks_type } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TaskDBService {
  constructor(private apiService: ApiService) {}

  // get all Tasks
  getTasks = (url: string, options: any): Observable<Tasks_type> => {
    return this.apiService.get(url, options);
  };

  addTask = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editTask = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteTask = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
