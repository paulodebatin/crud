<template>
  <div class="crud">

    <div class="alert alert-success" role="alert" id="div_mensagens" style="display: none;"/>

    <div id="barraBotoes">
      <button type="button" id="btnGravar" class="btn btn-primary" @click="gravar">Gravar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
      <button type="button" id ="btnClonar" class="btn btn-primary" @click="clonar">Clonar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovaPesquisa" class="btn btn-primary" @click="novaPesquisa">Nova pesquisa</button>&nbsp;&nbsp;
      <button type="button" id="btnExcluir" class="btn btn-danger" @click="excluir"> Excluir</button>
      <hr/>
    </div> 
  </div>
</template>

<script>
  import CrudService from "../services/CrudService"
 
  export default {
    name: 'CrudComponent',
    props: {
      entidade: {}
    },

    methods: {
      excluir: function() {
        if  (confirm("Confirma a exclusão?")) {
            CrudService.delete(this.entidade.id)
            this.novo() 

            this.emitirEmensagemSucesso("Registro excluído com sucesso!");
            this.setarFoco();
            this.controlarBotoes();
        }

      },

      gravar: function() {
        if  (this.estadoFormulario == "INSERCAO") {
            CrudService.create(this.entidade).then(response => {
              this.$emit('atualizacao-entidade',response.data)
            })  
        } else {
            CrudService.update(this.entidade.id, this.entidade)
        }
        this.estadoFormulario="EDICAO"

        this.emitirEmensagemSucesso("Registro gravado com sucesso!");
        this.controlarBotoes();
      },

      clonar: function() {
        this.entidade.id = "";
        this.estadoFormulario="INSERCAO"
        this.$emit('atualizacao-entidade',this.entidade)

        this.emitirEmensagemSucesso("Registro clonado com sucesso!");
        this.setarFoco();
        this.controlarBotoes();

      },

      novo: function() {
        this.estadoFormulario="INSERCAO"
        this.$emit('atualizacao-entidade',{})

        this.limparMensagem();
        this.setarFoco();
        this.controlarBotoes();
        
      },

      novaPesquisa: function() {
        this.$router.push('/pessoassel')
      },


      setarFoco: function() {
        document.getElementsByTagName("input")[1].focus();  
      },

      emitirEmensagemSucesso: function(msg) {
         document.getElementById("div_mensagens").style="display: block"
         document.getElementById("div_mensagens").innerHTML=msg; 
      },

      limparMensagem: function() {
        document.getElementById("div_mensagens").style="display: none;"
        document.getElementById("div_mensagens").innerHTML=""  
      },

      controlarBotoes: function() {
        if  (this.estadoFormulario == "EDICAO") {
            document.getElementById("btnExcluir").style="display: inline"
            document.getElementById("btnClonar").style="display: inline"
        } else {
            document.getElementById("btnExcluir").style="display: none;"
            document.getElementById("btnClonar").style="display: none;"

        }
      }
    },

   mounted () {
      let id = this.$route.params.id

      if  (id != undefined) {
          CrudService.get(id).then(response => {
              this.$emit('atualizacao-entidade',response.data)
              this.estadoFormulario="EDICAO"
              this.controlarBotoes();
            }).catch(error => {
              this.estadoFormulario="INSERCAO"
              this.controlarBotoes();
              console.log(error)
              

            }).finally(() => {
              this.loading = false
            })
      } else {
         this.estadoFormulario="INSERCAO"
         this.controlarBotoes();
      }
     
   },
    
   data() {
    return {
      estadoFormulario: ""
    }  
  }
  


  }

</script>



<style scoped>
  #barraBotoes {
    text-align: center;
  }
</style>
