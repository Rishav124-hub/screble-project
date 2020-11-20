// connection the trsh button icon with the trash model 
var pmod=document.getElementById('trashmodel');
var nbtn= document.getElementsByClassName('no-btn')[0];

function trash(){
    pmod.style.display="block";
}
// connection of no button in trash model
nbtn.onclick=function(){
    pmod.style.display="none";
}


