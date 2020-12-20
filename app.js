const app = Vue.createApp({
	data() {
		return {
			title: 'Test title',
			author: 'Borko St',
			age: 39,
			showContent: true,
		}
	}, 
	methods: {
		changeTitle() {
			this.showContent = !this.showContent
		}
	}
})

app.mount("#app")