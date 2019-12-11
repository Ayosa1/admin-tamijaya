<template>
    <div class="content">
      <fade-transition :duration="100" mode="out-in">
        <h1 style="color: white;">dsfsdfsdfdsfdsfsdfsdfsfdsfdsfdrghfgasfsdfdsfsf</h1>
        <router-view></router-view>
      </fade-transition>
    </div>
  </template>
  <script>
    import {FadeTransition} from 'vue2-transitions';
    export default {
      components: {
        FadeTransition
      }
    };
  </script>
  