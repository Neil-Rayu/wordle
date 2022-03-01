<script>
	import GuessBox from '../components/GuessBox.svelte';
	import { setCorrect, setActiveRow, guessRow } from '../stores/wordStore';
	let index = [0, 1, 2, 3, 4];
	let letters = [
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', '']
	];
	function onClick() {
		//console.log(letters[rowLevel].join().toLowerCase());
		console.log(letters);
		guessRow(letters);
	}
</script>

<div class="container">
	<header>
		<h1>Wordle</h1>
	</header>
	<div class="guessess">
		{#each { length: 5 } as _, i}
			<div class="row">
				{#each Array(5) as _, j}
					<GuessBox bind:column={index[j]} bind:row={index[i]} bind:letter={letters[i][j]} />
				{/each}
			</div>
		{/each}
	</div>
	<button on:click={onClick} value="Submit" name="Submit">Submit</button>
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: 1fr 8fr 1fr 0.5fr;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'guesses'
			'button';
	}
	header {
		grid-area: header;
	}
	.guessess {
		grid-area: guesses;
	}
	button {
		grid-area: button;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 5px;
		padding-bottom: 5px;
	}
</style>
