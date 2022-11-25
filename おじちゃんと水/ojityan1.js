const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 600;
//canvasの範囲を定める
const ctx = canvas.getContext('2d');
//二次元の範囲で収める
ctx.fillStyle = 'gray';
//色をグレーにする
ctx.fillRect(0, 0, 1080, 600);
//背景の範囲を定める
ctx.fillStyle = 'red';
ctx.font = 'bold 48px Impact';
ctx.fillText('おじちゃんと水', 350, 50);

//文字のフォントと色と場所を定める
document.body.onkeydown = keypress_ivent;

function keypress_ivent(e) {
    if (e.code === 'Enter') {
        //Enterキーが押された時の処理
        change();
    }
    return false;
}
function change() {
    // var canvas = document.getElementById('canvas');
    canvas.width = 1080;
    canvas.height = 600;
    // var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1080, 600);
    time = setInterval(anim, 20);



}//一つのキーを押すと画面が黒に変わりおじちゃんと水がなくなる




let positionX = 0;
let positionY = 0;
let radius = 25;
let rgb = "blue";
//落ちてくるボールを定める
function resetParameter() {
    positionX = Math.floor(Math.random() * canvas.width);
    positionY = 0;
}
//玉の位置や、半径をランダムにする
function drawCircle() {
    if (positionY < canvas.height) {
        positionY = positionY + 5;
    } else {
        resetParameter();
    }
    ctx.beginPath();
    //描き始めの関数
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);
    // 円を描く
    ctx.fillStyle = 'blue';
    //色を青にする
    ctx.fill();
    //色を塗りつぶす
    ctx.stroke();
    //円弧を描く
}

let positionX1 = 0;
let positionY1 = 0;
let radius1 = 25;
let rgb1 = "blue";
//落ちてくるボールを定める
function resetParameter1() {
    positionX1 = Math.floor(Math.random() * canvas.width);
    positionY1 = 0;
}
//玉の位置や、半径をランダムにする
function drawCircle1() {
    if (positionY1 < canvas.height) {
        positionY1 = positionY1 + 10;
    } else {
        resetParameter1();
    }
    ctx.beginPath();
    //描き始めの関数

    ctx.arc(positionX1, positionY1, radius1, 0, Math.PI * 2, true);
    // 円を描く

    ctx.fillStyle = 'blue';
    //色を青にする

    ctx.fill();
    //色を塗りつぶす


    ctx.stroke();
    //円弧を描く
}
let positionX2 = 0;
let positionY2 = 0;
let radius2 = 25;
let rgb2 = "blue";
//落ちてくるボールを定める
function resetParameter2() {
    positionX2 = Math.floor(Math.random() * canvas.width);
    positionY2 = 0;
}
//玉の位置や、半径をランダムにする
function drawCircle2() {
    if (positionY2 < canvas.height) {
        positionY2 = positionY2 + 7;
    } else {
        resetParameter2();
    }
    ctx.beginPath();
    //描き始めの関数

    ctx.arc(positionX2, positionY2, radius2, 0, Math.PI * 2, true);
    // 円を描く

    ctx.fillStyle = 'blue';
    //色を青にする

    ctx.fill();
    //色を塗りつぶす


    ctx.stroke();
    //円弧を描く
}
let positionX4 = 0;
let positionY4 = 0;
let radius4 = 25;
let rgb4 = "blue";
//落ちてくるボールを定める
function resetParameter4() {
    positionX4 = Math.floor(Math.random() * canvas.width);
    positionY4 = 0;
}
//玉の位置や、半径をランダムにする
function drawCircle4() {
    if (positionY4 < canvas.height) {
        positionY4 = positionY4 + 12;
    } else {
        resetParameter4();
    }
    ctx.beginPath();
    //描き始めの関数

    ctx.arc(positionX4, positionY4, radius4, 0, Math.PI * 2, true);
    // 円を描く

    ctx.fillStyle = 'blue';
    //色を青にする

    ctx.fill();
    //色を塗りつぶす


    ctx.stroke();
    //円弧を描く
}

