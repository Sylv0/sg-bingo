<template>
  <div class="container">
    <ul class="grid">
      <li class="grid-item" v-for="(item, index) in items" @click="$emit('updateItem', index)" v-bind:key="index"
        :class="{ selected: item.selected, bingo: isBingo(index) }">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { indexToCoordinates } from '@/utils/itemUtils';

export default {
  name: "GameBoard",
  props: ["items", "bingos"],
  emits: ["updateItem"],
  methods: {
    isBingo(index) {
      const [x, y] = indexToCoordinates(index);
      return this.bingos.row.has(y) || this.bingos.column.has(x);
    }
  },
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
  background: rgb(131, 205, 227);
}

.grid-item:hover {
  background-color: #99a;
}

.grid-item.selected:hover {
  background-color: rgb(179, 225, 233);
}

.grid-item.bingo {
  background-color: rgb(67, 228, 113);
}
</style>
