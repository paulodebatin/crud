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
  //import CrudService from "../services/CrudService"
  

  export default {
    name: 'CrudComponent',
    props: {
      entity: Object
    },

    methods: {
      excluir: function() {
        if  (confirm("Confirma a exclusão?")) {
            console.log("Confirmado")
        }

      },

      gravar: function() {
        console.log("gravar");
      },

      clonar: function() {
        console.log("clonar")
      },

      novo: function() {
        console.log("novo")
      },

      novaPesquisa: function() {
        console.log("novaPesquisa")
      },
    },

   
    
   data() {
    return {
      //entidade: {}
    }  
  }
  


  }

</script>



<style scoped>
  #barraBotoes {
    text-align: center;
  }
</style>
