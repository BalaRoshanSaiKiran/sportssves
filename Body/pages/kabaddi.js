
let team1score=0;
let team2score=0;
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
let team1name;
let team2name;
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
function penaltyt1(){
    team1score=team1score-1;
}
function penaltyt2(){
    team2score=team2score-1;
}
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
function playersnames(){
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
function submit(){
    changename()
}
function changename(){
    team1name=document.getElementById('team1').value;
    document.getElementById('defaultname1').innerHTML=team1name;
    team2name=document.getElementById('team2').value;
    document.getElementById('defaultname2').innerHTML=team2name;
}
function onepointT1(){
    team1score++;
}
function twopointT1(){
    team1score=team1score+2;
}
function threepointT1(){
    team1score=team1score+3;
}
function fourpointT1(){
    team1score=team1score+4;
}
function somepointT1(){
    let s=document.getElementById('somepointt1').value;
    team1score=team1score+parseInt(s);
}
function onepointT2(){
    team2score++;
}
function twopointT2(){
    team2score=team2score+2;
}
function threepointT2(){
    team2score=team2score+3;
}
function fourpointT2(){
    team2score=team2score+4;
}
function somepointT2(){
    let ss=document.getElementById('somepointt2').value;
    team2score=team2score+parseInt(ss);
}
let timerInterval;
let timeInSeconds = 1200; // 20 minutes
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
function updateTimerDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function startTimer() {
    timerInterval = setInterval(() => {
        timelimit++;
        if(timelimit==30){
            timelimit=0;
        }
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateTimerDisplay();
            document.getElementById('team1score').innerHTML=team1score;
            document.getElementById('team2score').innerHTML=team2score;
            document.getElementById('riderlimit').innerHTML=timelimit;
        } else {
            clearInterval(timerInterval);
            if(team1score>team2score){
                let mvpplayert1;
                document.getElementById('result1').innerHTML=team1name+" "+"wins";
                const team1arr=[player1t1,player2t1,player3t1,player4t1,player5t1,player6t1,player7t1,player8t1,player9t1,player10t1];
                const team1scr=[player1t1p1,player2t1p1,player3t1p1,player4t1p1,player5t1p1,player6t1p1,player7t1p1,player8t1p1,player9t1p1,player10t1p1];
                let indext1;
                const maxscorert1=Math.max(team1scr);
                for(i=0;i<10;i++){
                    if(team1scr[i]==maxscorert1){
                        indext1=i;
                    }
                }
                mvpplayert1=team1arr[indext1];
                document.getElementById('mvp').innerHTML=mvpplayert1;
            }
            else{
                let mvpplayert2;
                document.getElementById('result1').innerHTML=team2name+" "+"wins";
                const team2arr=[player1t2,player2t2,player3t2,player4t2,player5t2,player6t2,player7t2,player8t2,player9t2,player10t2];
                const team2scr=[player1t2p1,player2t2p1,player3t2p1,player4t2p1,player5t2p1,player6t2p1,player7t2p1,player8t2p1,player9t2p1,player10t2p1];
                let indext2;
                const maxscorert2=Math.max(team2scr);
                for(i=0;i<10;i++){
                    if(team2scr[i]==maxscorert2){
                        indext2=i;
                    }
                }
                mvpplayert2=team2arr[indext2];
                document.getElementById('mvp').innerHTML=mvpplayert2;
            }
            alert("Game Over!"); // You can customize this message
        }
    }, 1000);
}
let timelimit;
startButton.addEventListener("click", ()=>{
    timelimit=0;
    startTimer();
});

pauseButton.addEventListener("click", () => {
    clearInterval(timerInterval);
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeInSeconds = 1200; // Reset to 20 minutes
    timelimit=0;
    player1t1p1=0;
    player2t1p1=0;
    player3t1p1=0;
    player4t1p1=0;
    player5t1p1=0;
    player6t1p1=0;
    player7t1p1=0;
    player8t1p1=0;
    player9t1p1=0;
    player10t1p1=0;
    player1t2p1=0;
    player2t2p1=0;
    player3t2p1=0;
    player4t2p1=0;
    player5t2p1=0;
    player6t2p1=0;
    player7t2p1=0;
    player8t2p1=0;
    player9t2p1=0;
    player10t2p1=0;
    updateTimerDisplay();
});