//HelloWorld.vue
<script>
export default {
	data() {
		return {
			message: 'Ciao Mondo!'
		}
	},
	computed: {
		reversedMessage() {
			return this.message.split('').reverse().join('')
		}
	},
	methods: {
		greet() {
			alert(this.message)
		}
	}
}
</script>

<template>
	<div>
		<h1>{{ reversedMessage }}</h1>
		<button v-on:click="greet">Saluta</button>
	</div>
</template>