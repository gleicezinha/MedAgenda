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

  getAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.apiURL}/consultar-todos`);
  }

  getAtendimentoPorId(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.apiURL}/${id}`);
  }

  criarAtendimento(data: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.apiURL, data);
  }

  atualizarAtendimento(id: number, data: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.apiURL}/${id}`, data);
  }

  deletarAtendimento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/remover/${id}`);
  }
}