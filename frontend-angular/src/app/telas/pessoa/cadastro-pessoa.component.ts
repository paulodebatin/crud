import { Component } from '@angular/core';
import { CadastroBase } from 'src/app/components/cadastro/cadastro-base.component';
import { Entidade } from 'src/app/model/entidade-model'


@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
})
export class CadastroPessoaComponent extends CadastroBase {

  entidade: Entidade = new Entidade("pessoas");

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
