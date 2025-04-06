import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  apiURL: string = environment.API_URL + '/medico/';

  constructor(private http: HttpClient) { }

  get(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.apiURL}/consultar-todos`);
  }

  getById(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiURL}/${id}`);
  }

  create(data: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.apiURL, data);
  }

  update(id: number, data: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/remover/${id}`);
  }
}