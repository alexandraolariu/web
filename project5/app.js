let buton= document.getElementById('btn');
let culoare= document.getElementById('color');

let culori=['red', 'blue', 'green','black', 'gray', 'yellow', 'purple', 'brown', 'cyan', 'pink', 'orange'];


buton.addEventListener('click',function(){
    let min=0;
    let max=culori.length
    const random = Math.floor(Math.random() * (max - min)) + min;
    document.body.style.backgroundColor=culori[random];
    culoare.innerHTML=culori[random];
});

