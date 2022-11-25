const canvas = document.getElementById('canvas')
canvas.width = 1440
canvas.height = 821
const ctx = canvas.getContext('2d')
const img = new Image()
const img1 = new Image()
const img2 = new Image()
const img3 = new Image()

let img1loaded = false;
let img2loaded = false;
let img3loaded = false;
let img4loaded = false;
img.onload = function () {
    img1loaded = true;
}
img.src = '772547cc-9f3f-42ef-bd77-78040ad2bc2a.png'

img1.onload = function () {
    img2loaded = true;
}
img1.src = '7500b627-c3ae-4e80-b3e5-8c3b86048567.png'

img2.onload = function () {
    img3loaded = true;
}
img2.src = 'e6dd4f1d-f287-4696-af65-976ddffef159.png'
img3.onload = function () {
    img4loaded = true;
}
img3.src = '9a54fe21-79fa-4cc7-99fb-532d56fb5f46.png'

let tsuribariX = 850;
let tsuribariY = 250;
let sakana1catch = false;
let sakana2catch = false;
let sakana3catch = false;
let sakana4catch = false;
let sakana5catch = false;
let sakana6catch = false;
let sakana7catch = false;
let sakana8catch = false;

function D() {
    ctx.fillStyle = 'gray'
    ctx.fillRect(990, 321, 2880, 2880)

    ctx.fillStyle = 'orange'
    ctx.beginPath();
    ctx.arc(1400, 35, 100, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    ctx.arc(1050, 200, 20, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.arc(1045, 195, 1, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.fillStyle = 'plum'
    ctx.fillRect(1040, 231, 20, 35)

    ctx.fillStyle = 'plum'
    ctx.beginPath();
    ctx.arc(1050, 231, 10, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'plum'
    ctx.beginPath();
    ctx.arc(1050, 265, 10, 0, Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    //パスの開始座標を指定する
    ctx.moveTo(1010, 220);
    //座標を指定してラインを引いていく
    ctx.lineTo(1035, 235);
    ctx.lineTo(1030, 245);
    ctx.lineTo(1005, 230);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    ctx.arc(1008, 225, 5, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    ctx.arc(1033, 240, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(1040, 280)
    ctx.lineTo(1050, 282)
    ctx.lineTo(1035, 312)
    ctx.lineTo(1025, 310)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.arc(1045, 281, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.arc(1030, 311, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'black'
    ctx.moveTo(1055, 282)
    ctx.lineTo(1065, 280)
    ctx.lineTo(1075, 310)
    ctx.lineTo(1065, 312)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.arc(1060, 281, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.arc(1070, 311, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath()
    ctx.moveTo(1010, 225);
    //座標を指定してラインを引いていく
    ctx.lineTo(1035, 240);
    ctx.lineTo(1030, 250);
    ctx.lineTo(1005, 235);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    ctx.arc(1008, 230, 5, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'peachpuff'
    ctx.beginPath();
    ctx.arc(1033, 245, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'brown'
    ctx.beginPath()
    ctx.moveTo(1008, 229)
    ctx.lineTo(1008, 228)
    ctx.lineTo(950, 180)
    ctx.lineTo(950, 181)
    ctx.closePath()
    ctx.fill()


    ctx.strokeStyle = 'brown'
    ctx.beginPath()
    ctx.moveTo(950, 181)
    ctx.quadraticCurveTo(850, 100, 850, 200)
    ctx.stroke()
}

function G(cunter) {

    let P = Math.abs((cunter + 15) % 30 - 15) * 35
    tsuribariY = 250 + P

    ctx.strokeStyle = 'white'
    ctx.beginPath()
    ctx.moveTo(tsuribariX, 200)
    ctx.lineTo(tsuribariX, tsuribariY)
    ctx.lineTo(tsuribariX, tsuribariY)
    ctx.lineTo(tsuribariX, 200)
    ctx.closePath()
    ctx.stroke()

    ctx.strokeStyle = 'gray'
    ctx.beginPath()
    ctx.moveTo(tsuribariX, tsuribariY)
    ctx.quadraticCurveTo(tsuribariX - 10, tsuribariY + 40, tsuribariX - 20, tsuribariY)
    ctx.stroke()
}



function A() {
    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(130, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(220, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(310, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(400, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(500, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(590, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(680, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(760, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(850, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(940, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(40, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1050, 500, 60, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1140, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1260, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1360, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1470, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 500, 1800, 421)


}

function B() {
    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(130, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(220, 500, 40, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(310, 500, 90, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(400, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(500, 500, 50, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(590, 500, 60, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(680, 500, 80, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(760, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(850, 500, 60, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(920, 500, 60, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(40, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(990, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1080, 500, 90, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1140, 500, 60, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1210, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1280, 500, 70, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.beginPath();
    ctx.arc(1360, 500, 80, 0, Math.PI, true);
    ctx.fill();

    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 500, 1800, 421)
}


function F(cunter) {
    let N = Math.abs((cunter + 10) % 20)
    let G = Math.abs((cunter + 7) % 14)
    let J = 30 - cunter % 30
    let H = Math.abs((cunter + 12) % 24)
    let U = Math.abs((cunter + 8) % 16)
    let Y = Math.abs((cunter + 9) % 18)

    let sakana1X = N * 70;
    let sakana1Y = 590;
    let sakana2X = U * 110
    let sakana2Y = 650;
    let sakana3X = N * 89
    let sakana3Y = 550
    let sakana4X = G * 120
    let sakana4Y = 680
    let sakana5X = J * 120
    let sakana5Y = 630
    let sakana6X = H * 69
    let sakana6Y = 600
    let sakana7X = Y * 120
    let sakana7Y = 610
    let sakana8X = Y * 110
    let sakana8Y = 670

    if (sakana1catch) {
        sakana1X = tsuribariX;
        sakana1Y = tsuribariY;
    }
    if (sakana2catch) {
        sakana2X = tsuribariX;
        sakana2Y = tsuribariY;
    }
    if (sakana3catch) {
        sakana3X = tsuribariX;
        sakana3Y = tsuribariY;
    }
    if (sakana4catch) {
        sakana4X = tsuribariX;
        sakana4Y = tsuribariY;
    }
    if (sakana5catch) {
        sakana5X = tsuribariX;
        sakana5Y = tsuribariY;
    }
    if (sakana6catch) {
        sakana6X = tsuribariX;
        sakana6Y = tsuribariY;
    }
    if (sakana7catch) {
        sakana7X = tsuribariX;
        sakana7Y = tsuribariY;
    }
    if (sakana8catch) {
        sakana8X = tsuribariX;
        sakana8Y = tsuribariY;
    }

    if (img1loaded && img2loaded && img3loaded && img4loaded) {
        ctx.drawImage(img, sakana1X, sakana1Y, 100, 30)
        ctx.drawImage(img1, sakana4X, sakana4Y, 100, 30)
        ctx.drawImage(img2, sakana5X, sakana5Y, 250, 25)
        ctx.drawImage(img, sakana3X, sakana3Y, 100, 30)
        ctx.drawImage(img, sakana2X, sakana2Y, 100, 30)
        ctx.drawImage(img3, sakana6X, sakana6Y, 100, 30)
        ctx.drawImage(img1, sakana7X, sakana7Y, 100, 30)
        ctx.drawImage(img3, sakana8X, sakana8Y, 100, 30)
    }

    const range = 30;
    if (Math.abs(tsuribariX - sakana1X) < range && Math.abs(tsuribariY - sakana1Y) < range && cunter1 % 30 > 15) {
        sakana1catch = true;
    }
    if (Math.abs(tsuribariX - sakana2X) < range && Math.abs(tsuribariY - sakana2Y) < range && cunter1 % 30 > 15) {
        sakana2catch = true
    }
    if (Math.abs(tsuribariX - sakana3X) < range && Math.abs(tsuribariY - sakana3Y) < range && cunter1 % 30 > 15) {
        sakana3catch = true
    }
    if (Math.abs(tsuribariX - sakana4X) < range && Math.abs(tsuribariY - sakana4Y) < range && cunter1 % 30 > 15) {
        sakana4catch = true
    }
    if (Math.abs(tsuribariX - sakana5X) < range && Math.abs(tsuribariY - sakana5Y) < range && cunter1 % 30 > 15) {
        sakana5catch = true
    }
    if (Math.abs(tsuribariX - sakana6X) < range && Math.abs(tsuribariY - sakana6Y) < range && cunter1 % 30 > 15) {
        sakana6catch = true
    }
    if (Math.abs(tsuribariX - sakana7X) < range && Math.abs(tsuribariY - sakana7Y) < range && cunter1 % 30 > 15) {
        sakana7catch = true
    }
    if (Math.abs(tsuribariX - sakana8X) < range && Math.abs(tsuribariY - sakana8Y) < range && cunter1 % 30 > 15) {
        sakana8catch = true
    }

}




let cunter = 0

let cunter1 = 0

let keydown = false

let point = 0;

function C() {
    cunter = cunter + 1
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (cunter % 2 === 0) {
        D()
        A()

    } else {
        D()
        B()
    }
    F(cunter)
    G(cunter1)

    if (keydown) {
        cunter1 = cunter1 + 1
        if (cunter1 % 15 === 0) {
            keydown = false
        }
    }
    if (cunter % 30 === 0) {
        if (sakana1catch) {
            point = point + 1;
            sakana1catch = false;
        }
        if (sakana2catch) {
            point = point + 1
            sakana2catch = false;
        }
        if (sakana3catch) {
            point = point + 1
            sakana3catch = false;
        }
        if (sakana4catch) {
            point = point + 1
            sakana4catch = false;
        }
        if (sakana5catch) {
            point = point + 10
            sakana5catch = false;
        }
        if (sakana6catch) {
            point = point + 1
            sakana6catch = false;
        }
        if (sakana7catch) {
            point = point + 1
            sakana7catch = false;
        }
        if (sakana8catch) {
            point = point + 1
            sakana8catch = false;
        }
    }
    ctx.font = '48px serif'
    ctx.fillText('ポイント' + point, 300, 100)
    let time = 60 - cunter*0.2
    if (time < 0) {
        console.log("前の画面に戻る")
    }


    ctx.font = '30px serif'
    ctx.fillText('Time ' + time.toFixed(1), 800, 100)

}


document.body.onkeydown = function () {
    keydown = true
}

setInterval(C, 200)
