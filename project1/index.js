const emojiClosed = document.querySelector('.closed');
const emojiOpen = document.querySelector('.open');


emojiClosed.addEventListener('click', ()=>{
    if(emojiOpen.classList.contains('open')){
        emojiOpen.classList.add('active');
        emojiClosed.classList.remove('active');
    }
})

emojiOpen.addEventListener('click',()=>{
    if(emojiClosed.classList.contains('closed')){
        emojiClosed.classList.add('active');
        emojiOpen.classList.remove('active');
    }
})