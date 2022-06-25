let   btn1=document.getElementById("btn1");
let  btn2=document.getElementById("btn2");
let  btn3=document.getElementById("btn3");

  let hr=0;
let min=0;
let sec=0;
let ml=0;
let timer=false;
let count=0;
btn1.addEventListener('click',function start(){
timer=true;
stopwatch()
});
btn2.addEventListener('click',function stop(){
timer=false;

});
btn3.addEventListener('click',function reset(){
timer=false;

document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("ml").innerHTML="00";


});
function stopwatch(){
if(timer==true){
count=count+1;
if(count==100){
sec=sec+1;
count=0;
}
if(sec==60){
  min=min+1;
  sec=0;
}
if(min==60){
  hr=hr+1;
  min=0;
}
let strhr=hr; let strmin=min;let strsec=sec;let strml=ml;

if(hr<10){
strhr="0"+strhr;
}
if(min<10){

strmin="0"+strmin;

}
if(sec<10){
strsec="0"+strsec;
}
document.getElementById("hr").innerHTML=strhr;
document.getElementById("min").innerHTML=strmin;
document.getElementById("sec").innerHTML=strsec;
document.getElementById("ml").innerHTML=count;
setTimeout("stopwatch()",  10);
}
}