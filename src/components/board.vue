<template>
  <div class="frame" :style="{ '--columns': columns }">
    <column v-for="i in columns"
            :key="i"
            :rows="rows"
            :columnIndex="i - 1"
            :disks="disks[i - 1]"
            @emptyClick="handleClick"
            :hoverColor="nextColor"
    />
  </div>
</template>

<script setup lang="ts">
import Column from "./column.vue";
import {ref} from "vue";
import type {DiskColor} from "./disk.vue";

interface Props {
  rows: number;
  columns: number;
}
const props = defineProps<Props>()

const disks = ref<Array<Array<DiskColor>>>(Array.from({ length: props.columns }, () => []));
let nextColor = ref<'red' | 'blue'>('red')

function handleClick(columnIndex: number) {
  if (disks.value[columnIndex].length < props.rows) {
    disks.value[columnIndex].push(nextColor.value);
    switchColor();
  }
}

function switchColor() {
  nextColor.value = nextColor.value === 'red' ? 'blue' : 'red';
}

</script>

<style scoped>
.frame {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  border: 2px black solid;
}

</style>