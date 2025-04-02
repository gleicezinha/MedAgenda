import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICrudService } from './i-crud-service';
import { Paciente } from '../models/paciente.model';


@Injectable({
  providedIn: 'root'
})
export class PacienteService implements ICrudService<Paciente> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/paciente';
  
  getPage(termoBusca?: string): Observable<Paciente[]> {
    let url = this.apiUrl + "/consultar?";
    if (termoBusca) {
      url += "termoBusca=" + termoBusca;
    }
    return this.http.get<Paciente[]>(url);
  }

  get(termoBusca?: string): Observable<Paciente[]> {
    let url = this.apiUrl + '/consultar/todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Paciente[]>(url);
  }

  getById(id: number): Observable<Paciente> {
    let url = this.apiUrl + '/' + id;
    return this.http.get<Paciente>(url);
  }

  save(objeto: Paciente): Observable<Paciente> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Paciente>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Paciente>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + '/remover/' + id;
    return this.http.delete<void>(url);
  }

}