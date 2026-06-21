var count=0;
function charge(yy){
	var yy=document.getElementById(yy);
	yy.style.visibility="hidden";
	count=count+1;
	var wen=document.getElementById("wen");
	wen.innerHTML="你已经捕获了:"+count+"条小鱼！";
	
}


function my() {
y1.style.left=parseInt(y1.offsetLeft)-Math.round(Math.random()*3)+"px";	
y1.style.top=parseInt(y1.offsetTop)+Math.round(Math.random()*2)-1+"px";

if(parseInt(y1.offsetLeft)<-20){y1.style.left=1000+"px";y1.style.visibility="visible";y1.style.top=Math.round(Math.random()*300)+150+"px";}	
	
y2.style.left=parseInt(y2.offsetLeft)-Math.round(Math.random()*4)+"px";
y2.style.top=parseInt(y2.offsetTop)+Math.round(Math.random()*4)-2+"px";
if(parseInt(y2.offsetLeft)<-20){y2.style.left=1000+"px";y2.style.visibility="visible";y2.style.top=Math.round(Math.random()*300)+150+"px";}	
	
y3.style.left=parseInt(y3.offsetLeft)-Math.round(Math.random()*5)+"px";
y3.style.top=parseInt(y3.offsetTop)+Math.round(Math.random()*6)-3+"px";
if(parseInt(y3.offsetLeft)<-20){y3.style.left=1000+"px";y3.style.visibility="visible";y3.style.top=Math.round(Math.random()*300)+150+"px";}	
	
y4.style.left=parseInt(y4.offsetLeft)-Math.round(Math.random()*4)+"px";
y4.style.top=parseInt(y4.offsetTop)+Math.round(Math.random()*4)-2+"px";
if(parseInt(y4.offsetLeft)<-20){y4.style.left=1000+"px";y4.style.visibility="visible";y4.style.top=Math.round(Math.random()*300)+150+"px";}	
	
	
z1.style.left=parseInt(z1.offsetLeft)+Math.round(Math.random()*4)+"px";	
z1.style.top=parseInt(z1.offsetTop)+Math.round(Math.random()*4)-2+"px";
if(parseInt(z1.offsetLeft)>900){z1.style.left=-100+"px";z1.style.visibility="visible";z1.style.top=Math.round(Math.random()*300)+150+"px";}
	
z2.style.left=parseInt(z2.offsetLeft)+Math.round(Math.random()*3)+"px";	
z2.style.top=parseInt(z2.offsetTop)+Math.round(Math.random()*6)-3+"px";
if(parseInt(z2.offsetLeft)>900){z2.style.left=-100+"px";z2.style.visibility="visible";z2.style.top=Math.round(Math.random()*300)+150+"px";}
	
	
z3.style.left=parseInt(z3.offsetLeft)+Math.round(Math.random()*4)+"px";	
z3.style.top=parseInt(z3.offsetTop)+Math.round(Math.random()*4)-2+"px";
if(parseInt(z3.offsetLeft)>900){z3.style.left=-100+"px";z3.style.visibility="visible";z3.style.top=Math.round(Math.random()*300)+150+"px";}
	
z4.style.left=parseInt(z4.offsetLeft)+Math.round(Math.random()*5)+"px";	
z4.style.top=parseInt(z4.offsetTop)+Math.round(Math.random()*2)-1+"px";
if(parseInt(z4.offsetLeft)>900){z4.style.left=-100+"px";z4.style.visibility="visible";z4.style.top=Math.round(Math.random()*300)+150+"px";}
		
	
	
	
	
var speed =50; 	
setTimeout("my()", speed);	
	
	
	
}

my();


























