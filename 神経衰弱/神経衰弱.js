var backTimer;
var flgFirst=true;
var cardFirst;
var maxPair= 5;

var remainPair = maxPair;

window.onload=function(){
    var arr=[];

    for(var i=0; i<maxPair; i++){
        arr.push(i);
        arr.push(i);
    }

    shuffle(arr);

    var panel = document.getElementById('panel1');
    for (i=0;i<(maxPair*2);i++){
        var div=document.createElement('div');
        div.className='card back';
        div.number = arr[i];
        div.id = i;
        div.onclick=turn;
        panel.appendChild(div);
    }
}

function shuffle(arr){
    var n =arr.length;
    var temp,i;

    while (n){
        i=Math.floor(Math.random()*n--);
        temp=arr[n];
        arr[n]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

function turn(e){
    var div =e.target;

    //カードのタイマー処理が動作中
    if(backTimer)
        return;

    div.className = `card face` + (div.number + 1);
    
    //一枚目の処理
    if(flgFirst){
        cardFirst=div;
        flgFirst=false;

    //二枚目の処理
    }else{
        if(cardFirst.id==div.id)
        return;

        //数字が一枚目と一致する場合
        if(cardFirst.number==div.number){
            backTimer=setTimeout(function(){
                div.className='card finish';
                div.remove()
                cardFirst.className='card finish';
                cardFirst.remove()
                backTimer=NaN;
            },500);
            remainPair--;   
        if(remainPair==0) {
            const panel2 = document.getElementById('panel2');
            // const image = document.getElementById('image');
            panel2.innerHTML=`
            <div>
                <h1>Congratulations</h1>
                <img class='hituji' src="ひつじのショーンＧＩＦ画像-created-by-melisaatque-_1_ (1).gif">
            </div>`;
        }

        //一致しない場合
        }else{
            backTimer=setTimeout(function(){
                div.className='card back';
                div.innerHTML='';
                cardFirst.className='card back';
                cardFirst.innerHTML='';
                cardFirst=null;
                backTimer=NaN;
            },500);
        }

        flgFirst=true;
    }
}