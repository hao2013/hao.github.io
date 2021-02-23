<template>
  <div id="app">
    <myheader></myheader>
    <vue-canvas-nest
      :config="{ color: '255,0,0', opacity: 0.7, count: 99 }"
    ></vue-canvas-nest>
    <router-view />
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "./components/myheader";
import myfooter from "./components/myfooter";
import vueCanvasNest from "vue-canvas-nest";

export default {
  name: "App",
  components: {
    myheader,
    myfooter,
    vueCanvasNest,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
