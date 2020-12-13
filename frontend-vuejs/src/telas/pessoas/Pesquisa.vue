<template v-slot:gridResultado>
  <div id="frmPessoaSel">
      <PesquisaComponent :entidade="entidade" @atualizacao-entidade="atualizaEntidade">

        <template slot="definicaoTituloTela">Pesquisa de pessoas</template>
        <template slot="definicaoBotoesPersonalizados"></template>
        <template slot="definicaoLinksPersonalizados"></template>
        <template slot="camposFiltro"></template>  

        <template slot="tabelaResultado"> 
          <table  class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Endereço</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="item in entidade.dados" v-bind:key="item.id">
                  <td><a :href="'/' +  entidade.nome  + '/cadastro/' + item.id">{{ item.id }}</a></td>
                  <td>{{ item.nome }}</td>
                  <td>{{enderecoCompleto(item)}}</td>
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
        nome: "pessoas",
        dados: [] 
      }
    }  
  },

  methods: {
    atualizaEntidade (dados) {
      this.entidade.dados = dados 
    }
  },

   computed: {
     enderecoCompleto: () => (item) => {
       var endereco = '';
       if  (item.endereco != undefined) endereco = item.endereco;
       if  (item.numero != undefined) endereco = endereco + ', ' + item.numero;
       if  (item.bairro != undefined) endereco = endereco + ' - ' + item.bairro;
       return endereco;
     }

   }  
}
</script>



<style>
</style>
