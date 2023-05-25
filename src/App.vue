<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <router-view/>
  
  <img 
    src="./assets/logo.png" 
    alt="Vue Logo"
    class="logo"
  >

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo{
  position: fixed;
  bottom: 20px;
  right: 12px;
  width: 100px;
}
</style>
