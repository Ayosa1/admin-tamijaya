import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue"; 
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
// import loginlay from "@/layout/dashboard/login_layout.vue";
// import regley from "@/layout/dashboard/register_layout.vue";

import login from "@/pages/login.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const bookingbus = () => import(/* webpackChunkName: "common" */ "@/pages/bookingbus.vue");
const pesantiket = () => import(/* webpackChunkName: "common" */ "@/pages/tiketbus.vue");
const loginlay = () => import(/* webpackChunkName: "common" */ "@/pages/login_layout.vue");
const regley = () => import(/* webpackChunkName: "common" */ "@/pages/register_layout.vue");
// const login = () => import(/* webpackChunkName: "common" */ "@/auth/login.vue");
const jadwal = () => import(/* webpackChunkName: "common" */ "@/pages/jadwal.vue");
const perjalanan = () => import(/* webpackChunkName: "common" */ "@/pages/perjalanan.vue");
const pembayaran = () => import(/* webpackChunkName: "common" */ "@/pages/transaksi.vue");
const armada = () => import(/* webpackChunkName: "common" */ "@/pages/armada.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Laporanperjalanan = () => import(/* webpackChunkName: "common" */ "@/pages/laporanperjalanan.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: loginlay,
    children:[
      {
        path: "login",
        name: "login",
        component: login
      },
    ]
  },
  {
    path: "/reg",
    name: "register",
    component: regley,
    children:[
      {
        path: "register",
        name: "register",
        component: login
      },
    ]
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    name: "dashboard",
    redirect: "/log",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "Laporanperjalanan",
        name: "Laporanperjalanan",
        component: Laporanperjalanan
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "bookingbus",
        name: "bookingbus",
        component: bookingbus
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "jadwal",
        name: "jadwal",
        component: jadwal
      },
      {
        path: "pesantiket",
        name: "pesantiket",
        component: pesantiket
      },
      {
        path: "pembayaran",
        name: "pembayaran",
        component: pembayaran
      },
      {
        path: "perjalanan",
        name: "perjalanan",
        component: perjalanan
      },
      {
        path: "armada",
        name: "armada",
        component: armada
      },
    ]
  },

  { path: "*", component: NotFound },
];


/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
