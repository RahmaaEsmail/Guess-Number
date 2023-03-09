let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;

const sameScore = function() {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
}

const scoreFun = function(guess) {
    if(guess !== secretNumber ) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High" : "📉 Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "😥 You lost the game";
        }
    }
}

document.querySelector(".check").addEventListener("click",()=>{
    const guessNumber = Number(document.querySelector(".guess").value);
    if(!guessNumber) {
        document.querySelector(".message").textContent = "⛔ No Number";
    }

    else if(guessNumber === secretNumber) {
       sameScore();
    }
    else {
        scoreFun(guessNumber)
    }

})

// reset game
document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".guess").value = null;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?"
    document.querySelector('.score').textContent = score;
    document.querySelector(".message").textContent = "Start guessing...."
})