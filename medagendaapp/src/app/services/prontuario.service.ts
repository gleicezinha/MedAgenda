import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Prontuario } from '../models/prontuario.model';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  private apiUrl: string = environment.API_URL + '/prontuario';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>(`${this.apiUrl}/consultar/todos`);
  }

  getById(id: number): Observable<Prontuario> {
    return this.http.get<Prontuario>(`${this.apiUrl}/${id}`);
  }

  save(prontuario: Prontuario): Observable<Prontuario> {
    if (prontuario.id) {
      return this.http.put<Prontuario>(`${this.apiUrl}/atualizar`, prontuario);
    } else {
      return this.http.post<Prontuario>(`${this.apiUrl}/inserir`, prontuario);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);
  }
}
