<script>
	import { letterBoard } from '../stores/wordStore';

	import { onMount } from 'svelte';

	export let row;
	export let column;
	export let letter;
	let box;
	let colorBlind = false;
	let state = 0;
	$: state = $letterBoard[row][column].state;
	//$: console.log(state);

	//$: letter = letterBoard[row][column].letter;

	$: if ($letterBoard[row][column].correct == 1) {
		box.style.backgroundColor = '#fcff00';
		console.log($letterBoard[row][column].correct);
	} else if ($letterBoard[row][column].correct == 2) {
		box.style.backgroundColor = '#54d02f';
	}
</script>

{#if state === 1}
	<div class="input-box" bind:this={box}>
		<input type="text" bind:value={letter} />
	</div>
{:else}
	<div class="input-box" bind:this={box}>
		<span>{letter}</span>
	</div>
{/if}

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
