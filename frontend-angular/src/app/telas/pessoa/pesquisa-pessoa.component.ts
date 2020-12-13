import { Component } from '@angular/core';
import { PesquisaBase } from 'src/app/components/pesquisa/pesquisa-base.component';
import { Entidade } from 'src/app/model/entidade-model';

@Component({
  selector: 'pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
})

export class PesquisaPessoaComponent extends PesquisaBase {

  entidade: Entidade = new Entidade("pessoas");

}
