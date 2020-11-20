// connecting the signup model with signup button
var modal1 = document.getElementById("signupModal");
var span1 = document.getElementsByClassName("close")[0];
// appear the model block
function signupfunction(){
    modal1.style.display="block";
}
// connection the X symbol
span1.onclick=function(){
    modal1.style.display="none"
}
// connecting the signin model with signin button
var mod= document.getElementById("signinModel");
var span2= document.getElementsByClassName("close")[1];
// appear the model block
function signinfunction(){
    mod.style.display="block";
}
// connection the X symbol
span2.onclick = function(){
    mod.style.display="none";
}
// connecting the signup model with signup link which is present in the sigin model
// appear the model block and dissappear first model block
function signuUpfunction(){
    mod.style.display="none";
    modal1.style.display="block";
}
