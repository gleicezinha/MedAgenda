import { Observable } from "rxjs";

export interface ICrudService<T> {
    apiUrl: string;
    get(termoBusca?: string) : Observable<T[]>;
    getById(id: number): Observable<T>;
    save(objeto: T): Observable<T>;
    delete(id: number): Observable<void>;
}