'use strict';

var acerto = Math.trunc(Math.random() * 20 + 1);
var pontuação = 20;
var recorde = 0;

document.querySelector('.check').addEventListener('click', function(){

  var chute = document.querySelector('.guess').value;

  if(chute == acerto){

    document.querySelector('.message').textContent = '🎉 Parabéns, você acertou!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = acerto;

    if(pontuação > recorde){
      recorde = pontuação;
      document.querySelector('.highscore').textContent = recorde;
    }

  }else{
    
    if(pontuação > 1){

      if(chute > acerto){
        document.querySelector('.message').textContent = '📈 muito alto';
        pontuação -= 1;
        document.querySelector('.score').textContent = pontuação;

      }else if(chute < acerto){
        document.querySelector('.message').textContent = '📉 muito baixo';
        pontuação -= 1;
        document.querySelector('.score').textContent = pontuação;
      }

    }else{
      document.querySelector('.message').textContent = '💥 você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
    
  }

});

document.querySelector('.again').addEventListener('click', function(){

  acerto = Math.trunc(Math.random() * 20 + 1);
  pontuação = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = '🔍 Adivinhe...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  
});
