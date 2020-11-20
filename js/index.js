//  connecting the create-post model with create-post button  
var cmod=document.getElementById("createpostModel");
var cspan=document.getElementsByClassName("close")[2];
var cfun=document.getElementById("CreatePostButton");

cfun.onclick=function(){
    cmod.style.display="block";
}
// connecting with X symbol 
cspan.onclick=function(){
    cmod.style.display="none";
}