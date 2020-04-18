import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  contatos = [{
    id: "123",
    nome: "diogo paza",
    email: "diogo@uol.com"
  },
  {
    id: "456",
    nome: "joao",
    email: "joao@uol.com"
  },
  {
    id: "222",
    nome: "Augustinho",
    email: "augusto@terra.com.br"
  }
  ]

  adicionarContato(contato) {
    this.contatos.push(contato)
  }
  getContatos() {
    return this.contatos;
  }



}
