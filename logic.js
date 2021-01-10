
function keyPressed(prev,curr,next){  
    
    document.addEventListener("keyup",function(event){
        if(event.keyCode==37){
            document.getElementById(prev).focus();
        }else if(event.keyCode==39){
            document.getElementById(next).focus();
        }else if(event.keyCode==8){
            prev.value="";
            document.getElementById(prev).focus();
            prev.value="";
        }else{
            var numbers = /^[0-9]+$/;
            if(!curr.value.match(numbers)){
                curr.value="";
            }else{
                if(curr.value.length>1){
                    curr.value=curr.value.charAt(0);
                    document.getElementById(next).focus();
                }else if(curr.value.length!=0 && curr.value.match(numbers)){
                    document.getElementById(next).focus();
                }
            }
            
        }
    })
}

function success(){
    location.reload();
}