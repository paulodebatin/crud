import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/pessoasman/:id",
        component: () => import("./components/pessoa/PessoaMan")
    },
    {
      path: "/pessoasman",
      component: () => import("./components/pessoa/PessoaMan")
    },
    {
        path: "/pessoassel",
        component: () => import("./components/pessoa/PessoaSel")
    },


  ]
}); 