import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Prontuario } from '../models/prontuario.model';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService implements ICrudService<Prontuario> {
  constructor(
    private http: HttpClient
  ) { }
    apiUrl: string = environment.API_URL + '/config/protuario';
    
  getPage(termoBusca?: string): Observable<Prontuario> {
    let url = this.apiUrl + "/consultar?";
    if (termoBusca) {
      url += "termoBusca=" + termoBusca;
    }
    return this.http.get<Prontuario>(url);
  }
  
  get(termoBusca?: string): Observable<Prontuario[]> {
    let url = this.apiUrl + '/consultar/todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
      return this.http.get<Prontuario[]>(url);
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
