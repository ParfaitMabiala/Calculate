//Get buttons
const numLocks= [...document.querySelectorAll('.button')];
//const Num=[1,2,3,4,5,6,7,8,9,0]
const listKeyCode = numLocks.map(numLock => numLock.dataset.key);
//console.log(listKeyCode);
//const liskeyB = numLocks.map(numLock => numLock.dataset.key);
//console.log(liskeyB);
const display = document.querySelector('.display');



document.addEventListener('keydown', function (e) {
//console.log(e)
const numberAts = (e.key);
//console.log(numberAts);
display.textContent += numberAts;
switch(numberAts){
    case 'Backspace':
        display.textContent = "";
    case 'Enter':
        const calc = eval(display.textContent);
        display.textContent = calc;
        break;
}
//calcul(numberAt);    
});

document.addEventListener('click', (e)=> {
const numberAt = e.target.dataset.key;
//console.log(numberAt);
calcul(numberAt);

});

function calcul(numberAt) {
    if (listKeyCode.includes(numberAt)){
        switch(numberAt){
            case '8':
                display.textContent = " ";
            case '13':
                const calc = eval(display.textContent);
                display.textContent = calc;
                break;
             
            default:
                const indexKey = listKeyCode.indexOf(numberAt);
                const numLock = numLocks[indexKey];
                display.textContent += numLock.innerHTML;
        }
    }
}

