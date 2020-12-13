export class Entidade {
  nome: any;
  dados: any = {};


  constructor(nome: any, dados: any = []) {
    this.nome = nome;
    this.dados = dados;
   }

   getLinkCadastro(): String {
     return `/${this.nome}/cadastro`;
   }

   



  } 