let positionX5 = 0;
let positionY5 = 0;
let radius5 = 25;
let rgb5 = "blue";
//落ちてくるボールを定める
function resetParameter5() {
    positionX5 = 0;
    positionY5 = Math.floor(Math.random() * canvas.height);
}
//玉の位置や、半径をランダムにする
function drawCircle5() {
    if (positionX5 < canvas.width) {
        positionX5 = positionX5 + 10;
    } else {
        resetParameter5();
    }
    ctx.beginPath();
    //描き始めの関数

    ctx.arc(positionX5, positionY5, radius5, 0, Math.PI * 2, true);
    // 円を描く

    ctx.fillStyle = 'blue';
    //色を青にする

    ctx.fill();
    //色を塗りつぶす


    ctx.stroke();
    //円弧を描く
}
let positionX6 = 1080;
let positionY6 = 0;
let radius6 = 25;
let rgb6 = "blue";
//落ちてくるボールを定める
function resetParameter6() {
    positionX6 = 1080;
    positionY6 = Math.floor(Math.random() * canvas.height);
}
//玉の位置や、半径をランダムにする
function drawCircle6() {
    if (0 < positionX6) {
        positionX6 = positionX6 - 20;
    } else {
        resetParameter6();
    }
    ctx.beginPath();
    //描き始めの関数

    ctx.arc(positionX6, positionY6, radius6, 0, Math.PI * 2, true);
    // 円を描く

    ctx.fillStyle = 'blue';
    //色を青にする

    ctx.fill();
    //色を塗りつぶす


    ctx.stroke();
    //円弧を描く
}


function anim() {
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCircle3();
    drawCircle();
    drawCircle1();
    drawCircle2();
    drawCircle4();
    drawCircle5();
    drawCircle6();

    counter = counter + 1
    ctx.font = '48px Impact'
    let num =counter* 20/1000 ;

    ctx.fillText(num.toFixed(2) + '秒経過', 800, 50);

}


let positionX3 = 540;
let positionY3 = 580;
let radius3 = 25;
let rgb3 = "red";


function drawCircle3() {
    ctx.beginPath();
    //描き始めの関数
    ctx.arc(positionX3, positionY3, radius3, 0, Math.PI * 2, true);
    // 円を描く
    // ctx.fillStyle = 'red';
    // //色を青にする
    // ctx.fill();
    // //色を塗りつぶす

    var url_ojiback = "oji-back.png" ;
    var image = new Image() ;
    image.onload = function () {
	    ctx.beginPath() ;
	    ctx.drawImage( this, 0, 0,1100, 1100, positionX3 - 25, positionY3 - 25, 50, 50 ) ;
    }
    image.src = url_ojiback ;

    ctx.stroke();
    //円弧を描く

    document.body.onkeydown = (ev) => {
        if (ev.code == 'KeyW' || ev.code == 'ArrowUp') {
            positionY3 -= 10;
        } else if (ev.code == 'KeyA' || ev.code == 'ArrowLeft') {
            positionX3 -= 10;
        } else if (ev.code == 'keyS' || ev.code == 'ArrowDown'){
            positionY3 += 10;
        } else if (ev.code == 'KeyD' || ev.code == 'ArrowRight') {
            positionX3 += 10;
        }
    }
    const hit = ((positionX - positionX3) * (positionX - positionX3)
        + (positionY - positionY3) * (positionY - positionY3))
        <= 2500 ;
    const hit1 = ((positionX1 - positionX3) * (positionX1 - positionX3)
        + (positionY1 - positionY3) * (positionY1 - positionY3))
        <= 2500;
    const hit2 = ((positionX2 - positionX3) * (positionX2 - positionX3)
        + (positionY2 - positionY3) * (positionY2 - positionY3))
        <= 2500;
    const hit3 = ((positionX4 - positionX3) * (positionX4 - positionX3)
        + (positionY4 - positionY3) * (positionY4 - positionY3))
        <= 2500;
    const hit4 = ((positionX5 - positionX3) * (positionX5 - positionX3)
        + (positionY5 - positionY3) * (positionY5 - positionY3))
        <= 2500;
    const hit5 = ((positionX6 - positionX3) * (positionX6 - positionX3)
        + (positionY6 - positionY3) * (positionY6 - positionY3))
        <= 2500;
    if (hit || hit1 || hit2 || hit3 || hit4 || hit5) {
        clearInterval(time);
    } else {
        console.log("miss");
    }
}
let counter = 0

resetParameter();
resetParameter1();
resetParameter2();
