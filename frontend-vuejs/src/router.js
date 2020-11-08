import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/pessoas/:id",
        component: () => import("./components/pessoa/PessoaMan")
    },
    {
        path: "/pessoas",
        component: () => import("./components/pessoa/PessoaMan")
    },


  ]
}); 