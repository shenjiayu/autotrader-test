<template>
  <div id="app">
    <div>
      <img src="https://assets.autotrader.com.au/assets/nuxt/dist/client/img/ea21ef1.svg" width="200" />
    </div>
    <sub-header :payload="payload"></sub-header>
    <router-view @sub-header:update="subHeaderUpdate"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      payload: {}
    }
  },
  methods: {
    subHeaderUpdate: function(payload) {
      this.payload = payload;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
}

/** all util classes **/
.background-default {
  background-color: #e0e0e0;
}
.background-primary {
  background-color: red;
}
.background-dark {
  background-color: black;
}
.text-white {
  color: white;
}
.p-5 {
  padding: 5px;
}
.p-15 {
  padding: 15px;
}
.p-30 {
  padding: 30px;
}
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.w-100 {
  width: 100%;
}
</style>
