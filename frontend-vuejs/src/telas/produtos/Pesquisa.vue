<template v-slot:gridResultado>
  <div id="frmProdutoSel">
      <PesquisaComponent :entidade="entidade" @atualizacao-entidade="atualizaEntidade">

        <template slot="definicaoTituloTela">Pesquisa de produtos</template>
        <template slot="definicaoBotoesPersonalizados"></template>
        <template slot="definicaoLinksPersonalizados"></template>
        <template slot="camposFiltro"></template>  
        <template slot="tabelaResultado"> 
          <table  class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Preco</th>
                <th scope="col">Quantidade</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="item in entidade.dados" v-bind:key="item.id">
                  <td><a :href="'/' +  entidade.nome  + '/cadastro/' + item.id">{{ item.id }}</a></td>
                  <td>{{ item.nome }}</td>
                  <td>{{ item.quantidade }}</td>
                  <td>{{ item.preco }}</td>
                </tr>
            </tbody>    
          </table>
        </template>

      </PesquisaComponent>       
  </div>  
</template>

<script>
import PesquisaComponent from '../../components/PesquisaComponent.vue'

export default {
  name: 'App',
  components: {
    PesquisaComponent
  },

  data() {
    return {
      entidade: {
        nome: "produtos",
        dados: [] 
      }
    }  
  },

  methods: {
    atualizaEntidade (dados) {
      this.entidade.dados = dados 
    }
  }

}
</script>



<style>
</style>
