let pname1;
let pname2;
let gamepoint=30;
let player1score=0;
let player2score=0;
function penaltyt1(){
    team1score=team1score-1;
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}
function penaltyt2(){
    team2score=team2score-1;
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}
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
    else if(player1score==28 && player2score==29){
        player2score=player2score-1;
    }
    else if(player1score<30 && player2score<28){
        player1score=player1score+1;
    }
    else if(player1score==28 && player2score==28){
        player1score=player1score+1;
    }
    else if(player1score==29 && player2score==28){
        player1score=player1score+1;
    }
    if(player1score==30){
        document.getElementById('badmintonresult').innerHTML=pname1+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}
function badmintonscorecard2(){
    if(player2score<gamepoint-2){
        player2score=player2score+1;
    }
    else if(player2score==28 && player1score==29){
        player1score=player1score-1;
    }
    else if(player2score<30 && player1score<28){
        player2score=player2score+1;
    }
    else if(player2score==28 && player1score==28){
        player2score=player2score+1;
    }
    else if(player2score==29 && player1score==28){
        player2score=player2score+1;
    }
    if(player2score==30){
        document.getElementById('badmintonresult').innerHTML=pname2+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}