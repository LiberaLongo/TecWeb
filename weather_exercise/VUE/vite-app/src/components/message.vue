<template>
	<div>
		<p>{{ message }}</p>
		<button v-on:click="changeMessage">Cambia Messaggio</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Ciao Mondo!'
		}
	},
	methods: {
		changeMessage() {
			this.message = 'Nuovo Messaggio!'
		}
	}
}
</script>