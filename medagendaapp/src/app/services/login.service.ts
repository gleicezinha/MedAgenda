import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  get(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.baseUrl}/consultar-todos`);
  }

  getById(id: number): Observable<Login> {
    return this.http.get<Login>(`${this.baseUrl}/${id}`);
  }

  create(data: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl, data);
  }

  update(id: number, data: Login): Observable<Login> {
    return this.http.put<Login>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remover/${id}`);
  }
}