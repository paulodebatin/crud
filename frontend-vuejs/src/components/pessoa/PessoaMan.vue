<template>
  <div id="frmPessoaMan">
    <CrudComponent :entidade="entidade" @atualizacao-entidade="atualizaEntidade"/>

    <div id="crudCampos">
      <div class="form-group">
        <label for="id">Id</label>
        <input
          class="form-control"
          id="id"
          required
          v-model="entidade.id"
          name="id"
        />
      </div>
      
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          class="form-control"
          id="nome"
          required
          v-model="entidade.nome"
          name="nome"
        />
      </div>

    </div>

  </div>
</template>

<script>
import CrudComponent from '../CrudComponent.vue'

export default {
  name: 'App',
  components: {
    CrudComponent
  },

  data() {
    return {
      entidade: {}
         
    }  
  },

  methods: {
    atualizaEntidade (dados) {
      this.entidade = dados 
    }
  }  
}
</script>

<style>

</style>
