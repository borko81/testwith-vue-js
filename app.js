const app = Vue.createApp({
	data() {
		return {
			title: 'Test title',
			author: 'Borko St',
			age: 39,
			showContent: true,
			message: '',
			//li form
			todos: [
				{text: 'First todo'},
				{text: 'Second todo'},
				{text: 'Last todo'}
			],
			//message from time of a day
			hours: new Date().getHours(),
			path: location.pathname,
		}
	}, 
	methods: {
		changeTitle() {
			this.showContent = !this.showContent
		},
	}
})

app.mount("#app")