import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastroBase } from './components/cadastro/cadastro-base.component';
import { PesquisaBase } from './components/pesquisa/pesquisa-base.component';

import { PesquisaPessoaComponent } from './telas/pessoa/pesquisa-pessoa.component';
import { CadastroPessoaComponent } from './telas/pessoa/cadastro-pessoa.component';

import { PesquisaProdutoComponent } from './telas/produto/pesquisa-produto.component';
import { CadastroProdutoComponent } from './telas/produto/cadastro-produto.component';

import { HttpConfigInterceptor } from './interceptors/HttpConfigInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CadastroBase,
    PesquisaBase,
    PesquisaPessoaComponent,
    CadastroPessoaComponent,
    PesquisaProdutoComponent,
    CadastroProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
