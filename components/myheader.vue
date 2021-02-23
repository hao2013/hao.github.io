
<template>
  <div>
    <b-navbar class="nav-fix" toggleable="lg" type="white" variant="white">
      <b-navbar-brand tag="h1" type="dark" class="mr-4 site_name"
        ><a href="/">Hao's Portfolio Site</a></b-navbar-brand
      >
      <b-navbar-toggle target="navbar-toggle-collapse" class="bg-light">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="under-color nav-link text-dark" to="/"
            >TOP</router-link
          >
          <router-link class="under-color nav-link text-dark" to="/about"
            >ABOUT</router-link
          >
          <router-link class="under-color nav-link text-dark" to="/works"
            >WORKS</router-link
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>



<style scoped>
.site_name a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
.site_name a:hover {
  color: #00c850;
}

.nav-fix {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
}
.under-color {
  font-size: 18px;
  padding: 10px;
  margin: 0 20px;
}
.under-color:hover {
  background: linear-gradient(transparent 90%, #00ffc4 0);
}
</style>
