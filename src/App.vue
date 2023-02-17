<template>
  <header id="primary-header"><h1>SG Bingo</h1></header>
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
      items: getItems(data.squad)
    };
  },
  methods: {
    updateItem(item) {
      const { value, selected } = this.items[item];
      this.items[item] = { value, selected: !selected };
    }
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
