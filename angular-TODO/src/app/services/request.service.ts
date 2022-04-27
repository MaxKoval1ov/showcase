import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private postsURL = 'http://localhost:4000/todo';

  constructor(private http: HttpClient) {}

  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.postsURL}/?page=1&limit=10`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.postsURL, task);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.postsURL}/${id}`);
  }

  updateTask(task: Update<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.postsURL}/${task.id}`, task.changes);
  }

  removeItem(id: string): Observable<any> {
    return this.http.delete(`${this.postsURL}/${id}`);
  }
}
