const app = Vue.createApp({
    //houses data, functions, methods
    //template: '<h2>I am the template</h2>' - used to inject into #app div on html page

    data() {
        return{
            isFlipped: false,
            showAnswer: false,
            questions: [
                { question:`What is 76 - 33?`, 
                  answer:`43`, }
            ]
        }
    },

    methods: {
        toggleShowAnswer() {
            this.showAnswer = !this.showAnswer
        },
        toggleFlip() {
            this.isFlipped = !this.isFlipped
        }
    }
})



app.mount('#app')