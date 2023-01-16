
let time=document.querySelector(".time")

function timer(){
    let a=new Date();
let hours=a.getHours();
let minutes=a.getMinutes();
let secund=a.getSeconds();
    time.innerText=`${hours}:${minutes}:${secund}`;
}
setInterval(timer,1000)

