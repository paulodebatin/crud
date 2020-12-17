<template>
  <div class="pesquisa">

     <form  @submit.prevent="pesquisar">

        <div class="alert alert-success" role="alert" id="div_mensagens" style="display: none;"/>

        <div class="form-row">
            <div class="col-md-2">
                <p class="h4 text-primary"><slot name="definicaoTituloTela"></slot></p> 
            </div>
            <div class="col-md-10" id="barraBotoesPesquisa" style="text-align: right; ">
                <button type="submit" id="btnPesquisar" class="btn btn-primary">Pesquisar</button>&nbsp;&nbsp;
                <button type="button" id="btnNovo" class="btn btn-primary" @click="novo">Novo</button>&nbsp;&nbsp;
                <slot name="definicaoBotoesPersonalizados"></slot>
            </div> 
        </div>    
        <hr/>

        <slot name="definicaoLinksPersonalizados"></slot>


        <slot name="camposFiltro"></slot>
        
        <slot name="tabelaResultado">
            <slot name="cabecalho"></slot>
        </slot>
        
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabIndex="-1">Anterior</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Próximo</a>
            </li>
          </ul>
        </nav>

     </form>
  </div>
</template>

<script>
  import CrudService from "../services/CrudService"
 
  export default {
    name: 'CrudComponent',
    props: {
      entidade: {}
    },

    created() {
        this.CrudService = new CrudService(this.entidade.nome);
    },

    methods: {
      pesquisar: function() {
        this.pesquisarAntes();
        this.CrudService.getAll().then(response => {
            this.$emit('atualizacao-entidade',response.data)
            this.pesquisarApos();
        })   
      },

      pesquisarAntes() {},
      pesquisarApos() {},

      novo: function() {
        this.$router.push(`/${this.entidade.nome}/cadastro`)
      }
    },

   mounted () {
     this.pesquisar()
   },

  
    
  }
  


  

</script>



<style scoped>
  #barraBotoesPesquisa {
    text-align: right;
  }
</style>
