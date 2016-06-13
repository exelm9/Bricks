$(document).ready(function(){
    
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
    // ball radius
    var ballRadius = 10;
    // paddle
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    // paddle keyboard events
    var rightPressed = false;
    var leftPressed = false;

    function draw() {
        // clears entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawing ball and movement

        drawBall();

        drawPaddle();

        collisions(x,y);

        paddleMovement();

        x += drawX;
        y += drawY;
        
    }

    // helper functions
    function drawBall() {
        ctx.beginPath();
        // draw circle
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function collisions(x,y){
        if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
            drawX = -drawX;
        }

        if(y + drawY > canvas.height - ballRadius || y + drawY < ballRadius) {
            drawY = -drawY;
        }

    }

    function paddleMovement(){
        // only fires if right or left keys pressed
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

    }

    // events
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }

    // redraws with new coordinates
    setInterval(draw, 10);
})
