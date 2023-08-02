var n=Math.floor((Math.random()*6))+1;
var m=Math.floor((Math.random()*6))+1;
function text(){
    if(n==m){
        document.querySelector("h1").innerHTML="Draw";
    }
    else if(n>m){
        document.querySelector("h1").innerHTML="Player 1 WINS";
    }
    else{
        document.querySelector("h1").innerHTML="Player 2 WINS";
    }
}
function imge1(){
    const Img1=document.querySelector(".img1");
    Img1.src="./images/dice1.png";}
function imge2(){
    const Img2=document.querySelector(".img1");
    Img2.src="./images/dice2.png";}
function imge3(){
    const Img3=document.querySelector(".img1");
    Img3.src="./images/dice3.png";}
function imge4(){
    const Img4=document.querySelector(".img1");
    Img4.src="./images/dice4.png";}
function imge5(){
    const Img5=document.querySelector(".img1");
    Img5.src="./images/dice5.png";}
function imge6(){
    const Img6=document.querySelector(".img1");
    Img6.src="./images/dice6.png";
}
function Imge1(){
    const Img1=document.querySelector(".img2");
    Img1.src="./images/dice1.png";}
function Imge2(){
    const Img2=document.querySelector(".img2");
    Img2.src="./images/dice2.png";}
function Imge3(){
    const Img3=document.querySelector(".img2");
    Img3.src="./images/dice3.png";}
function Imge4(){
    const Img4=document.querySelector(".img2");
    Img4.src="./images/dice4.png";}
function Imge5(){
    const Img5=document.querySelector(".img2");
    Img5.src="./images/dice5.png";}
function Imge6(){
    const Img6=document.querySelector(".img2");
    Img6.src="./images/dice6.png";
}


function image(){
    if(n===1){
        imge1();
    }
    else if(n===2){
        imge2();
    }else if(n===3){
        imge3();
    }else if(n===4){
        imge4();
    }else if(n===5){
        imge5();
    }else if(n===6){
        imge6();
    }
}
function Image(){
    if(m===1){
        Imge1();
    }
    else if(m===2){
        Imge2();
    }else if(m===3){
        Imge3();
    }else if(m===4){
        Imge4();
    }else if(m===5){
        Imge5();
    }else if(m===6){
        Imge6();
    }   
}
image();
Image();
text();
