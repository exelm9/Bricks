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
    // ball raidus
    var ballRadius = 10;
    var color = "#0095DD";

    function drawBall(color) {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        // clears entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawing ball and movement

        drawBall(color);

        collisions(x,y);

        x += drawX;
        y += drawY;

        
    }

    function collisions(x,y){
        if(x + drawX > canvas.width - ballRadius || x + drawX < ballRadius) {
            color = "#00ACED";
            drawX = -drawX;
        }

        if(y + drawY > canvas.height - ballRadius || y + drawY < ballRadius) {
            color = "#C1D5DE";
            drawY = -drawY;
        }
    }
    // redraws with new coordinates
    setInterval(draw, 10);
})
