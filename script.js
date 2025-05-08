document.addEventListener('DOMContentLoaded', () => {
    displayQuote(currentCategory, currentIndex);
})

//theme toggle
let darkMode = localStorage.getItem("darkMode");
const themeToggle = document.getElementById("toggle");

if(darkMode === "active"){
    enableDarkMode();
}

themeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})

function enableDarkMode(){
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "active");
}

function disableDarkMode(){
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
}

//quotes
const quotes ={
    science:[
        {
            text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author: "- Albert Einstein"
        },
        {
            text: "I have not failed. I've just found 10,000 ways that won't work.",
            author: "- Thomas Edison"
        },
        {
            text: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
            author: "- Stephen Hawking"
        },
        {
            text: "The good thing about science is that it's true whether or not you believe in it.",
            author: "- Neil deGrasse Tyson"
        },
        {
            text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
            author: "- Edwin Hubble"
        }
    ],
    friendship:[
        {
            text: "Friends are born, not made.",
            author: "- Henry Adams"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "- John Lennon"
        },
        {
            text: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
            author: "- J.R.R. Tolkien"
        },
        {
            text: "A real friend is one who walks in when the rest of the world walks out.",
            author: "- Walter Winchell"
          },
        {
            text: "Friendship is the only cement that will ever hold the world together.",
            author: "- Woodrow Wilson"
        }
    ],
    spirituality:[
        {
            text: "Make your own Bible. Select and collect all the words and sentences that in all your readings have been to you like the blast of a trumpet.",
            author: "- Ralph Waldo Emerson"
        },
        {
            text: "You can safely assume you've created God in your own image when it turns out that God hates all the same people you do.",
            author: "- Anne Lamott"
        },
        {
            text: "Happiness is not something ready made. It comes from your own actions.",
            author: "- Dalai Lama"
        },
        {
            text: "The privilege of a lifetime is to become who you truly are.",
            author: "- Carl Jung"
        },
        {
            text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
            author: "- Caroline Myss"
        }
    ]
}

let currentCategory = 'friendship';
let currentIndex = 0;
let currentFontSize = 2;

const categorySelect = document.getElementById("categorySelect");
const randomBtn = document.getElementById("randomBtn");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const increaseFontSize = document.getElementById("increaseFontSize");
const decreaseFontSize = document.getElementById("decreaseFontSize");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");

nextBtn.addEventListener("click", getNextQuote);
previousBtn.addEventListener("click", getPreviousQuote);
randomBtn.addEventListener("click", getRandomQuote);
categorySelect.addEventListener("change", selectCategory);
increaseFontSize.addEventListener("click", increaseFont);
decreaseFontSize.addEventListener("click", decreaseFont);

displayQuote(currentCategory, currentIndex);
function displayQuote(category, index){
    debugger;
    const quote = quotes[category][index];
    quoteText.style.fontSize = `${currentFontSize}rem`;
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
}

function getNextQuote(){
    currentIndex++;
    if(currentIndex > quotes[currentCategory].length - 1){
        currentIndex = 0;
    }
    displayQuote(currentCategory,currentIndex);
}

function getPreviousQuote(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = quotes[currentCategory].length - 1;
    }
    displayQuote(currentCategory, currentIndex);
}

function getRandomQuote(){
   const randomIndex = Math.floor(Math.random() * quotes[currentCategory].length);
   displayQuote(currentCategory, randomIndex);
}

function selectCategory(){
    currentCategory = categorySelect.value;
    currentIndex = 0;
    displayQuote(currentCategory, currentIndex);
}

function increaseFont(){
    debugger;
    currentFontSize += 0.2;
    displayQuote(currentCategory, currentIndex);
}

function decreaseFont(){
    debugger;
    currentFontSize -= 0.2;
    displayQuote(currentCategory, currentIndex);
}



