import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model';
import { environment } from '../../environments/environment';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class MedicoService implements ICrudService<Medico> {

  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/medico';

  get(termoBusca?: string): Observable<Medico[]> {
    let url = this.apiUrl + '/consultar-todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Medico[]>(url);
  }

  getById(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`);
  }

  save(objeto: Medico): Observable<Medico> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Medico>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Medico>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);
  }
}
