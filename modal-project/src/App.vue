<template>
  <h3>{{ title }}</h3>
  {{ label }} <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'Some title',
      label: 'Enter something',
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  },
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
.active {
  background-color: brown;
  color: white;
}
</style>
