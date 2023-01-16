const calc = document.querySelector('.calc')
const result  = document.querySelector('#result')
calc.addEventListener('click',(event) => {
if(!event.target.classList.contains('calc__btn'))return
const kkl = event.target.innerText
 if(kkl === 'C'){
        result.innerText = ''
    } else if (kkl === '=') {
        result.innerText = eval(result.innerText)
    } else {
        result.innerText += kkl
    }

})

