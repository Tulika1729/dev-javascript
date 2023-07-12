"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct number";

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value = 23 //setting input ele value
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0;
console.log("number:",number);
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(score > 0){
        if(!guess){
            document.querySelector('.message').textContent = "No number found!!" 
        }else if(guess === number){
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').style.color = "pink";
            if(score > highScore){
                console.log("scores:",score, highScore);
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if(guess !== number){
            document.querySelector('.message').textContent = number < guess ? "Number too high" : "Number too low";
            score --;
            document.querySelector('.score').textContent = score;
        }
            document.querySelector(".again").addEventListener('click', function() {
            score = 20;
            document.querySelector('.message').textContent = "Start guessinhg";
            document.querySelector('body').style.backgroundColor = "white";
            document.querySelector('.guess').value = ""

        })
    } else if(score === 0){
        document.querySelector('.message').textContent = "You lost the game";
    }
});