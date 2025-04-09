import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL 

  atestado(): Observable<Blob>{
    let url = this.apiUrl + "/atestado/pdf";
    return this.http.get(url, {responseType: 'blob'})
  }

  pericia(): Observable<Blob>{
    let url = this.apiUrl + "/pericia/pdf";
    return this.http.get(url, {responseType: 'blob'})
  }

  exame(): Observable<Blob>{
    let url = this.apiUrl + "/exame/pdf";
    return this.http.get(url, {responseType: 'blob'})
  }
}
