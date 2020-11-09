<template>
  <div class="pesquisa">

    <div class="alert alert-success" role="alert" id="div_mensagens" style="display: none;"/>

    <div id="barraBotoes">
      <button type="submit" id="btnPesquisar" class="btn btn-primary" @click="pesquisar">Pesquisar</button>&nbsp;&nbsp;
      <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
    </div> 
    <br/>
  </div>
</template>

<script>
  import CrudService from "../services/CrudService"
 
  export default {
    name: 'CrudComponent',
    props: {
      nomeEntidade: String
    },

    methods: {
      pesquisar: function() {
        CrudService.getAll(this.nomeEntidade).then(response => {
            this.$emit('atualizacao-entidade',response.data)
        })   
      },

      novo: function() {
        this.$router.push(`/${this.nomeEntidade}cad`)
      }
    },

   mounted () {
     this.pesquisar()
   },
    
  }
  


  

</script>



<style scoped>
  #barraBotoes {
    text-align: center;
  }
</style>
