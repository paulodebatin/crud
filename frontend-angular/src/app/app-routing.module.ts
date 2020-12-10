import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './components/pessoa/pesquisa.component';
import { CadastroComponent } from './components/pessoa/cadastro.component';

const routes: Routes = [
  
  { path: 'pessoas/pesquisa', component: PesquisaComponent },
  { path: 'pessoas/cadastro', component: CadastroComponent },
  { path: 'pessoas/cadastro/:id', component: CadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
