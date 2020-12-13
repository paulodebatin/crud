import { Component } from '@angular/core';
import { CadastroBase } from 'src/app/components/cadastro/cadastro-base.component';
import { Entidade } from 'src/app/model/entidade-model'


@Component({
  selector: 'cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
})
export class CadastroProdutoComponent extends CadastroBase {

  entidade: Entidade = new Entidade("produtos");

  
  

}
