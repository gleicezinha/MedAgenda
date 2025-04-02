import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendimento } from '../models/atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private baseUrl = 'http://localhost:9000/atendimento';

  constructor(private http: HttpClient) { }

  getAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.baseUrl}/consultar-todos`);
  }

  getAtendimentoPorId(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.baseUrl}/${id}`);
  }

  criarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.baseUrl, atendimento);
  }

  atualizarAtendimento(id: number, atendimento: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.baseUrl}/${id}`, atendimento);
  }

  deletarAtendimento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
