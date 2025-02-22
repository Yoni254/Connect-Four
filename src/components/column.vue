<template>
	<div class="column">
		<div class="background">
			<div class="square-with-hole" v-for="n in rows" :key="n"/>
		</div>
		<div class="disks">
			<Disk v-if="disks.length < rows"
				  color="empty"
				  :hover-color="hoverColor"
				  @click="handleClick"
			/>
			<Disk v-for="(disk, index) in computedDisks"
				  :key="`${disk}-${index}-${disks.length}`"
				  :color="disk"
				  :class="{ drop: index === 0 }"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import Disk from "./disk.vue";
import {computed} from "vue";
import type {DiskColor} from "../logic";


interface Props {
	rows: number;
	columnIndex: number;
	disks: DiskColor[];
	hoverColor?: 'red' | 'blue';
}

interface Emits {
	emptyClick: [number];
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const computedDisks = computed(() => {
	return props.disks.slice().reverse();
});

function handleClick() {
	emit('emptyClick', props.columnIndex);
}

</script>

<style scoped>
@keyframes drop {
	0% {
		top: -30em;
		opacity: 1;
	}
	100% {
		top: 0;
		transform: translateY(0);
		opacity: 1;
	}
}

.column {
	position: relative;
}

.background {
	position: relative;
}

.disks {
	position: absolute;
	bottom: 0.5em;
	left: 0.5em;
	z-index: 2;
}

.square-with-hole {
	width: 5em;
	height: 5em;
	background-color: black;
	position: relative;
}

.square-with-hole::before {
	content: '';
	width: 4em;
	height: 4em;
	background-color: var(--background-color);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
}

.drop {
	position: relative;
	animation: drop 0.5s ease-out;
}

</style>