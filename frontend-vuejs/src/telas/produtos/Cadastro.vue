<template>
  <div id="frmPessoaMan">
    <form>
      <CadastroComponent :entidade="entidade"  @atualizacao-entidade="atualizaEntidade"/>


      <div id="crudCampos">
        <div class="form-row">
            <div class="form-group col-md-10 required">
                <label for="nome">Nome</label>
                <input class="form-control" id="nome" required v-model="entidade.dados.nome" placeholder="Nome" name="nome"/>
            </div>
        </div>      
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="quantidade">Quantidade</label>
                <input class="form-control" id="quantidade" v-model="entidade.dados.quantidade" placeholder="Quantidade" name="quantidade"/>
            </div>
            <div class="form-group col-md-6">
                <label for="preco">Preço</label>
                <input class="form-control" id="preco" v-model="entidade.dados.preco" placeholder="Preço" name="preco">
            </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CadastroComponent from '../../components/CadastroComponent.vue'

export default {
  name: 'App',
  components: {
    CadastroComponent
  },

  data() {
    return {
      entidade: {
        nome: "produtos",
        dados: {}

      },
      value: null
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
