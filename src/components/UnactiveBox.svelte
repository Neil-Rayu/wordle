<script>
	export let letter = null;
</script>

{#if letter != null}
	<div class="input-box">{letter}</div>
{:else}
	<div class="input-box" />
{/if}

<style>
	.input-box {
		height: 75px;
		width: 75px;
		outline: 1px black solid;
		display: flex;
	}
</style>
