<template>
  <div class="wrapper">
    <!-- <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/bookingbus" :name="$t('Data Bookingbus')" icon="tim-icons icon-book-bookmark"/> 
        <sidebar-link to="/pembayaran" :name="$t('Data Pembayaran')" icon="tim-icons icon-coins"/>
        <sidebar-link to="/jadwal" :name="$t('jadwal')" icon="tim-icons icon-calendar-60"/>
        <sidebar-link to="/armada" :name="$t('Armada')" icon="tim-icons icon-bus-front-12"/>
        <sidebar-link to="/perjalanan" :name="$t('Perjalanan')" icon="tim-icons icon-map-big"/>

      </template>
    </side-bar> -->
    <div class="main-panel">
      <!-- <top-navbar></top-navbar> -->

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
// import TopNavbar from "./TopNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
// import MobileMenu from "./MobileMenu";
export default {
  components: {
    // TopNavbar,
    // ContentFooter,
    DashboardContent,
    // MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
