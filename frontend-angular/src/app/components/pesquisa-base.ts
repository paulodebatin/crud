import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Entidade } from 'src/app/entidade-model'


@Component({
  selector: 'pesquisa-base',
  templateUrl: './pesquisa-base.html',
  styles: ['#barraBotoesPesquisa {text-align: right;}']
})

export class PesquisaBase implements OnInit {

    @Input() 
    entidade: Entidade;

    constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

    ngOnInit(): void {
       this.pesquisar();
      }

    novo(): void {
        this.router.navigate(['/pessoas/cadastro']);
    }

    pesquisar(): void {
        this.crudService.getAll()
        .subscribe(
          data => {
            this.entidade.dados = data;
          },
          error => {
            console.log(error);
          });
    }

}


