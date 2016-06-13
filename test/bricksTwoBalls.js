$(document).ready(function(){
    
    // fun variables
    var numberBalls;

    // store reference to canvas element on html page
    var canvas = document.getElementById("myCanvas");
    // 2d rendering
    var ctx = canvas.getContext("2d");
    // define where ball starts. canvas width:480px, height:320px
    var x = canvas.width/2;
    var y = canvas.height-30;
    // speed of the ball
    var drawX = -2;
    var drawY = -2;

    var x1 = canvas.width/2;
    var y2 = canvas.height-30;
    // speed of the ball
    var drawX1 = 2;
    var drawY2 = 2;
    // ball raidus
    var ballRadius = 10;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x1, y2, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        // clears entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawing ball and movement

        drawBall();


        x += drawX;
        y += drawY;
        x1 += drawX1;
        y2 += drawY2;

        collisions(x,y);
        collisions1(x1,y2);
        
    }

    function collisions(x,y){
        if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
            drawX = -drawX;
        }

        if(y + drawY > canvas.height - ballRadius || y + drawY < ballRadius) {
            drawY = -drawY;
        }
    }

    function collisions1(x,y){
        if(x + drawX1 > canvas.width - ballRadius || x + drawX1 < ballRadius) {
            drawX1 = -drawX1;
        }

        if(y + drawY2 > canvas.height - ballRadius || y + drawY2 < ballRadius) {
            drawY2 = -drawY2;
        }
    }
    // redraws with new coordinates
    setInterval(draw, 10);
})

