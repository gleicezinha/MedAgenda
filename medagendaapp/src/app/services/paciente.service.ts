import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseUrl = 'http://localhost:8080/paciente';

  constructor(private http: HttpClient) { }

  get(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.baseUrl}/consultar-todos`);
  }

  getById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.baseUrl}/${id}`);
  }

  create(data: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, data);
  }

  update(id: number, data: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remover/${id}`);
  }
}