const canvas = document.getElementById("stage");
// const ctx = canvas.getContext('2d');
var count = -1;
var ctx = new Array;
var leftRightKeyDown = 3
let positionX = new Array;
let positionY = new Array;
let floor = new Array;
let radius = 20
let rgb = new Array;
let hoge = [];
let color = [
    `rgb(255,0,0)`,
    `rgb(0,0,255)`,
    `rgb(0,255,0)`,
    `rgb(255,0,255)`,
    `rgb(192,192,192)`,
    `rgb(255,255,0)`,
];
let erae = [
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""]
]

resetParameter();
function resetParameter() {
    leftRightKeyDown = 3;
    ctx.push(canvas.getContext('2d'));
    count++;
    positionX.push(Math.floor(140))
    positionY.push(20);
    radius = Math.floor(1 * 10)+10;
    rgb.push(color[Math.floor(Math.random() * 6)]);
    ctx[count].fillStyle = "rgba(0,0,0)";
    ctx[count].fillRect(0, 0, canvas.width, canvas.height);
}
// 円を描く関数
function drawCircle() {
    // Hogeの中にあるボールとあたってるか判定する
    // 円が一番下まで進む
    if (positionY[count] < floor[leftRightKeyDown]) {
        // 指定した位置で止まる
        positionY[count] = positionY[count] + 5;
    }else if(positionY[count] >= floor[leftRightKeyDown]){
        positionY[count] = floor[leftRightKeyDown];
        floor[leftRightKeyDown] -= 40;
        var height = Math.floor(floor[leftRightKeyDown]/40)-1;
        erae[height][leftRightKeyDown] = rgb[count]+"_"+('0000'+count).slice(-4)
        if((height+1) <=10){
            var jugeColor = erae[height+1][leftRightKeyDown].substring(0,erae[height+1][leftRightKeyDown].length-5);
            if(rgb[count] == jugeColor){
                erae[height][leftRightKeyDown] = "";
                positionX[count] = -1;
                positionY[count] = -1;
                ctx[count] = null;
                var ballNumber = Number(erae[height+1][leftRightKeyDown].substring(erae[height+1][leftRightKeyDown].length-4));
                erae[height+1][leftRightKeyDown] = "";
                positionX[ballNumber] = -1;
                positionY[ballNumber] = -1;
                ctx[ballNumber] = null;
                floor[leftRightKeyDown] += 80;
            }
        } 
        if((leftRightKeyDown+1) <= 5){
            var jugeColor = erae[height][leftRightKeyDown+1].substring(0,erae[height][leftRightKeyDown+1].length-5);
            if(rgb[count] == jugeColor){
                erae[height][leftRightKeyDown] = "";
                positionX[count] = -1;
                positionY[count] = -1;
                ctx[count] = null;
                floor[leftRightKeyDown] += 40;
                var ballNumber = Number(erae[height][leftRightKeyDown+1].substring(erae[height][leftRightKeyDown+1].length-4));
                erae[height][leftRightKeyDown+1] = "";
                positionX[ballNumber] = -1;
                positionY[ballNumber] = -1;
                ctx[ballNumber] = null;
                floor[leftRightKeyDown+1] += positionY[count];
                height = Math.floor(floor[leftRightKeyDown+1]/40)-1;
                ballNumber = Number(erae[height][leftRightKeyDown+1].substring(erae[height][leftRightKeyDown+1].length-4));
                console.log(1);
                for(var i=ballNumber; i<0;i--){
                    if(erae[i+1][leftRightKeyDown+1] = ""){
                          erae[i+1][leftRightKeyDown+1] = erae[i][leftRightKeyDown+1];
                          erae[i][leftRightKeyDown+1] = "";
            }
                 
                         console.log(2);
                     }
                 }
        if((leftRightKeyDown-1) >= 0){
            var jugeColor = erae[height][leftRightKeyDown-1].substring(0,erae[height][leftRightKeyDown-1].length-5);
            if(rgb[count] == jugeColor){
                erae[height][leftRightKeyDown] = "";
                positionX[count] = -1;
                positionY[count] = -1;
                ctx[count] = null;
                floor[leftRightKeyDown] += 40;
                var ballNumber = Number(erae[height][leftRightKeyDown-1].substring(erae[height][leftRightKeyDown-1].length-4));
                erae[height][leftRightKeyDown-1] = "";
                positionX[ballNumber] = -1;
                positionY[ballNumber] = -1;
                ctx[ballNumber] = null;
                floor[leftRightKeyDown-1] += positionY[count];
                height = Math.floor(floor[leftRightKeyDown+1]/40)-1;
                ballNumber = Number(erae[height][leftRightKeyDown-1].substring(erae[height][leftRightKeyDown-1].length-4));
                for(var i=ballNumber; i<0;i--){
                    if(erae[i-1][leftRightKeyDown-1] = ""){
                          erae[i-1][leftRightKeyDown-1] = erae[i][leftRightKeyDown-1];
                          erae[i][leftRightKeyDown-1] = "";
                             console.log(2);
        }
    }  
}  

        //2._配列内の文字列(0,文字数-5)が同じならctx,positionX,positionY,rgbの(文字列-5から4文字）の値を消す。
        //3._消したものより上の値を+40
        hoge.push([positionX[count],positionY[count]]);
        resetParameter();
    }
}
    else{
       
    }
}
    // 描き始めの関数
    for(var i=0; i<=count; i++){
        if(ctx[i] == null){
            continue;
        }
        ctx[i].beginPath();
        // 円を描く
        ctx[i].arc(positionX[i], positionY[i], radius, 0, Math.PI * 2, true);
       // 円の内の色の設定
       ctx[i].fillStyle = rgb[i];
       // 円の塗りつぶし
       ctx[i].fill();
       // 円弧を描く
       ctx[i].stroke();
    }
}

function anim() {
    // 全体を黒で塗り潰す。
    ctx[count].fillStyle = "rgba(0,0,0,1)";
    ctx[count].fillRect(0, 0, canvas.width, canvas.height);
    // 円の全体を描く

    // hoge内にある情報を使ってボールを描写する
    for(var i=0;i<6;i++){
        floor.push(canvas.height-radius);
    }
    drawCircle()
}
// １００msごと動く
setInterval(anim, 100)
// 上下左右移動
document.body.onkeydown = (ev) => {
    // 上
	if (ev.code == 'KeyW' || ev.code == 'ArrowUp'&&positionY[count] >20) {
		positionY[count] -= 40;
        // 下
	} else if (ev.code == 'KeyS' || ev.code == 'ArrowDown'&&positionY[count] <480) {
		positionY[count] += 40;
        // 左
	} else if (ev.code == 'KeyA' || ev.code == 'ArrowLeft' &&positionX[count]>20) {
        leftRightKeyDown--;
		positionX[count] -= 40;
       //右 
	} else if (ev.code == 'KeyD' || ev.code == 'ArrowRight'&&positionX[count]<220) {
        leftRightKeyDown++;
		positionX[count] += 40;
	}
}


