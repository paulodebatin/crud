<template>
  <div id="frmPessoaSel">
    <form>
      <PesquisaComponent nomeEntidade="pessoas" @atualizacao-entidade="atualizaEntidade"/>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in entidade" v-bind:key="item.id">
            <td><a :href="'pessoascad/' + item.id">{{ item.id }}</a></td>
            <td>{{ item.nome }}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import PesquisaComponent from '../PesquisaComponent.vue'

export default {
  name: 'App',
  components: {
    PesquisaComponent
  },

  data() {
    return {
      entidade: []
         
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
