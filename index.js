const rollbtn=document.getElementById("rollbtn")
const labeltext=document.getElementById("label1")
let randomnumber;
const min=1;
const max=6;
rollbtn.onclick=function(){
    randomnumber=Math.floor(Math.random()*max)+min;
    labeltext.textContent=randomnumber
}