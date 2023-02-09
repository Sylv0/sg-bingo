<template>
  <header id="primary-header"><h1>SG Bingo</h1></header>
  <main id="primary-main">
    <section><GameBoard></GameBoard></section>
  </main>
  <footer><p>Svenska Gamers Squad Bingo</p></footer>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
export default {
  name: "App",
  components: {
    GameBoard
  }
};
</script>

<style scoped>
@import "./style/App.css";
</style>
