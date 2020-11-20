// adding comment with the help of comment button
function addcomment(id){
    console.log(id.value);
    document.getElementById('addEventNames').innerHTML+='<p id="addcomment">'+id.value+'</p>';
      var input=document.getElementById('usercomment');
      input.value="";
      input.placeholder="Leave a comment...";
    document.getElementById('usercomment').value=""
}
// increasing the like  by the like button
 var i=0;
 function likefunction(){
     i=i+1;
     document.getElementById('likeincrease').innerHTML='<p>'+i+ " person likes this !"+'</p>'
}

// editing the post-content and saving it
function changefunction(id){
  var newnode=document.getElementById("mybtn1").innerHTML;

  if (newnode=='Edit <i class="fas fa-edit" aria-hidden="true"></i>') {
    var node="Save " +
              '<i class="fas fa-save">'+
              '</i>';
  document.getElementById("mybtn1").innerHTML=node;


    var post=document.getElementById('container-text');
    var editter=document.getElementById('editarea');
    console.log(post.innerHTML);
    editter.value=post.innerHTML;
    post.style.display='none';
    editter.style.display='block';
  }
  else{
    var node1="Edit "+ 
              '<i class="fas fa-edit" aria-hidden="true">'+
              '</i>';
    document.getElementById("mybtn1").innerHTML=node1;

    
    var viewer=document.getElementById('container-text');
    viewer.innerHTML=id.value;
    viewer.style.display='block';
    id.style.display='none';
    
  }
}



