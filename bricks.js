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
    // ball raidus
    var ballRadius = 10;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
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

        collisions(x,y);
        
    }

    function collisions(x,y){
        if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
            drawX = -drawX;
        }

        if(y + drawY > canvas.height - ballRadius || y + drawY < ballRadius) {
            drawY = -drawY;
        }
    }
    // redraws with new coordinates
    setInterval(draw, 10);
})


















//1.Exercise: try changing the size and color of the given shapes.
// // rectangle
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();


// // rectangle
// ctx.beginPath();
// // first two args top left.  Next two args size of rect
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// // adds border instead of fully colored shape
// ctx.stroke();
// ctx.closePath();

// // circle
// ctx.beginPath();
// // first two args x and y coordinates, then radius, start and end angle, false clockwise
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

//2.Exercise: try changing the speed of the moving ball, or the direction it moves in.