import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICrudService } from './i-crud-service';
import { Medico } from '../models/medico.model';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements ICrudService<Medico>{

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/profissional';
  
  getPage(termoBusca?: string): Observable<Medico> {
    let url = this.apiUrl + "/consultar?";
    if (termoBusca) {
      url += "termoBusca=" + termoBusca;
    }
    return this.http.get<Medico>(url);
    
  }

  get(termoBusca?: string): Observable<Medico[]> {
    let url = this.apiUrl + '/consultar/todos';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Medico[]>(url);
  }

  getById(id: number): Observable<Medico> {
    let url = this.apiUrl + '/' + id;
    return this.http.get<Medico>(url);
  }

  save(objeto: Medico): Observable<Medico> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar';
      return this.http.put<Medico>(url, objeto);
    } else {
      url += '/inserir';
      return this.http.post<Medico>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + '/remover/' + id;
    return this.http.delete<void>(url);
  }

}