let buton= document.getElementById('btn');
let culoare= document.getElementById('color');

let culori=['#FF0000','#00FFFF', '#0000FF', '#00008B', '#ADD8E6', '#800080', '#FFFF00', '#00FF00', '#FF00FF', '#FFC0CB', '#7FFD4', '#808000','#FFA500', '#008000', '#800000']

buton.addEventListener('click',function(){
    let min=0;
    let max=culori.length
    const random = Math.floor(Math.random() * (max - min)) + min;
    document.body.style.backgroundColor=culori[random];
    culoare.innerHTML=culori[random];
});

