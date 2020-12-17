import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Entidade } from 'src/app/model/entidade-model'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pesquisa-base',
  templateUrl: './pesquisa-base.component.html',
  styles: ['#barraBotoesPesquisa {text-align: right;}']
})

export class PesquisaBase implements OnInit {

    @Input()
    entidade: Entidade;

    crudService: CrudService;

    constructor(protected router: Router, protected http: HttpClient) { }

    ngOnInit(): void {
       this.crudService = new CrudService(this.entidade, this.http);
       this.pesquisar();
      }

    novo(): void {
        this.router.navigate([this.entidade.getLinkCadastro()]);
    }

    pesquisar(): void {
        this.antesPesquisar();
        this.crudService.getAll().subscribe(
          data => {
            this.entidade.dados = data;
            this.aposPesquisar();
          },
          error => {
            console.log(error);
          });
    }


    antesPesquisar(): void {}
    aposPesquisar(): void {}



}


