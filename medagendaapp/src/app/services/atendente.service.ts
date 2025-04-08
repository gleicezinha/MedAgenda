import { Injectable } from '@angular/core';
import { ICrudService } from './i-crud-service';
import { Atendente } from '../models/atendente.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtendenteService  implements ICrudService<Atendente>{

  constructor(private http: HttpClient) { }
  apiUrl: string = environment.API_URL + '/atendente';
  get(termoBusca?: string): Observable<Atendente[]> {
        let url = this.apiUrl + '/consultar-todos';
        if (termoBusca) {
          url += '?termoBusca=' + termoBusca;
        }
        return this.http.get<Atendente[]>(url);
      }
  getById(id: number): Observable<Atendente> {
    return this.http.get<Atendente>(`${this.apiUrl}/${id}`);
  }
  save(objeto: Atendente): Observable<Atendente> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Atendente>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Atendente>(url, objeto);
    }
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);  
  }
}
