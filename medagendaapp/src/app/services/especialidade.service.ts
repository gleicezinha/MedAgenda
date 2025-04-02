import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Especialidade } from '../models/especialidade.model';
import { ICrudService } from './i-crud-service';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService implements ICrudService<Especialidade> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/config/especialidade';
  
  getPage(termoBusca?: string) {
    let url = this.apiUrl + "/consultar?";
    if (termoBusca) {
      url += "termoBusca=" + termoBusca;
    }

  }

  get(termoBusca?: string): Observable<Especialidade[]> {
    let url = this.apiUrl + '/consultar/todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Especialidade[]>(url);
  }

  getById(id: number): Observable<Especialidade> {
    let url = this.apiUrl + '/' + id;
    return this.http.get<Especialidade>(url);
  }

  save(objeto: Especialidade): Observable<Especialidade> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Especialidade>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Especialidade>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + '/remover/' + id;
    return this.http.delete<void>(url);
  }

}