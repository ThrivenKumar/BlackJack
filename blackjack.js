var humanscore=0;
var computerscore=0;
var noofhumanmoves=0;
const hitsound=new Audio("hitsound.mp3");
var result=document.getElementById("result");
var humanstatus=document.getElementById("humanscore");
var computerstatus=document.getElementById("computerscore");
function randomcard(){//function for random number generation
    var card=Math.floor(Math.random()*100)%13;
    var type=Math.floor(Math.random()*10)%4;
    return [card,type];
}
function humancard(){//function for displaying human cards and score.
    document.getElementById("stand").removeAttribute("disabled");
    var listofcards=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    var typeofcards=['C','H','D','S'];
    var carddetails=randomcard();
    if(carddetails[0]==0){
        humanscore+=11;
    }
    else if(carddetails[0]>0 && carddetails[0]<10){
        humanscore+=carddetails[0]+1;
    }
    else{
        humanscore+=10;
    }
    var string=listofcards[carddetails[0]]+typeofcards[carddetails[1]]+'.png';
    var left=document.getElementById("humancards");
    var card=document.createElement("img");
    card.src=string;
    left.appendChild(card);
    humanstatus.innerHTML=humanscore;
    hitsound.play();
    if(humanscore>21){
        humanstatus.innerHTML="BUST!";
        humanstatus.style.color="red";
        document.getElementById("hit").setAttribute('disabled',"true");
    }
}
function computercard(){//function for displaying computer cards and score.
    document.getElementById("hit").setAttribute('disabled',"true");
    var delay;
    while(computerscore<17){
        var listofcards=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var typeofcards=['C','H','D','S'];
        var carddetails=randomcard();
        if(carddetails[0]==0){
            computerscore+=11;
        }
        else if(carddetails[0]>0&&carddetails[0]<10){
            computerscore+=carddetails[0]+1;
        }
        else{
            computerscore+=10;
        }
        var string=listofcards[carddetails[0]]+typeofcards[carddetails[1]]+'.png';
        var right=document.getElementById("computercards");
        var card=document.createElement("img");
        card.src=string;
        right.appendChild(card);
        hitsound.play();
        document.getElementById("computerscore").innerHTML=computerscore;
        delay=window.setTimeout(timerdelay,5000);
        console.log(delay);
    }
    if((computerscore>humanscore||humanscore>21) && computerscore<22){
        result.innerHTML="You Lose";
        result.style.color="red";
    }
    if(computerscore>21){
        computerstatus.innerHTML="BUST!";
        computerstatus.style.color="red";
    }
    if((computerscore>21&&humanscore>21)||(computerscore==humanscore)){
        result.innerHTML="DRAW";
        result.style.color="blue";
    }
    if(humanscore<22&&(computerscore<humanscore||computerscore>21)){
        result.innerHTML="You Win";
        result.style.color="#FFEC19";
    }
    document.getElementById("stand").setAttribute("disabled","true");
}

function resetaliasdeal(){
    document.getElementById("humancards").innerHTML="";
    document.getElementById("computercards").innerHTML="";
    document.getElementById("hit").removeAttribute("disabled");
    document.getElementById("stand").setAttribute("disabled","true");
    humanscore=0;
    computerscore=0;
    noofhumanmoves=0;
    result.innerHTML="Let's Play";
    result.style.color="#FFEC19";
    humanstatus.innerHTML="0";
    humanstatus.style.color="white";
    computerstatus.innerHTML="0";
    computerstatus.style.color="white";
}

function timerdelay(){

}
