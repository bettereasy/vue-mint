import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/home/index";
import Invest from "@/pages/invest/invest";
import Find from "@/pages/find/find";
import Me from "@/pages/my/me";
import Footer from "@/components/footer/footer2";
import Banner from "@/components/banner/banner";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/invest",
      name: "Invest",
      component: Invest
    },
    {
      path: "/find",
      name: "Find",
      component: Find
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer
    },
    {
      path: "/banner",
      name: "Banner",
      component: Banner
    }

  ]
});
