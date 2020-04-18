import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  
  url = "http://localhost:3000/"
  constructor(http: HttpClient) {}

  adicionarContato(contato) {
   // this.contatos.push(contato)
  }
  getContatos() {
    return this.http.get(this.url)
  }



}
