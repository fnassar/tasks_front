import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Task_type } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.http.get<T>(url, options) as Observable<T>;
  } // get observable of type T -- an observable is a stream of data

  // access restful api with post request
  post<T>(url: string, body: Task_type, options: Options): Observable<T> {
    return this.http.post<T>(url, body, options) as Observable<T>;
  }

  // access restful api with put request
  put<T>(url: string, body: Task_type, options: Options): Observable<T> {
    return this.http.put<T>(url, body, options) as Observable<T>;
  }

  // access restful api with delete request
  delete<T>(url: string, options: Options): Observable<T> {
    // console.log('url delete: ', url);
    return this.http.delete<T>(url, options) as Observable<T>;
  }
}
