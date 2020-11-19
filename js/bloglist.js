var pmod=document.getElementById('trashmodel');
var nbtn= document.getElementsByClassName('no-btn')[0];

function trash(){
    pmod.style.display="block";
}

nbtn.onclick=function(){
    pmod.style.display="none";
}


