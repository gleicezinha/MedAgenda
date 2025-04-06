import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { environment } from '../../environments/environment';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements ICrudService<Usuario> {

  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/usuario';

  get(termoBusca?: string): Observable<Usuario[]> {
    let url = this.apiUrl + '/consultar-todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Usuario[]>(url);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  save(objeto: Usuario): Observable<Usuario> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Usuario>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Usuario>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);
  }
}
