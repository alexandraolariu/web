function getHistory(){
    return document.getElementById('history').innerHTML;
}

function getOutput(){
    return document.getElementById('output').innerHTML;
}

function backspace(){
    document.getElementById('history').innerHTML=getHistory().slice(0,-1);
}

function eraseAll(){
    document.getElementById('history').innerHTML="";
    document.getElementById('output').innerHTML=0;
}

function equal(){
    var newString = getHistory().split(" ");
    let result=newString[0];
    for(i=1;i<newString.length-1;i++){
        result=eval(result+newString[i]+newString[i+1])
        i=i+1;
    }
    document.getElementById('history').innerHTML="";
    document.getElementById('output').innerHTML=result;
    console.log("result "+result);
    
}




var number = document.getElementsByClassName('number');

for(i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
            document.getElementById('history').innerHTML=getHistory()+this.id;
    })
      
}


let equ=document.getElementById('equal')
equ.addEventListener('click',equal)

let c=document.getElementById('c');
c.addEventListener('click',backspace);

let ce=document.getElementById('ce');
ce.addEventListener('click',eraseAll)







