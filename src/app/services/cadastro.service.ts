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

  findAll(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(`${API_CONFIG.baseUrl}/vendas`);
  }


}
