<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-if="showModal">
      <Modal theme="sail" @close="toggleModal">
          <template v-slot:links>
            <a href="#">signup</a>
            <a href="#">Lobin</a>
          </template>
          <h3>This is heder for slot</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet perspiciatis quis sequi ut beatae labore assumenda! Culpa, pariatur ex cumque facilis provident, ipsa saepe tenetur magni reprehenderit quo reiciendis necessitatibus odit. Itaque blanditiis ut sapiente iste maxime quis quia cumque. Autem consectetur assumenda beatae porro quod rerum nihil optio.</p>
      </Modal>
    </div>
    <button @click="toggleModal">Show Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Some title",
      label: "Enter something",
      header: "Login to view!",
      text: "Veri interesting...",
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
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
.active {
  background-color: brown;
  color: white;
}
</style>
