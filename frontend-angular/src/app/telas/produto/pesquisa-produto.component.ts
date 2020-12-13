import { Component } from '@angular/core';
import { PesquisaBase } from 'src/app/components/pesquisa/pesquisa-base.component';
import { Entidade } from 'src/app/model/entidade-model';

@Component({
  selector: 'pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
})

export class PesquisaProdutoComponent extends PesquisaBase {

  entidade: Entidade = new Entidade("produtos");

}
