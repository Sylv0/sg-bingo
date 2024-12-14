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
import { coordinatesToIndex, getItems, indexToCoordinates, isLeftToRight, isRightToLeft, } from "./utils/itemUtils";
export default {
  name: "App",
  components: {
    GameBoard
  },
  data() {
    return {
      items: [],
      bingos: { row: new Set(), column: new Set(), leftToRight: false, rightToLeft: false },
    };
  },
  methods: {
    newGame() {
      this.items = getItems([...data.squad]);
      this.bingos.column.clear();
      this.bingos.row.clear();
    },
    updateItem(item) {
      const { value, selected } = this.items[item];
      this.items[item] = { value, selected: !selected };
      this.checkForBingo(item, !selected);
      this.updateBoardStates()
    },
    checkForBingo(index, selected) {
      // Get coordinates for the item [x, y]
      const [x, y] = indexToCoordinates(index);

      const rowIndecies = []
      const columnIndecies = []
      const rightToLeftIndecies = []
      const leftToRightIndecies = []

      const leftToRight = isLeftToRight(index)
      const rightToLeft = isRightToLeft(index)

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
          if (leftToRight && this.items[6 * i].selected) {
            leftToRightIndecies.push(6 * i)
          }
          if (rightToLeft && this.items[4 * i + 4].selected) {
            rightToLeftIndecies.push(4 * i + 4)
          }
        }
        if (rowIndecies.length === 5) {
          this.bingos.row.add(y)
        }
        if (columnIndecies.length === 5) {
          this.bingos.column.add(x)
        }
        if (leftToRightIndecies.length === 5) {
          this.bingos.leftToRight = true
        }
        if (rightToLeftIndecies.length === 5) {
          this.bingos.rightToLeft = true
        }
      } else {
        this.bingos.row.delete(y)
        this.bingos.column.delete(x)

        if (leftToRight) {
          this.bingos.leftToRight = false
        }
        if (rightToLeft) {
          this.bingos.rightToLeft = false
        }
      }
    },
    updateBoardStates() {
      for (const item in this.items) {
        const [x, y] = indexToCoordinates(item)
        const l2r = isLeftToRight(item) && this.bingos.leftToRight
        const r2l = isRightToLeft(item) && this.bingos.rightToLeft
        this.items[item].bingo = this.bingos.row.has(y) || this.bingos.column.has(x) || l2r || r2l
      }
    },
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
