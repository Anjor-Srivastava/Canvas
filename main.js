var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var colour = "red";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(200, 200, 60, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", drawshape);

function drawshape(e) {
    var shape = document.getElementById("shapes").value;
    colour = document.getElementById("colour").value;
    console.log(colour);

    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;

    console.log("x = " + mouse_x + ", y = " + mouse_y);
    if (shape == "sqr") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.rect(mouse_x, mouse_y, 100, 100);
        ctx.stroke();
    } else if (shape == "rec") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.rect(mouse_x, mouse_y, 150, 100);
        ctx.stroke();
    } else {
        circle(mouse_x, mouse_y);
    }
}

function circle(x, y) {
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(x, y, 60, 0, 2 * Math.PI);
ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Bootsrap

if (screen.width < 992)
{
    document.getElementById("nan").style.display = "block";
} else
{
    document.getElementById("avail").style.display = "block";
    document.body.style.backgroundImage = 'url("bg1.jpg")';
}