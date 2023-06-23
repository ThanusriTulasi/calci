var a=0;
var s="";
document.getElementById("add").onclick = function(){
   var num1=parseInt(document.getElementById("num1").value);
   a=a+num1;
   if(s.length==0)
     s=s+a;
   else
     s=s+("+"+a);
  document.getElementById("result").textContent = a;
}
document.getElementById("sub").onclick = function(){
    var num1=parseInt(document.getElementById("num1").value);
   a=a-num1;
   if(s.length==0)
     s=s+a;
   else
     s=s+("-"+a);
  document.getElementById("result").textContent = a;
}
document.getElementById("mul").onclick = function(){
    var num1=parseInt(document.getElementById("num1").value);
   a=a*num1;
   if(s.length==0)
     s=s+a;
   else
     s=s+("*"+a);
  document.getElementById("result").textContent = a;
}
document.getElementById("div").onclick = function(){
    var num1=parseInt(document.getElementById("num1").value);
   a=a/num1;
   if(s.length==0)
     s=s+a;
   else
     s=s+("/"+a);
  document.getElementById("result").textContent = a;
 }

 
 eq=()=>{
    document.getElementById("wait").textContent = s;
 }