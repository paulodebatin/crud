<template>
  <div class="crud">
    <div id="barraBotoes">
      <button type="button" id="btnGravar" class="btn btn-primary" @click="gravar">Gravar</button>&nbsp;&nbsp;
      <button type="button" id ="btnClonar" class="btn btn-primary" @click="clonar">Clonar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
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
      },

      clonar: function() {
        this.entidade.id = "";
        this.$emit('atualizacao-entidade',this.entidade)
        this.estadoFormulario="INSERCAO"
      },

      novo: function() {
        this.$emit('atualizacao-entidade',{})
        this.estadoFormulario="INSERCAO"
      },

      novaPesquisa: function() {
        console.log("novaPesquisa ainda não implementado")
      },
    },

   mounted () {
      let id = this.$route.params.id
      this.estadoFormulario="INSERCAO"
      if  (id != undefined) {
          CrudService.get(id).then(response => {
              this.$emit('atualizacao-entidade',response.data)
              this.estadoFormulario="EDICAO"

            }).catch(error => {
              console.log(error)
              

            }).finally(() => {
              this.loading = false
            })
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
