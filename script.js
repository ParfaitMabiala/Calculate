//Get buttons
const buttons= [...document.querySelectorAll('.button')]
const listKeyCode = buttons.push(button => button.dataset.key);

document.addEventListener('keydown', (button)=>{
    const numberAt=button.keycode;
    console.log(numberAt);
})

document.addEventListener('click', (button)=> {
    const numberAt= button.target.dataset.key;
    console.log(numberAt);
})

