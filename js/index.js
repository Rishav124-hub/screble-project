var modal1 = document.getElementById("signupModal");
var span1 = document.getElementsByClassName("close")[0];

function signupfunction(){
    modal1.style.display="block";
}
span1.onclick=function(){
    modal1.style.display="none"
}


var mod= document.getElementById("signinModel");
var span2= document.getElementsByClassName("close")[1];
function signinfunction(){
    mod.style.display="block";
}
span2.onclick = function(){
    mod.style.display="none";
}

function signuUpfunction(){
    alert("hsdzjS");
}

var cmod=document.getElementById("createpostModel");
var cspan=document.getElementsByClassName("close")[2];
var cfun=document.getElementById("CreatePostButton");

cfun.onclick=function(){
    cmod.style.display="block";
}
cspan.onclick=function(){
    cmod.style.display="none";
}