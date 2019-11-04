

setInterval(function(){
var obj=new Date();

var hours=obj.getHours();
var minutes=obj.getMinutes();
var seconds=obj.getSeconds();
var txt=document.getElementById("time1");
var txt1=document.getElementById("format");

var newformat=hours>=12?'PM':'AM';
var hours=hours%12;
txt.style.color="green"; 
    txt1.style.color="blue";

txt1.style.display=(txt1.style.display=='none'?'':'none');
if(hours<10)
	hours="0"+hours;
if(minutes<10)
	minutes="0"+minutes;
if(seconds<10)
	seconds="0"+seconds;

txt.innerHTML=hours+" : " +minutes+" : " +seconds;
txt1.innerHTML=newformat;
},1000);