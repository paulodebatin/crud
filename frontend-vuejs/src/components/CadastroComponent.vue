<template>
  <div class="crud">
    <form  @submit.prevent="gravar">
      <div id="divMensagens">
        <div class="alert alert-primary" v-if="mensagemSucesso != ''" role="alert" id="div_mensagemSucesso">{{mensagemSucesso}}</div>
        <div class="alert alert-danger" v-if="mensagemErro != ''" role="alert" id="div_mensagemErro" >{{mensagemErro}}</div>
      </div>


      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Confirmação</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Confirma a exclusão do registro?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="excluir">Sim</button>
            </div>
          </div>
        </div>
      </div>



      <div class="form-row">
          <div class="col-md-2"><p class="h4 text-primary"><slot name="definicaoTituloTela"></slot></p> </div>
          <div class="col-md-10" id="barraBotoesCadastro" style="text-align: right; ">
            <button type="submit" id="btnGravar" class="btn btn-primary">Gravar</button>&nbsp;&nbsp;
            <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
            <button type="button" id ="btnClonar" v-if="estadoFormulario == 'EDICAO'" class="btn btn-primary" @click="clonar">Clonar</button>&nbsp;&nbsp;
            <button type="button" id="btnNovaPesquisa" class="btn btn-primary" @click="novaPesquisa">Nova pesquisa</button>&nbsp;&nbsp;
            <button type="button" id="btnExcluir" v-if="estadoFormulario == 'EDICAO'" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Excluir</button>&nbsp;&nbsp;
            <slot name="definicaoBotoesPersonalizados"></slot>
          </div>
      </div>

        <hr/>

        <div>
          <slot name="definicaoLinksPersonalizados"></slot>
        </div>

         <slot name="definicacaoCampos"></slot>



    </form>
  </div>
</template>

<script>
  import CrudService from "../services/CrudService"
 
  export default {
    name: 'CadastroComponent',
    props: {
      entidade: {
        nome: String,
        dados: {}

      }
    },

    created() {
        this.CrudService = new CrudService(this.entidade.nome);
    },

    data() {
      return {
        estadoFormulario: "INSERCAO",
        mensagemSucesso: "",
        mensagemErro: ""
      }       
    },

    methods: {
      excluir: function() {
        this.limparMensagem();
        this.CrudService.delete(this.entidade.dados.id)
        this.novo() 

        this.mensagemSucesso = "Registro excluído com sucesso!";
        this.setarFoco();
      },

      gravar: function() {
        this.limparMensagem();
        if  (this.estadoFormulario == "INSERCAO") {
            this.CrudService.create(this.entidade.dados).then(response => {
              this.$emit('atualizacao-entidade',response.data)
            })  
        } else {
            this.CrudService.update(this.entidade.dados.id, this.entidade.dados)
        }
        this.estadoFormulario="EDICAO"
        this.mensagemSucesso = "Registro gravado com sucesso!";
      },

      clonar: function() {
        this.limparMensagem();
        this.entidade.dados.id = "";
        this.estadoFormulario="INSERCAO"
        this.$emit('atualizacao-entidade',this.entidade.dados)

        this.mensagemSucesso = "Registro clonado com sucesso!";
        this.setarFoco();
      },

      novo: function() {
        this.limparMensagem();
        this.estadoFormulario="INSERCAO"
        this.$emit('atualizacao-entidade',{})
        this.setarFoco();
      },

      novaPesquisa: function() {
        this.$router.push('/' + this.entidade.nome + '/pesquisa')
      },


      setarFoco: function() {
        document.getElementsByTagName("input")[1].focus();  
      },

      limparMensagem: function() {
        this.mensagemSucesso="";
        this.mensagemErro="";
      }

    },

   mounted () {
      let id = this.$route.params.id

      if  (id != undefined) {
          this.CrudService.get(id).then(response => {
              this.$emit('atualizacao-entidade',response.data)
              this.estadoFormulario="EDICAO"
            }).catch(error => {
              this.estadoFormulario="INSERCAO"
              console.log(error)
              

            }).finally(() => {
              this.loading = false
            })
      } else {
         this.estadoFormulario="INSERCAO"
      }
     
   }
  }

</script>



<style scoped>
  #barraBotoesCadastro {
    text-align: right;
  }


</style>
