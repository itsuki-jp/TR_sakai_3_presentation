setInterval(drawCircle3, 20);




let positionX3 = 0;
let positionY3 = 0;
let radius3 = 25;
let rgb3 = "red";

function drawCircle3() {    
    ctx.beginPath();
    //描き始めの関数
    ctx.arc(540, 580, radius3, 0, Math.PI * 2, true);
    // 円を描く
    ctx.fillStyle = 'red';
    //色を青にする
    ctx.fill();
    //色を塗りつぶす
    ctx.stroke();
    //円弧を描く
    }

document.body.onkeydown = (ev) => {
    if (ev.code == 'KeyW' || ev.code == 'ArrowUp') {
        positionY3 -= 10;
    } else if (ev.code == 'KeyA' || ev.code == 'ArrowLeft') {
        positionX3 -= 10;
    } else if (ev.code == 'KeyD' || ev.code == 'ArrowRight') {
        positionX3 += 10;
    }
}

    

