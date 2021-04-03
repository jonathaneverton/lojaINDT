import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/loja/produtos';

@Injectable({
  providedIn: 'root',
})
export class LojaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(idproduto): Observable<any> {
    return this.http.get(`${baseUrl}/${idproduto}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(idproduto): Observable<any> {
    return this.http.delete(`${baseUrl}/${idproduto}`);
  }



}
