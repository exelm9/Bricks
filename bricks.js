$(document).ready(function(){
    // store reference to canvas element
    var canvas = document.getElementById("myCanvas");
    // stores 2d rendering
    var ctx = canvas.getContext("2d");
    // define where ball starts
    var x = canvas.width/2;
    var y = canvas.height-30;
    // change position of ball by incrementing
    var dx = 2;
    var dy = -2;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        // clears entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawing ball and movement
        drawBall();
        x += dx;
        y += dy;
    }
    setInterval(draw, 10);
})



















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