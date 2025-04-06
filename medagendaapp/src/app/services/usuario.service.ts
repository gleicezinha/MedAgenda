import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.API_URL + '/usuario';

  constructor(private http: HttpClient) { }

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}/consultar-todos`);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  create(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiURL, data);
  }

  update(id: number, data: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/remover/${id}`);
  }
}