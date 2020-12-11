import { Component } from '@angular/core';
import { Entidade } from 'src/app/entidade-model';

@Component({
  selector: 'pessoa-pesquisa',
  templateUrl: './pesquisa.component.html',
})
export class PesquisaComponent {

  entidade: Entidade = new Entidade("pessoas");
  
  
}
