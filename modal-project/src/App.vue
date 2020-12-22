<template>
  <h3>{{ title }}</h3>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'Some title',
    }
  }
}
</script>

<style>
#app {
  background-color: bisque;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  border-bottom: 1px solid #ccc;
  text-transform: uppercase;
}
</style>
