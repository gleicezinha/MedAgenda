import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade } from '../models/especialidade.model';
import { ICrudService } from './i-crud-service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService implements ICrudService<Especialidade> {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl: string = environment.API_URL + '/especialidade';

  get(termoBusca?: string): Observable<Especialidade[]> {
    throw new Error('Method not implemented.');
  }

  getById(id: number): Observable<Especialidade> {
    throw new Error('Method not implemented.');
  }

  save(objeto: Especialidade): Observable<Especialidade> {
    throw new Error('Method not implemented.');
  }
  
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
