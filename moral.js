const app = Vue.createApp({
	data () {
		return {
			color: ['Rex', 'Rover', 'Henrietta', 'Alan'],
			averageRent: {
				london: 16500,
				vepingrad: 100,
				paris: 10003,
			},
			showdata: true,
			suma: 0,
			url: "https://google.bg"
		}
	}, 
	methods: {
		sum() {
			for (let i of Object.values(this.averageRent) ){
				this.suma += i
			}
		},
		handleEvents(e, data) {
			console.log(e, e.type)
			if (data) {
				console.log(data)
			}
		},
		showMeData() {
			this.showdata = !this.showdata
		}
	}
});

app.mount("#app");
