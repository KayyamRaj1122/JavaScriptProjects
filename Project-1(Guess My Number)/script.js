'use strict';

const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score=20;
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        document.querySelector('.message').textContent = 'No number entered!';
    }
    else if(guess==secretnumber){
        document.querySelector('.message').textContent = 'correctnumber';
        document.querySelector('body').style.backgroundColor='#60b347';
    }
    else if(guess>secretnumber){
        if(score>0){
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost the game'
        }

    }
    else if(guess<secretnumber){
        if(score>0){
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent=score;

    }
    else{
        document.querySelector('.message').textContent='You Lost the game'
    }
}
   
});
