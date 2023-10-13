let pname1;
let pname2;
let gamepoint=11;
let player1score=0;
let player2score=0;
function playersnames(){
    pname1=document.getElementById('team1').value;
    pname2=document.getElementById('team2').value;
    document.getElementById('1name').innerHTML=pname1;
    document.getElementById('2name').innerHTML=pname2;
}
function badmintonscorecard1(){
    if(player1score<gamepoint-2){
        player1score=player1score+1;
    }
    else if(player1score==9 && player2score==10){
        player2score=player2score-1;
    }
    else if(player1score<11 && player2score<9){
        player1score=player1score+1;
    }
    else if(player1score==9 && player2score==9){
        player1score=player1score+1;
    }
    else if(player1score==10 && player2score==9){
        player1score=player1score+1;
    }
    if(player1score==11){
        document.getElementById('badmintonresult').innerHTML=pname1+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}
function badmintonscorecard2(){
    if(player2score<gamepoint-2){
        player2score=player2score+1;
    }
    else if(player2score==9 && player1score==10){
        player1score=player1score-1;
    }
    else if(player2score<11 && player1score<9){
        player2score=player2score+1;
    }
    else if(player2score==9 && player1score==9){
        player2score=player2score+1;
    }
    else if(player2score==10 && player1score==9){
        player2score=player2score+1;
    }
    if(player2score==11){
        document.getElementById('badmintonresult').innerHTML=pname2+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}