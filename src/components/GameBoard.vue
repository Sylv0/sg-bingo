<template>
  <div class="container">
    <ul class="grid">
      <li
        class="grid-item"
        v-for="(item, index) in items"
        @click="updateItem(index)"
        v-bind:key="index"
        :class="{ selected: item.selected }"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { squad as data } from "../assets/data.json";
import { getItems } from "../utils/itemUtils";
export default {
  name: "GameBoard",
  data() {
    return {
      items: getItems(data)
    };
  },
  methods: {
    updateItem(item) {
      console.log("Test", item);
      const { value, selected } = this.items[item];
      this.items[item] = { value, selected: !selected };
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 800px;
  list-style: none;
  padding: 0;
}
.grid-item {
  aspect-ratio: 1;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #aab;
  border: 0.1rem solid #223;
  box-sizing: border-box;
  user-select: none;
  padding: 1rem;
}
.grid-item.selected {
  background: #bdc;
}
.grid-item:hover {
  background-color: #99a;
}
.grid-item.grid-item.selected:hover {
  background-color: #ced;
}
</style>
