const app = Vue.createApp({ 
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
            chosenSet: {question: `Click New Question to Begin!`}
        }
    },

    methods: {
        toggleShowAnswer() {
            this.showAnswer = !this.showAnswer
        },
        toggleFlip() {
            this.isFlipped = !this.isFlipped
        },
        markRead(){
            this.chosenSet.display = false
            console.log(this.chosenSet)
        },
        randomSet(){
            var chosenNumber = Math.floor(Math.random() * this.filteredSet.length);
            return this.chosenSet = this.filteredSet[chosenNumber];
        }
    },
    computed: {
        filteredSet(){
            return this.quiz.filter((quiz) => quiz.display)
        }
    }
})

app.mount('#app')