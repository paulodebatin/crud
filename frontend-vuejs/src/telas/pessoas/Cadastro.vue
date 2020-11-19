<template>
  <div id="frmPessoaMan">
    <form>
      <CadastroComponent :entidade="entidade"  @atualizacao-entidade="atualizaEntidade"/>

      <div id="crudCampos">
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="id">Id</label>
                <input class="form-control" id="id" disabled="true" v-model="entidade.dados.id" name="id"/>
            </div>
            <div class="form-group col-md-10 required">
                <label for="nome">Nome</label>
                <input class="form-control" id="nome" required v-model="entidade.dados.nome" placeholder="Nome" name="nome"/>
            </div>
        </div>      
        <div class="form-row">
            <div class="form-group col-md-10">
                <label for="endereco">Endereço</label>
                <input class="form-control" id="endereco" v-model="entidade.dados.endereco" placeholder="Endereço" name="endereco"/>
            </div>
            <div class="form-group col-md-2">
                <label for="numero">Número</label>
                <input class="form-control" id="numero" v-model="entidade.dados.numero" placeholder="Número" name="numero">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-10">
              <label for="bairro">Bairro</label>
              <input
                class="form-control"
                id="bairro"
                v-model="entidade.dados.bairro"
                placeholder="Bairro"
                name="bairro"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="cep">Cep</label>
              <input
                class="form-control"
                id="cep"
                v-model="entidade.dados.cep"
                placeholder="Cep"
                name="cep"
              />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="cidade">Cidade</label>
              <select id="cidade" class="form-control"  v-model="entidade.dados.cidade">
                <option value="1">Blumenau</option>
                <option value="2">Gaspar</option>
                <option value="3">Indaial</option>
                <option value="4">Brusque</option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <label for="uf">Uf</label>
              <select id="uf" class="form-control"  v-model="entidade.dados.uf">
                <option value="1">Santa Catarina</option>
                <option value="2">Paraná</option>
                <option value="3">Rio Grande do Sul</option>
              </select>
            </div>
        </div>   

        <div class="form-row">
            <div class="form-group col-md-4">
              <label for="dataNascimento">Data de nascimento</label>
              <input
                class="form-control"
                id="dataNascimento"
                v-model="entidade.dados.dataNascimento"
                placeholder="Data de nascimento"
                name="dataNascimento"
              />
            </div>
            <div class="form-group col-md-4">
                <label class="form-check-label" for="receberNoticias">Receber notícias</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="receberNoticias" v-model="entidade.dados.receberNoticias">
                </div>  
            </div>

            <div class="form-group col-md-4">
                 <label for="uf">Fumante:</label>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="fumante" id="fumanteSim" value="S" v-model="entidade.dados.fumante"> 
                <label class="form-check-label" for="fumanteSim">Sim</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="fumante" id="fumanteNao" value="N" v-model="entidade.dados.fumante">
                <label class="form-check-label" for="fumanteNao">Não</label>
              </div>

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
    CadastroComponent,
  },

  data() {
    return {
      entidade: {
        nome: "pessoas",
        dados: {}

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
