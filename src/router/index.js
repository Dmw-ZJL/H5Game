import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/index.vue"
import GameBox from "../views/gameBox/index.vue"
import HomeTemplate from "../views/home-template/index.vue"
import GetStar from "../views/gameBox/getStar/index.vue"

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const gameBoxRouter = [
  {
    path: "/gameBox/getStar",
    name: "getStar",
    component: GetStar,
  }
]

export const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
        {
          path: "",
          name: "home-template",
          component: HomeTemplate,
        },
        {
          path: "gameBox",
          name: "gameBox",
          component: GameBox,
        },
        ...gameBoxRouter
      ]
    },
  ],
});
