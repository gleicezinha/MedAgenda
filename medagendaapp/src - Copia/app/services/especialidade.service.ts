import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade } from '../models/especialidade.model';
import { ICrudService } from './i-crud-service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService implements ICrudService<Especialidade> {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl: string = environment.API_URL + '/especialidade';

  get(termoBusca?: string): Observable<Especialidade[]> {
    let url = this.apiUrl + '/consultar-todos';
    if (termoBusca){
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Especialidade[]>(url);
  }

  getById(id: number): Observable<Especialidade> {
    return this.http.get<Especialidade>(`${this.apiUrl}/${id}`); 
  }

  save(objeto: Especialidade): Observable<Especialidade> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
    });
  
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Especialidade>(url, objeto, { headers });
    } else {
      url += '/inserir';
      return this.http.post<Especialidade>(url, objeto, { headers });
    }
  }
  
    delete(id: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
    });
  
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`, { headers });
  }
}
