import { Component, OnInit } from '@angular/core';


import { MeuServicoService } from './meu-servico.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  templateUrl: any;
  contatos: Array<any>;
  contato: any;
  teste: Array<any>
  public servico: MeuServicoService

  constructor(private meuServicoService: MeuServicoService) { }

  ngOnInit() {

    this.contato = {
      nome: "",
      email: ""
    }
    this.contatos = this.meuServicoService.getContatos()
  }

  criar(frm) {
    this.meuServicoService.adicionarContato(this.contato)
   // this.contatos = this.meuServicoService.getContatos()
  }




}


