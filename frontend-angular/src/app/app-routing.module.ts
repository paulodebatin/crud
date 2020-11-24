import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from '../telas/pessoas/cadastro.component';
import { PesquisaComponent } from '../telas/pessoas/pesquisa.component';



const routes: Routes = [
  { path: 'pessoas/cadastro', component: CadastroComponent },
  { path: 'pessoas/cadastro/:id', component: CadastroComponent },
  { path: 'pessoas/pesquisa', component: PesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
