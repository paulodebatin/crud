<template>
  <div class="crud">

    <div id="divMensagens">
      <div class="alert alert-primary" v-if="mensagemSucesso != ''" role="alert" id="div_mensagemSucesso">{{mensagemSucesso}}</div>
      <div class="alert alert-danger" v-if="mensagemErro != ''" role="alert" id="div_mensagemErro" >{{mensagemErro}}</div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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



    <div id="barraBotoes">
      <button type="button" id="btnGravar" class="btn btn-primary" @click="gravar">Gravar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
      <button type="button" id ="btnClonar" v-if="estadoFormulario == 'EDICAO'" class="btn btn-primary" @click="clonar">Clonar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovaPesquisa" class="btn btn-primary" @click="novaPesquisa">Nova pesquisa</button>&nbsp;&nbsp;
      <button type="button" id="btnExcluir" v-if="estadoFormulario == 'EDICAO'" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Excluir</button>
      <hr/>
    </div> 
  </div>
</template>

<script>
  import CrudService from "../services/CrudService"
 
  export default {
    name: 'CadastroComponent',
    props: {
      entidade: {},
      nomeEntidade: String
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
        CrudService.delete(this.nomeEntidade, this.entidade.id)
        this.novo() 

        this.mensagemSucesso = "Registro excluído com sucesso!";
        this.setarFoco();
      },

      gravar: function() {
        this.limparMensagem();
        if  (this.estadoFormulario == "INSERCAO") {
            CrudService.create(this.nomeEntidade,this.entidade).then(response => {
              this.$emit('atualizacao-entidade',response.data)
            })  
        } else {
            CrudService.update(this.nomeEntidade,this.entidade.id, this.entidade)
        }
        this.estadoFormulario="EDICAO"
        this.mensagemSucesso = "Registro gravado com sucesso!";
      },

      clonar: function() {
        this.limparMensagem();
        this.entidade.id = "";
        this.estadoFormulario="INSERCAO"
        this.$emit('atualizacao-entidade',this.entidade)

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
        this.$router.push('/' + this.nomeEntidade + 'sel')
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
          CrudService.get(this.nomeEntidade,id).then(response => {
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
  #barraBotoes {
    text-align: center;
  }
</style>
