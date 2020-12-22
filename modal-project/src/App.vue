<template>
<div>
    <h3>{{ title }}</h3>
    <Modal />
</div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Some title',
      label: 'Enter something',
    }
  },
  methods: {
    
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
