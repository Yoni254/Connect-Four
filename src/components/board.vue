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
import {checkWin} from '../logic';
import type {Columns} from '../logic';


interface Props {
	rows: number;
	columns: number;
}

const props = defineProps<Props>()

const disks = ref<Columns>(Array.from({length: props.columns}, () => []));
let nextColor = ref<'red' | 'blue'>('red')

function initGame() {
	disks.value = Array.from({length: props.columns}, () => [])
}

function handleClick(columnIndex: number) {
	if (disks.value[columnIndex].length < props.rows) {
		disks.value[columnIndex].push(nextColor.value);
	}

	if (checkWin(disks.value)) {
		alert(`${nextColor.value} wins!`);
		initGame()
	} else if (disks.value.every((column) => column.length === props.rows)) {
		alert('It\'s a draw!');
		initGame()
	}

	switchColor();
}

function switchColor() {
	nextColor.value = nextColor.value === 'red' ? 'blue' : 'red';
}

initGame();

</script>

<style scoped>
.frame {
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	border: 2px black solid;
}

</style>