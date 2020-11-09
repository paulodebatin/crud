<template>
  <div id="frmPessoaMan">
    <form>
      <CadastroComponent :entidade="entidade" nomeEntidade="pessoas" @atualizacao-entidade="atualizaEntidade"/>

      <div id="crudCampos">
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="id">Id</label>
                <input class="form-control" id="id" disabled="true" v-model="entidade.id" name="id"/>
            </div>
            <div class="form-group col-md-10">
                <label for="nome">Nome</label>
                <input class="form-control" id="nome" required v-model="entidade.nome" placeholder="Nome" name="nome"/>
            </div>
        </div>      
        <div class="form-row">
            <div class="form-group col-md-10">
                <label for="endereco">Endereço</label>
                <input class="form-control" id="endereco" v-model="entidade.endereco" placeholder="Endereço" name="endereco"/>
            </div>
            <div class="form-group col-md-2">
                <label for="numero">Número</label>
                <input class="form-control" id="numero" v-model="entidade.numero" placeholder="Número" name="numero">
            </div>
        </div>

        <div class="form-group">
          <label for="bairro">Bairro</label>
          <input
            class="form-control"
            id="bairro"
            v-model="entidade.bairro"
            placeholder="Bairro"
            name="bairro"
          />
        </div>

        <div class="form-group">
          <label for="cidade">Cidade</label>
          <input
            class="form-control"
            id="cidade"
            v-model="entidade.cidade"
            placeholder="Cidade"
            name="cidade"
          />
        </div>


        <div class="form-group">
          <label for="uf">Uf</label>
          <input
            class="form-control"
            id="uf"
            v-model="entidade.uf"
            placeholder="Uf"
            name="uf"
          />
        </div>


      </div>
    </form>
  </div>
</template>

<script>
import CadastroComponent from '../CadastroComponent.vue'

export default {
  name: 'App',
  components: {
    CadastroComponent
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
