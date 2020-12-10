import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './components/pessoa/pesquisa.component';
import { CadastroComponent } from './components/pessoa/cadastro.component';
import { CadastroBase } from './components/cadastro-base';
import { PesquisaBase } from './components/pesquisa-base';


@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    CadastroComponent,
    CadastroBase,
    PesquisaBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
