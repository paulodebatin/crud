import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private nomeEntidade: String, private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/${this.nomeEntidade}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${this.nomeEntidade}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/${this.nomeEntidade}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${this.nomeEntidade}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${this.nomeEntidade}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/${this.nomeEntidade}`);
  }

}
