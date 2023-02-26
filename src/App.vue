<template>
  <header id="primary-header">
    <h1>SG Bingo</h1>
    <button @click="newGame">New game</button>
  </header>
  <main id="primary-main">
    <section>
      <GameBoard :items="items" @update-item="updateItem"></GameBoard>
    </section>
  </main>
  <footer id="primary-footer"><p>Svenska Gamers Squad Bingo</p></footer>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
import data from "./assets/data.json";
import { getItems } from "./utils/itemUtils";
export default {
  name: "App",
  components: {
    GameBoard
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    newGame() {
      this.items = getItems([...data.squad]);
    },
    updateItem(item) {
      const { value, selected } = this.items[item];
      this.items[item] = { value, selected: !selected };
    }
  },
  mounted() {
    this.newGame();
  }
};
</script>

<style scoped>
@import "./style/App.css";

h1 {
  color: #bbb;
}
p {
  color: #aaa;
}
</style>
