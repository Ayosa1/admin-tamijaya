<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <img  src="https://www.tamijaya-transport.com/storage/app/public/img/logo20180222070320.png" alt="" style="width: 80px; margin-left: 60px;">
        <!-- <a href="?#/dashboard/dashboard"
           aria-label="sidebar mini logo"
           class="simple-text logo-mini"> -->
          <!-- <div class="logo-img"
               :class="{'logo-img-rtl': $rtl.isRTL}">
            <img
              src="/anime3.png"
              alt="">
          </div> -->
        
        <a href="?#/dashboard/dashboard" class="simple-text logo-normal" style="margin-left: 50px;">
          {{title}}
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="index"
                        :to="link.path"
                        :name="link.name"
                        :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
      <div> <button style="margin-left: 40px; margin-top: 16px;" @click="logout()" type="button" class="btn btn-success btn-sm">Logout</button> </div>
    </div>
  </div>
</template>
<script>
  import SidebarLink from "./SidebarLink";

  export default {
    props: {
      title: {
        type: String,
        default: "Tamijaya Bus"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
      activeColor: {
        type: String,
        default: "success",
        validator: value => {
          let acceptedValues = [
            "primary",
            "info",
            "success",
            "warning",
            "danger"
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose,
        addLink: this.addLink,
        removeLink: this.removeLink
      };
    },
    components: {
      SidebarLink
    },
    computed: {
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx() {
        return this.linkHeight * this.activeLinkIndex;
      },
      shortTitle() {
        return this.title.split(' ')
          .map(word => word.charAt(0))
          .join('').toUpperCase();
      }
    },
    data() {
      return {
        linkHeight: 65,
        activeLinkIndex: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        links: []
      };
    },
    methods: {
      findActiveLink() {
        this.links.forEach((link, index) => {
          if (link.isActive()) {
            this.activeLinkIndex = index;
          }
        });
      },
      addLink(link) {
        const index = this.$slots.links.indexOf(link.$vnode);
        this.links.splice(index, 0, link);
      },
      removeLink(link) {
        const index = this.links.indexOf(link);
        if (index > -1) {
          this.links.splice(index, 1);
        }
      },
      addLink(link) {
        const index = this.$slots.links.indexOf(link.$vnode);
        this.links.splice(index, 0, link);
      },
      logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.$router.push("/")
      },
      getset() {
        this.token=sessionStorage.getitem("TOKEN");
        if (this.token !=null){
          this.$router.push("?#/dashboard/dashboard");
        }
    },
    mounted() {
      this.getset();
      this.$watch("$route", this.findActiveLink, {
        immediate: true
      });
    }
  }
  };
</script>