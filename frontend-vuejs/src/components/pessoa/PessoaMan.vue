<template>
  <div id="frmPessoaMan">
    <CrudComponent :entity="entidade"/>

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
import CrudService from "../../services/CrudService"

export default {
  name: 'App',
  components: {
    CrudComponent
  },

  mounted () {
      let id = this.$route.params.id
      if  (id != undefined) {
          console.log(id)
          CrudService.get(id).then(response => {
              console.log(response.data)
              this.entidade = response.data
            }).catch(error => console.log(error))
          .finally(() => this.loading = false)
      }
   },
 

  data() {
    return {
      entidade: {}
         
    }  
  }
}
</script>

<style>

</style>
