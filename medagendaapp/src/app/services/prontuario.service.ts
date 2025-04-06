import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prontuario } from '../models/prontuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  apiURL: string = environment.API_URL + '/prontuario';

  constructor(private http: HttpClient) { }

  get(): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>(`${this.apiURL}/consultar-todos`);
  }

  getById(id: number): Observable<Prontuario> {
    return this.http.get<Prontuario>(`${this.apiURL}/${id}`);
  }

  create(data: Prontuario): Observable<Prontuario> {
    return this.http.post<Prontuario>(this.apiURL, data);
  }

  update(id: number, data: Prontuario): Observable<Prontuario> {
    return this.http.put<Prontuario>(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/remover/${id}`);
  }
}