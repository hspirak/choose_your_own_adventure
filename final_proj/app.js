document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: "#app",
		template: `<div id="app">

        <div class="chapter"><a id="chapter1">CHAPTER {{chapter}}</a></div>
        <div class="options">
        <div class="story">
        {{story}}  
            <div id="show">{{choice}}{{effect}}</div>.

        </div>
        <button v-on:click="choose(choice1)" class="choice">{{choice1}}</button>
        <button v-on:click="choose(choice2)" class="choice">{{choice2}}</button>
        <button v-on:click="choose(choice3)" class="choice">{{choice3}}</button>
        
        </div>
        <button v-on:click="next_chapter" id="continue">Continue</button>
        </div>
        `,
        

        methods: {
            choose(word) {
                this.choice = word;
                if(this.chapter < this.limit)
                {
                    document.querySelector("#continue").style.visibility = "visible";
                }
            },

            next_chapter () {

                    this.chapter +=1;
                    document.querySelector("#continue").style.visibility = "hidden";
                    this.chosen = false;
                    this.story = "New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words. New words "
                    this.choice1 = "new choice";
                    this.choice2 = "new choice";
                    this.choice3 = "new choice";
                    this.choice = "...";
                    document.querySelector(`#c${this.chapter}`).className = "fas fa-lock-open";
                    document.querySelector(`#l${this.chapter}`).style.color= "white";

                    if(this.chapter == 5)
                    {
                        this.choice = "";
                        this.effect = "she found the treasure!"
                        for (let el of document.querySelectorAll('.choice')) el.style.visibility = 'hidden';
                    }
            }      
        },
        data() {
			return {
                chapter: 1,
                limit: 5,
                choice1: "jump",
                choice2: "run",
                choice3: "swim",
                choice: "...",
                effect: "",
                story: "Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. Here are some words. She decided to "
            }
        }

    })



})
