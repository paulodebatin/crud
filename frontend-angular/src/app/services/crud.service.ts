import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidade } from 'src/app/model/entidade-model'

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private entidade: Entidade, private http: HttpClient) { } 


  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/${this.entidade.nome}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${this.entidade.nome}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/${this.entidade.nome}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${this.entidade.nome}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${this.entidade.nome}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/${this.entidade.nome}`);
  }

}
