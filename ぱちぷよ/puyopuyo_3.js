const canvas = document.getElementById("next");
const clx = canvas.getContext('2d');
let positionX = 0;
let positionY = 0;
let radius = 20
let rgb = "";
resetParameter();
function resetParameter() {
    positionX = Math.floor(canvas.width/2);
    positionY = Math.floor(canvas.height/2)
    radius = Math.floor(1 * 10) + 20;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    rgb = `rgb(${r}, ${g}, ${b})`;
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function drawCircle() {
    if (positionY < canvas.height) {
        positionY = positionY;
    }
  
    ctx.beginPath();
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = rgb;
    ctx.fill();
    ctx.stroke();
}
function anim() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCircle()
}
setInterval(anim, 100)