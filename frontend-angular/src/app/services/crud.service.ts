import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidade } from 'src/app/model/entidade-model';
import { BaseService } from "./base-service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CrudService extends BaseService {

  constructor(private entidade: Entidade, private http: HttpClient) { 
    super();
  } 

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.entidade.nome}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.entidade.nome}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.entidade.nome}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${this.entidade.nome}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${this.entidade.nome}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${this.entidade.nome}`);
  }

}
