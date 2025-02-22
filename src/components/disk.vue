<template>
	<div class="circle" :class="color" :style="{ '--hoverColor': hoverColor }">
		<p></p>
	</div>
</template>

<script setup lang="ts">
interface Props {
	color: 'red' | 'blue' | 'empty'
	hoverColor?: 'red' | 'blue';
}

defineProps<Props>()
</script>

<style scoped>
.circle {
	width: 4em;
	height: 4em;
	border-radius: 50%;
}

.red {
	background-color: red;
}

.blue {
	background-color: blue;
}

.empty {
	background-color: rgba(var(--background-color-rgb), 0.2);
	cursor: pointer;
}

.empty:hover {
	background-color: var(--hoverColor);
	opacity: 0.3;
}
</style>