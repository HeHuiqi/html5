/**
 * Created by macpro on 15/11/28.
 */


function drawHelloWord()
{
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d');
    context.font = '38pt Arial';
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'blue';
    context.fillText('Hello Canvas',canvas.width/2-150,canvas.height/2+15);
    context.strokeText('Hello Canvas',canvas.width/2 - 150,canvas.height/2 +15);

}


var clockCanvas = doument.getElementById('clockCanvas');
clock_constext = clockCanvas.getContext('2d');
FONT_HEIGHT = 15;
MARGIN = 35;
HAND_TRUNCATION = clockCanvas.width/25;
HOUR_TRUNCATION = clockCanvas.width/10;
NUMERAL_SPAXING = 20;
RADIUS  = clockCanvas.width/2 - MARGIN;
HAND_RADIUS  = RADIUS + NUMERAL_SPAXING;


function drawCircle (){
    clock_constext.beginPath();
    clock_constext.arc(clockCanvas.width/2,clockCanvas.height/2,RADIUS,0,Math.PI*2,true);
    clock_constext.stroke();

}

function drawNumerals(){
    var numerals = [1,2,3,4,5,6,7,8,9,10,12];
    angle = 0;
    numeralsWidth = 0;
    numerals.forEach(function(numeral){
        angle = Math.PI/6 * (numeral-3);
        numeralsWidth = clock_constext.measureText(numeral).width;
        clock_constext.fillText(numeral,
            clockCanvas.width/2,
            clockCanvas.width/2+Math.cos(angle)*(HAND_RADIUS)-numeralsWidth/2,
            clockCanvas.height/2+Math.sin(angle)*(HAND_RADIUS)+FONT_HEIGHT/3);

    });

}

function drawCenter(){
    clock_constext.beginPath();
    clock_constext.arc(clockCanvas.width/2,clockCanvas.height/2,5,0,Math.PI*2,true);
}

