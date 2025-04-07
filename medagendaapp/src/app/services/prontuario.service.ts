import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prontuario } from '../models/prontuario.model';
import { environment } from '../../environments/environment';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService implements ICrudService<Prontuario> {

  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/prontuario';

  get(termoBusca?: string): Observable<Prontuario[]> {
    let url = this.apiUrl + '/consultar-todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Prontuario[]>(url);
  }

  getById(id: number): Observable<Prontuario> {
    return this.http.get<Prontuario>(`${this.apiUrl}/${id}`);
  }

  getByPacienteId(id: number): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>(`${this.apiUrl}/consultar-paciente/${id}`);
  }

  save(objeto: Prontuario): Observable<Prontuario> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Prontuario>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Prontuario>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);
  }
}
