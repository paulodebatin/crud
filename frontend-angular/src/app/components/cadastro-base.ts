import { Component, OnInit, Input, Output } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Entidade } from 'src/app/entidade-model'


@Component({
  selector: 'cadastro-base',
  templateUrl: './cadastro-base.html',
  styles: ['#barraBotoesCadastro {text-align: right;}']
})

export class CadastroBase implements OnInit {

    @Input() 
    @Output()
    entidade: Entidade;

    estadoFormulario: any;
    mensagemErro: any = '';
    mensagemSucesso: any = '';
    

    constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

    ngOnInit(): void {
        this.estadoFormulario = "INSERCAO"
        let id = this.route.snapshot.paramMap.get('id');
        if  (id) {
            this.carregarEntidade(id)
        }    
        
    }

    carregarEntidade(id): void {
        this.crudService.get(id).subscribe(
            data => {
                this.entidade.dados = data;
                this.estadoFormulario = "EDICAO"
            },
            error => {
                console.log(error);
                if  (error.status = 404) {
                    this.mensagemErro="Registro não encontrado com id: " + id;
                } else {
                    console.log(error);
                    this.mensagemErro="Erro ao carregar registro com id: " + id + ". Erro: " + error.statusText;

                }    
            }
        );

    }

    gravar(): void {
        this.limparMensagem();
        if  (this.estadoFormulario == "INSERCAO") {
            this.crudService.create(this.entidade.dados).subscribe(
                data => {
                    this.entidade.dados = data;
                    this.estadoFormulario="EDICAO";
                    this.mensagemSucesso = "Registro gravado com sucesso!";
                },
                error => {
                    console.log(error);
                    this.mensagemErro="Erro ao gravar novo registro. Erro: " + error.statusText;
                }
            )
            
        } else {
            this.crudService.update(this.entidade.dados.id, this.entidade.dados).subscribe(
                data => {
                    this.mensagemSucesso = "Registro gravado com sucesso!"
                },
                error => {
                    console.log(error);
                    this.mensagemErro="Erro ao atualizar registro. Erro: " + error.statusText;
                }
            )
        }
        
    }

    limparMensagem(): void {
        this.mensagemSucesso="";
        this.mensagemErro="";
    }

    novo(): void {
        this.limparMensagem();
        this.estadoFormulario="INSERCAO";
        this.entidade.dados = {};
        this.setarFoco();
    }

    setarFoco(): void {
        document.getElementsByTagName("input")[1].focus();  
    }

    excluir(): void {
        this.limparMensagem();
        this.crudService.delete(this.entidade.dados.id).subscribe(
            data => {
                this.novo() 
                this.mensagemSucesso = "Registro excluído com sucesso!";
                this.setarFoco();
            },
            error => {
                console.log(error);
                this.mensagemErro="Erro ao excluir registro. Erro: " + error.statusText;
            }
        )
    }
    

    clonar(): void {
        this.limparMensagem();
        this.entidade.dados.id = "";
        this.estadoFormulario="INSERCAO"
        this.mensagemSucesso = "Registro clonado com sucesso!";
        this.setarFoco();
    }

    novaPesquisa(): void {
        this.router.navigate(['/pessoas/pesquisa']);
    }
}


