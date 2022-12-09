//PIはMATH.PI
//LibraryはP5.jsというlibraryを使う
let a = 1; //Xの振幅
let b = 1.5; //Yの振幅
let w1 = 0.02; //Xの角速度
let w2 = 0.05; //Yの角速度
let pi1 = 0; //Xの初期条件の角度
let pi2 = Math.PI * (1/2); //Yの初期条件の角度
let width = 800; //窓の幅
let height = 800; //窓の高さ　幅と広さは左上から（０、０）で右に、下に行くと増加する
let history = []; //位相の変化を記録
let t = 0; //時間

function setup(){
    createCanvas(width,height);
}

function draw(){
    background(0);
    for(let i = 0; i < history.length; i++){
        fill(255,255,255);
        circle(history[i][0],history[i][1],5); //記録した位相を全部描く。毎回全ての円を描くので時間がすぎると計算に時間がかかる。
    }
    let x = a * Math.cos(w1 * t + pi1) * width / 4 + width / 2; //Xの計算
    let y = height / 2 - b * Math.cos(w2 * t + pi2) * height / 4; //Yの計算
    fill(255,0,0);
    circle(x,y,20); //(X,Y)に円を描く
    t++; //時間の流れ
    console.log(t);
    history.push([x,y]); //今回描いた(X,Y)を記録に追加する
    if(history.length >= 500){ //記録が５００件を超えたら最初の記録を消す
        history.shift();
    }
}