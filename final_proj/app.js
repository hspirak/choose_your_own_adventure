//array of chapters in chronological order
const chapters = ["There once was an island full of shiny rocks. Some were pink, some were blue, and some were the color of clouds. These unnatural rocks were glistening off the west shore as my boat crashed onto the sand. Temporarily distracted from my shipwreck, I gather some of the rocks into my boat to take as a keepsake. I start to assess my boat for damage. There appeared to be a gash in the floor, but I thought I should be able to patch it easily. Suddenly, my thoughts were interuppted by a bright glow in the corner of my eye. It was coming from the rock. Startled, I decided to ", "I suspected I was not alone on this island, but no one was in sight. I began searching the shore for driftwood, keeping an eye out for any visitors. As I walked, I noticed the sand was strangely cool for such a sunny day. A log floating in the water caught my eye. As I approached, I heard a voice. Immediately, I ", "'I thought you were Paula? Who are you?', the man asked me. He then began surveying me and my ship. And why did you"];
//list of choices (3 per chapter), in chronological order
const choices =["throw the rock in the sea", "throw it in my pocket so that I do not cause attention", "add more of these rocks to my collection", "ran without looking back", "turned around", "stayed put and asked him to state his name"];
//list of effect in array pos that correspondes with the choice that caused it
const effects = ["throw our precious rocks?", "steal our rocks and hide it in your pocket?", "hide our rocks in your boat?", "The man chased after me.", "The man looked surprised to see me.", "The man said his name was Robert." ]

document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: "#app",
		template: `<div id="app">

        <div class="chapter"><a id="chapter1">CHAPTER {{chapter}}</a></div>
        <div class="options">
        <div class="story">
        <div class="show">{{effect}}</div>.
        {{story}}  
            <div class="show">{{choice}}{{effect2}}</div>.

        </div>
        <button v-on:click="choose(choice1, 1)" class="choice">{{choice1}}</button>
        <button v-on:click="choose(choice2, 2)" class="choice">{{choice2}}</button>
        <button v-on:click="choose(choice3, 3)" class="choice">{{choice3}}</button>
        
        </div>
        <button v-on:click="next_chapter" id="continue">Continue</button>
        </div>
        `,
        

        methods: {
            choose(word, number) {
                this.choice = word;
                if(this.chapter < this.limit)
                {
                    document.querySelector("#continue").style.visibility = "visible";
                    var n = (this.chapter*3)-1;
                    if(number == 2) {
                        n = n-1;
                    }
                    if(number == 1) {
                        n = n-2;
                    }
                    this.change[this.chapter] = effects[n];
                }
            },

            next_chapter () {

                    document.querySelector("#continue").style.visibility = "hidden";
                    this.ch = this.chapter;
                    this.chapter +=1;
                    var num = (this.chapter*3)-1;
                    this.chosen = false;
                    this.story = chapters[this.ch];
                    this.choice1 = choices[num-2];
                    this.choice2 = choices[num-1];
                    this.choice3 = choices[num];
                    this.choice = "...";
                    document.querySelector(`#c${this.chapter}`).className = "fas fa-lock-open";
                    document.querySelector(`#l${this.chapter}`).style.color= "white";

                    if(this.chapter == this.limit)
                    {
                        this.choice = "";
                        //this effect occurs in chapter 2
                        this.effect = this.change[2];
                        //this effect occurs in chapter 1
                        this.effect2 = this.change[1];
                        for (let el of document.querySelectorAll('.choice')) el.style.visibility = 'hidden';
                    }
            }      
        },
        data() {
			return {
                chapter: 1,
                limit: 3,
                choice1: choices[0],
                choice2: choices[1],
                choice3: choices[2],
                choice: "...",
                effect: "",
                effect2: "",
                story: chapters[0],
                change: []
            }
        }

    })



})
