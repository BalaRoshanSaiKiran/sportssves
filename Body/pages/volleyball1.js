let pname1;
let pname2;
let gamepoint=17;
let player1score=0;
let player2score=0;
let player1t1p1=0;
let player2t1p1=0;
let player3t1p1=0;
let player4t1p1=0;
let player5t1p1=0;
let player6t1p1=0;
let player7t1p1=0;
let player8t1p1=0;
let player9t1p1=0;
let player10t1p1=0;
let player1t2p1=0;
let player2t2p1=0;
let player3t2p1=0;
let player4t2p1=0;
let player5t2p1=0;
let player6t2p1=0;
let player7t2p1=0;
let player8t2p1=0;
let player9t2p1=0;
let player10t2p1=0;
let player1t1;
let player2t1;
let player3t1;
let player4t1;
let player5t1;
let player6t1;
let player7t1;
let player8t1;
let player9t1;
let player10t1;
let player1t2;
let player2t2;
let player3t2;
let player4t2;
let player5t2;
let player6t2;
let player7t2;
let player8t2;
let player9t2;
let player10t2;
function scoreoneteamone(){
    let one=document.getElementById('t1p11').value;
    player1t1p1=player1t1p1+parseInt(one);
    document.getElementById('t1p1').innerHTML=player1t1p1;
}
function scoretwoteamone(){
    let two=document.getElementById('t1p22').value;
    player2t1p1=player2t1p1+parseInt(two);
    document.getElementById('t1p2').innerHTML=player2t1p1;
}
function scorethreeteamone(){
    let three=document.getElementById('t1p33').value;
    player3t1p1=player3t1p1+parseInt(three);
    document.getElementById('t1p3').innerHTML=player3t1p1;
}
function scorefourteamone(){
    let four=document.getElementById('t1p44').value;
    player4t1p1=player4t1p1+parseInt(four);
    document.getElementById('t1p4').innerHTML=player4t1p1;
}
function scorefiveteamone(){
    let five=document.getElementById('t1p55').value;
    player5t1p1=player5t1p1+parseInt(five);
    document.getElementById('t1p5').innerHTML=player5t1p1;
}
function  scoresixteamone(){
    let six=document.getElementById('t1p66').value;
    player6t1p1=player6t1p1+parseInt(six);
    document.getElementById('t1p6').innerHTML=player6t1p1;
}
function  scoreseventeamone(){
    let seven=document.getElementById('t1p77').value;
    player7t1p1=player7t1p1+parseInt(seven);
    document.getElementById('t1p7').innerHTML=player7t1p1;
}
function  scoreeightteamone(){
    let eight=document.getElementById('t1p88').value;
    player8t1p1=player8t1p1+parseInt(eight);
    document.getElementById('t1p8').innerHTML=player8t1p1;
}
function  scorenineteamone(){
    let nine=document.getElementById('t1p99').value;
    player9t1p1=player9t1p1+parseInt(nine);
    document.getElementById('t1p9').innerHTML=player9t1p1;
}
function  scoretenteamone(){
    let ten=document.getElementById('t1p1010').value;
    player10t1p1=player10t1p1+parseInt(ten);
    document.getElementById('t1p10').innerHTML=player10t1p1;
}
function scoreoneteamtwo(){
    let onetwo=document.getElementById('t2p11').value;
    player1t2p1=player1t2p1+parseInt(onetwo);
    document.getElementById('t2p1').innerHTML=player1t2p1;
}
function scoretwoteamtwo(){
    let twotwo=document.getElementById('t2p22').value;
    player2t2p1=player2t2p1+parseInt(twotwo);
    document.getElementById('t2p2').innerHTML=player2t2p1;
}
function scorethreeteamtwo(){
    let threetwo=document.getElementById('t2p33').value;
    player3t2p1=player3t2p1+parseInt(threetwo);
    document.getElementById('t2p3').innerHTML=player3t2p1;
}
function scorefourteamtwo(){
    let fourtwo=document.getElementById('t2p44').value;
    player4t2p1=player4t2p1+parseInt(fourtwo);
    document.getElementById('t2p4').innerHTML=player4t2p1;
}
function scorefiveteamtwo(){
    let fivetwo=document.getElementById('t2p55').value;
    player5t2p1=player5t2p1+parseInt(fivetwo);
    document.getElementById('t2p5').innerHTML=player5t2p1;
}
function  scoresixteamtwo(){
    let sixtwo=document.getElementById('t2p66').value;
    player6t2p1=player6t2p1+parseInt(sixtwo);
    document.getElementById('t2p6').innerHTML=player6t2p1;
}
function  scoreseventeamtwo(){
    let seventwo=document.getElementById('t2p77').value;
    player7t2p1=player7t2p1+parseInt(seventwo);
    document.getElementById('t2p7').innerHTML=player7t2p1;
}
function  scoreeightteamtwo(){
    let eighttwo=document.getElementById('t2p88').value;
    player8t2p1=player8t2p1+parseInt(eighttwo);
    document.getElementById('t2p8').innerHTML=player8t2p1;
}
function  scorenineteamtwo(){
    let ninetwo=document.getElementById('t2p99').value;
    player9t2p1=player9t2p1+parseInt(ninetwo);
    document.getElementById('t2p9').innerHTML=player9t2p1;
}
function  scoretenteamtwo(){
    let tentwo=document.getElementById('t2p1010').value;
    player10t2p1=player10t2p1+parseInt(tentwo);
    document.getElementById('t2p10').innerHTML=player10t2p1;
}
function playersindividualnames(){
    changeplayersnames()
}
function changeplayersnames(){
    player1t1=document.getElementById('p1t1').value;
    document.getElementById('p1t1n1').innerHTML=player1t1;
    player2t1=document.getElementById('p2t1').value;
    document.getElementById('p2t1n2').innerHTML=player2t1;
    player3t1=document.getElementById('p3t1').value;
    document.getElementById('p3t1n3').innerHTML=player3t1;
    player4t1=document.getElementById('p4t1').value;
    document.getElementById('p4t1n4').innerHTML=player4t1;
    player5t1=document.getElementById('p5t1').value;
    document.getElementById('p5t1n5').innerHTML=player5t1;
    player6t1=document.getElementById('p6t1').value;
    document.getElementById('p6t1n6').innerHTML=player6t1;
    player7t1=document.getElementById('p7t1').value;
    document.getElementById('p7t1n7').innerHTML=player7t1;
    player8t1=document.getElementById('p8t1').value;
    document.getElementById('p8t1n8').innerHTML=player8t1;
    player9t1=document.getElementById('p9t1').value;
    document.getElementById('p9t1n9').innerHTML=player9t1;
    player10t1=document.getElementById('p10t1').value;
    document.getElementById('p10t1n10').innerHTML=player10t1;
    player1t2=document.getElementById('p1t2').value;
    document.getElementById('p1t2n1').innerHTML=player1t2;
    player2t2=document.getElementById('p2t2').value;
    document.getElementById('p2t2n2').innerHTML=player2t2;
    player3t2=document.getElementById('p3t2').value;
    document.getElementById('p3t2n3').innerHTML=player3t2;
    player4t2=document.getElementById('p4t2').value;
    document.getElementById('p4t2n4').innerHTML=player4t2;
    player5t2=document.getElementById('p5t2').value;
    document.getElementById('p5t2n5').innerHTML=player5t2;
    player6t2=document.getElementById('p6t2').value;
    document.getElementById('p6t2n6').innerHTML=player6t2;
    player7t2=document.getElementById('p7t2').value;
    document.getElementById('p7t2n7').innerHTML=player7t2;
    player8t2=document.getElementById('p8t2').value;
    document.getElementById('p8t2n8').innerHTML=player8t2;
    player9t2=document.getElementById('p9t2').value;
    document.getElementById('p9t2n9').innerHTML=player9t2;
    player10t2=document.getElementById('p10t2').value;
    document.getElementById('p10t2n10').innerHTML=player10t2;
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
    else if(player1score==15 && player2score==16){
        player2score=player2score-1;
    }
    else if(player1score<17 && player2score<15){
        player1score=player1score+1;
    }
    else if(player1score==15 && player2score==15){
        player1score=player1score+1;
    }
    else if(player1score==16 && player2score==15){
        player1score=player1score+1;
    }
    if(player1score==17){
        document.getElementById('badmintonresult').innerHTML=pname1+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}
function badmintonscorecard2(){
    if(player2score<gamepoint-2){
        player2score=player2score+1;
    }
    else if(player2score==15 && player1score==16){
        player1score=player1score-1;
    }
    else if(player2score<17 && player1score<15){
        player2score=player2score+1;
    }
    else if(player2score==15 && player1score==15){
        player2score=player2score+1;
    }
    else if(player2score==16 && player1score==15){
        player2score=player2score+1;
    }
    if(player2score==17){
        document.getElementById('badmintonresult').innerHTML=pname2+" Wins";
    }
    document.getElementById('badmintonscore1').innerHTML=player1score;
    document.getElementById('badmintonscore2').innerHTML=player2score;
}