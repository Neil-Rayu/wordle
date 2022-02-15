<script>
	import { correct } from '../stores/wordStore';

	import { onMount } from 'svelte';

	export let letter;
	export let row;
	export let column;
	let box;
	let colorBlind = false;

	$: if ($correct[row][column] != 0) {
		if ($correct[row][column] == 1) {
			box.style.backgroundColor = '#fcff00';
			console.log('jelel');
		} else if ($correct[row][column] == 2) {
			box.style.backgroundColor = '#54d02f';
		}
	}
</script>

<div class="input-box" bind:this={box}>
	<input type="text" bind:value={letter} />
</div>

<style>
	.input-box {
		height: 75px;
		width: 75px;
		outline: 1px black solid;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	input {
		width: 40px;
		height: 40px;
	}
</style>
