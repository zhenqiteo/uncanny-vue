<template>
  <div id="nav">
    <router-link to="/about">About</router-link> |
    <router-link to="/work">Work</router-link> |
    <router-link to="/">UNCANNY</router-link> 
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: "Gellix", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  pointer-events: none;
}

#nav {
  padding: 30px;
  @include child-events-on();

  a {
    font-weight: bold;
    color: hsl(0, 0%, 0%);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
