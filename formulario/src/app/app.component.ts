import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MeuServicoService } from './meu-servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  contatos: Array<any>;
  contato: any;

  constructor(private meuServicoService: MeuServicoService) { }

  ngOnInit() {

    this.contato = {
      nome: "",
      email: ""
    }
    this.meuServicoService.getContatos().subscribe(result => {
      this.contatos = result
    })
  }

  criar(frm) {
    this.meuServicoService.adicionarContato(this.contato).subscribe(resposta => {
      this.contatos.push(resposta)
      frm.reset()
    })
  }




}


