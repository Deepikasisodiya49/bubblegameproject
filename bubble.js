var tmelem = document.querySelector('#tmelem');
var hitelem = document.querySelector('#hitelem');
var bt = document.querySelector('#bt');
var scoreelem = document.querySelector('#scoreelem');
var timer= 60;
var score=0;
var newnumber;
setInterval(function(){
    if(timer>0){
        --timer;
        tmelem.textContent=timer;
    }
    else{
        bt.innerHTML='<h1 id ="centree">Game over</h1>';
    }
},1000);
function NewGuess(){
    newnumber = Math.floor(Math.random()*10);
    hitelem.textContent=newnumber;
}
function getbubble(){
    for(var i=0;i<152;i++){
    var newnumber = Math.floor(Math.random()*10);
    var template=`<div class="bubbles">${newnumber}</div>`
    bt.innerHTML += template;

    }
}
bt.addEventListener('click',function(detail){
    var clickedbbl = detail.target.textContent;
    if(clickedbbl==newnumber){
        score=score+10;
        scoreelem.textContent=score;
        NewGuess();
        bt.innerHTML='';
        getbubble();

    }
})

NewGuess();
getbubble();