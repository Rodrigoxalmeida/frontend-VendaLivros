import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:  HttpClient) { }

  findById(id: any): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${API_CONFIG.baseUrl}/vendas/${id}`);
  }

  findAll(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(`${API_CONFIG.baseUrl}/vendas`);
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(`${API_CONFIG.baseUrl}/vendas`, cadastro);
  }

  update(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.put<Cadastro>(`${API_CONFIG.baseUrl}/vendas/${cadastro.id}`, cadastro);
  }


}
