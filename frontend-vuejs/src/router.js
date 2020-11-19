import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    
    {
        path: "/pessoas/cadastro/:id",
        component: () => import("./telas/pessoas/Cadastro")
    },
    {
      path: "/pessoas/cadastro",
      component: () => import("./telas/pessoas/Cadastro")
    },
    {
        path: "/pessoas/pesquisa",
        component: () => import("./telas/pessoas/Pesquisa")
    },


    {
      path: "/produtos/cadastro/:id",
      component: () => import("./telas/produtos/Cadastro")
    },
    {
      path: "/produtos/cadastro",
      component: () => import("./telas/produtos/Cadastro")
    },
    {
        path: "/produtos/pesquisa",
        component: () => import("./telas/produtos/Pesquisa")
    },


  ]
}); 