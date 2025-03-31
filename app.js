var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    clutter = " ";
    for(var i=1; i<=200; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="circle">${rn}</div>`;
    }
document.querySelector('#pbtm').innerHTML=clutter;
}

function increasescore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickdum = Number(dets.target.textContent);
    if(clickdum == hitrn){
        increasescore();
        makeBubble();
        getnewhit();
    }
})

runTimer();
makeBubble();
getnewhit();