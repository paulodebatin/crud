import { Component } from '@angular/core';
import { Entidade } from 'src/app/entidade-model'


@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {

  entidade: Entidade = new Entidade();

  paises = [
      { id: '1', nome: 'Blumenau',},
      { id: '2', nome: 'Gaspar'},
      { id: '3', nome: 'Indaial'},
      { id: '4', nome: 'Brusque'}
  ]

  ufs = [
    { id: '1', nome: 'Santa Catarina',},
    { id: '2', nome: 'Paraná'},
    { id: '3', nome: 'Rio grande do Sul'},
  ]

}
