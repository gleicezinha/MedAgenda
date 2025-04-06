import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendimento } from '../models/atendimento.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  apiURL: string = environment.API_URL + '/especialidade/';

  constructor(private http: HttpClient) { }

  get(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.apiURL}/consultar-todos`);
  }

  getById(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.apiURL}/${id}`);
  }

  create(data: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.apiURL, data);
  }

  update(id: number, data: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/remover/${id}`);
  }
}