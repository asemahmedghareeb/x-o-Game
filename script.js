var divs=document.getElementsByClassName("box");
function condition(first,second,third){
    if( first.textContent!=""&&(first.textContent==second.textContent&&second.textContent==third.textContent))  return true;
    else return false;
}
function clear(){
    for(let i=0;i<9;i++){
        divs[i].textContent=""
        eventCounter=0;
    }
}
function judge(){
    if(condition(divs[0],divs[1],divs[2])) 
        return true;
    else if(condition(divs[3],divs[4],divs[5])) 
        return true;
    else if(condition(divs[6],divs[7],divs[8])) 
        return true;
    else if( condition(divs[0],divs[3],divs[6]))
        return true;
    else if(condition(divs[1],divs[4],divs[7])) 
        return true;
    else if( condition(divs[2],divs[5],divs[8]))
        return true;
    else if( condition(divs[0],divs[4],divs[8]))
        return true;
    else if( condition(divs[2],divs[4],divs[6])) 
        return true;
    else
        return false
}
var eventCounter=0; var o="O"; var x="X";
let counterO=0,counterx=0;
function asset(div,className){
    var div=document.getElementsByClassName(className)[0];
    var title=document.getElementById("title");
    var lwinner=document.getElementById("lwinner");
    div.addEventListener("click",function(){
        if(div.textContent==""){
            div.textContent=o;
            eventCounter++;
        }
        else{
            div.textContent="";
            eventCounter--;
        }
        if(judge()){
            if(o=="O"){
                counterO++;
                document.getElementById("valueO").textContent=counterO;
            }
            else {
                counterx++;
                document.getElementById("valueX").textContent=counterx;
            }
            lwinner.innerHTML="last winner is  "+o;
            clear();
        }
        else if(judge()==false&&eventCounter==9)
        {
            lwinner.innerHTML="last game was Draw ";
            clear()
        }
        var temp=o;
        o=x;
        x=temp;
        title.innerHTML=o+" turn";
    })
}
for(var i=0;i<=8;i++){
    var d;
    asset(d,String(i));
}