const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 640;
//canvasの範囲を定める
const ctx = canvas.getContext('2d');
//二次元の範囲で収める
ctx.fillStyle = 'gray';
//色をグレーにする
ctx.fillRect(0, 0, 1080, 640);
//背景の範囲を定める
ctx.fillStyle = 'red';
ctx.font = 'bold 48px Impact';
ctx.fillText('おじちゃんと水', 350, 50);
//文字のフォントと色と場所を定める
document.body.onkeydown = keypress_ivent;

function keypress_ivent(e) {
	if(e.code === 'Enter'){
		//Enterキーが押された時の処理
        change();
	}
	return false; 
} 
function change() {
    // var canvas = document.getElementById('canvas');
    canvas.width = 1080;
    canvas.height = 640;
    // var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1080, 640);
    setInterval(anim,20);

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
    }else {
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
function anim() {
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawCircle1();
    drawCircle2();
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
    }else {
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
    }else {
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


resetParameter();
resetParameter1();
resetParameter2();

document.querySelector(`.translate`).animate(
	[
		{ transform: 'translate(0, 0)' },
		{ transform: 'translate(100px, 100px)' }
	],
	{
		duration: 1000,
		iterations: Infinity,
		direction: 'alternate'
	}
);



