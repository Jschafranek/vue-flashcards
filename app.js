const app = Vue.createApp({
    //houses data, functions, methods
    //template: '<h2>I am the template</h2>' - used to inject into #app div on html page

    data() {
        return{
            isFlipped: false,
            showAnswer: false,
            quiz: [
                {question:`What is 76 - 33?`, answer:`43`, display: true},
                {question:`How many legs does a dog have?`, answer:`4`, display: true },
                {question:`What city do we live in?`, answer:`Gilbert`, display: true },
                {question:`If you have 4 quarters, how many cents do you have?`, answer:`100`, display: true },
                {question:`How many cents are in $1`, answer:`100`, display: true },
                {question:`What is 208 + 54?`, answer:`262`, display: true },
            ],
            chosenSet: {}
        }
    },

    methods: {
        toggleShowAnswer() {
            this.showAnswer = !this.showAnswer
        },
        toggleFlip() {
            this.isFlipped = !this.isFlipped
        },
        randomSet(){
            var chosenNumber = Math.floor(Math.random() * this.quiz.length);
            return this.chosenSet = this.quiz[chosenNumber];
        },
        markRead(){
            this.chosenSet.display = false
            console.log(this.chosenSet)
        }
    },
    computed: {
        filteredSet(){
            return this.chosenSet = this.chosenSet.filter((quiz) => quiz.display)
        }
    }
})



app.mount('#app')