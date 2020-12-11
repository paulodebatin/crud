import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Entidade } from 'src/app/entidade-model'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pesquisa-base',
  templateUrl: './pesquisa-base.html',
  styles: ['#barraBotoesPesquisa {text-align: right;}']
})

export class PesquisaBase implements OnInit {

    @Input() 
    entidade: Entidade;

    crudService: CrudService;

    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
       this.crudService = new CrudService(this.entidade.nome, this.http);
       this.pesquisar();
      }

    novo(): void {
        this.router.navigate([`/${this.entidade.nome}/cadastro`]);
    }

    pesquisar(): void {
        this.crudService.getAll().subscribe(
          data => {
            this.entidade.dados = data;
          },
          error => {
            console.log(error);
          });
    }

}


