'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        document.querySelector('.message').textContent = 'No number entered!';
    }
    else if(guess==secretnumber){
        document.querySelector('.message').textContent = 'correctnumber';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
       
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
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    
})
