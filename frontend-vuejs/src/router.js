import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/pessoascad/:id",
        component: () => import("./components/pessoa/PessoaCad")
    },
    {
      path: "/pessoascad",
      component: () => import("./components/pessoa/PessoaCad")
    },
    {
        path: "/pessoassel",
        component: () => import("./components/pessoa/PessoaSel")
    },


  ]
}); 