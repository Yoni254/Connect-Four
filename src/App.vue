<template>
	<h1>Connect 4</h1>
	<div class="center">
		<Board :rows="6" :columns="7"/>
	</div>
</template>

<script setup lang="ts">
import Board from './components/board.vue';
</script>

<style scoped>
.center {
	display: flex;
	place-items: center;
	justify-content: center;
}
</style>
