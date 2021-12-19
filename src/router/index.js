import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GroupsIndex from "../views/GroupsIndex.vue";
import EventsIndex from "../views/EventsIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import GroupShow from "../views/GroupShow.vue";
import EventShow from "../views/EventShow.vue";
import GroupNew from "../views/GroupNew.vue";
import EventNew from "../views/EventNew.vue";
import GroupEdit from "../views/GroupEdit.vue";
import EventEdit from "../views/EventEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/groups", name: "groups-index", component: GroupsIndex },
  { path: "/events", name: "events-index", component: EventsIndex },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/groups/:id", name: "group-show", component: GroupShow },
  { path: "/events/:id", name: "event-show", component: EventShow },
  { path: "/group/new", name: "group-new", component: GroupNew },
  { path: "/groups/:id/events/new", name: "event-new", component: EventNew },
  { path: "/groups/:id/edit", name: "group-edit", component: GroupEdit },
  { path: "/events/:id/edit", name: "event-edit", component: EventEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
