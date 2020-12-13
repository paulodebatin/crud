import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaPessoaComponent } from './telas/pessoa/pesquisa-pessoa.component';
import { CadastroPessoaComponent } from './telas/pessoa/cadastro-pessoa.component';
import { PesquisaProdutoComponent } from './telas/produto/pesquisa-produto.component';
import { CadastroProdutoComponent } from './telas/produto/cadastro-produto.component';

const routes: Routes = [
  
  { path: 'pessoas/pesquisa', component: PesquisaPessoaComponent },
  { path: 'pessoas/cadastro', component: CadastroPessoaComponent },
  { path: 'pessoas/cadastro/:id', component: CadastroPessoaComponent },

  { path: 'produtos/pesquisa', component: PesquisaProdutoComponent },
  { path: 'produtos/cadastro', component: CadastroProdutoComponent },
  { path: 'produtos/cadastro/:id', component: CadastroProdutoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
