<script>
	import UnactiveBox from '../components/UnactiveBox.svelte';
	import GuessBox from '../components/GuessBox.svelte';
	import { englishWords, setCorrect } from '../stores/wordStore';
	let rowLevel = 0;
	let letters = [
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', '']
	];
	let index = [0, 1, 2, 3, 4];

	let answer = ['P', 'O', 'W', 'E', 'R'];
	function onClick() {
		//console.log(letters[rowLevel].join().toLowerCase());
		let index = 0;
		if (englishWords.includes(letters[rowLevel].join('').toLowerCase())) {
			letters[rowLevel].forEach((element) => {
				if (answer[index] === element) {
					setCorrect(rowLevel, index, 2);
				} else if (answer.includes(element)) {
					setCorrect(rowLevel, index, 1);
				}
				index++;
			});
		}
		//rowLevel++;
	}
</script>

<div class="container">
	<header>
		<h1>Wordle</h1>
	</header>
	<div class="guessess">
		{#each { length: 5 } as _, i}
			<div class="row">
				{#if i == rowLevel}
					{#each { length: 5 } as _, j}
						<GuessBox bind:letter={letters[i][j]} bind:column={index[j]} bind:row={rowLevel} />
					{/each}
					<!-- {:else if i < rowLevel}
					{#each { length: 5 } as _, j}
						<UnactiveBox bind:letter={letters[i][j]} />
					{/each} -->
				{:else}
					{#each { length: 5 } as _, x}
						<UnactiveBox />
					{/each}
				{/if}
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
