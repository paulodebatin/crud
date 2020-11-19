<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cadastros
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/pessoas/pesquisa">Pessoa</a>
              <a class="dropdown-item" href="/produtos/pesquisa">Produto</a>
            </div>
          </li>
        </ul>
      </div>  
    </nav>

    <div class="mt-3">
        <router-view />
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
  
  }
  
}
</script>

<style>
#app {
  margin-top: 0px;
  margin-left:3px;
  margin-right: 5px;
}

.required label {
    font-weight: bold;
}
.required label:after {
    color: #e32;
    content: ' *';
    display:inline;
}




</style>
