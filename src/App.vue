<template>
  <header id="primary-header">
    <h1>SG Bingo</h1>
    <button @click="newGame">New game</button>
  </header>
  <main id="primary-main">
    <section>
      <GameBoard :items="items" :bingos="bingos" @update-item="updateItem"></GameBoard>
    </section>
  </main>
  <footer id="primary-footer">
    <p>Svenska Gamers Squad Bingo</p>
  </footer>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
import data from "./assets/data.json";
import { coordinatesToIndex, getItems, indexToCoordinates, } from "./utils/itemUtils";
export default {
  name: "App",
  components: {
    GameBoard
  },
  data() {
    return {
      items: [],
      bingos: { row: new Set(), column: new Set() },
    };
  },
  methods: {
    newGame() {
      this.items = getItems([...data.squad]);
    },
    updateItem(item) {
      const { value, selected } = this.items[item];
      this.items[item] = { value, selected: !selected };
      this.checkForBingo(item, !selected);
    },
    checkForBingo(index, selected) {
      // Get coordinates for the item [x, y]
      const [x, y] = indexToCoordinates(index);

      const rowIndecies = []
      const columnIndecies = []

      if (selected) {
        for (let i = 0; i < 5; i++) {
          const row = coordinatesToIndex(i, y)
          if (this.items[row].selected) {
            rowIndecies.push(row)
          }
          const column = coordinatesToIndex(x, i)
          if (this.items[column].selected) {
            columnIndecies.push(column)
          }
        }
        if (rowIndecies.length === 5) {
          this.bingos.row.add(y)
        }
        if (columnIndecies.length === 5) {
          this.bingos.column.add(x)
        }
      } else {
        this.bingos.row.delete(y)
        this.bingos.column.delete(x)
      }
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
