'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);


//gameScript:
//define the secret number
let secretNumber = Math.trunc(Math.random()*21)
console.log(secretNumber);
let score = 20;

//selectTheCheckButtonAndAddEventListener
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
      //When input is empty
        document.querySelector('.message').textContent = 'no number!'
        setTimeout(function(){
            document.querySelector('.message').textContent = 'start guessing ...'
        }, 2000);        
        //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct number!'

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
     document.querySelector('.number').textContent=secretNumber

    }else if(guess > secretNumber){
     //When guess is too high
       if(score > 1){
            document.querySelector('.message').textContent = 'Too high!'   
            score--
            document.querySelector('.score').textContent = score} else {
               document.querySelector('.message').textContent = 'game over'   
           }
    }else if(guess < secretNumber){
       //When guess is too low
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!'   
            score--
            document.querySelector('.score').textContent = score} else {
               document.querySelector('.message').textContent = 'game over'   
            }
        }
    })
    
    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*21)
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.message').textContent = 'Start guessing...'  
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = ''
 

})
