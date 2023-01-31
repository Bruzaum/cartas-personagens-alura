const botoes = document.querySelectorAll('.botoes')
const botao = document.querySelector('.calculadora')

const nan = ["+", "-", "×", "÷", "=", "AC"]
const op = ["+", "-", "×", "÷", "*", "/"]
const newOp = ["+", "-", "×", "÷", "*", "/", "="]
const ac = []

const numeroVisor = 0

var novoNumero = ''

var exp = ''
let res = 0
let valida = 0

const visor = document.getElementById('visor-numero---input')
    visor.innerHTML = numeroVisor

botao.addEventListener("click", (event) => {
    event.preventDefault()

    const tecla = event.target

    var newexp = exp.split('')

    if(op.includes(newexp[exp.length - 1]) && op.includes(tecla.textContent) ) {
        if(tecla.textContent === '×') {
            newexp.push("*")
        }else if(tecla.textContent === '÷') {
            newexp.push("/")  
        }else {
            newexp.push(tecla.textContent)
        }
        
        newexp.splice(newexp.length - 2, 1)
        var test = newexp.join('')
        exp = test
    } else {
        if (tecla.textContent === 'AC') {
            novoNumero = ''
            exp = ''
            visor.value = novoNumero
        }else if (!nan.includes(tecla.textContent)){
            novoNumero = novoNumero + tecla.textContent
            exp = exp + tecla.textContent
            visor.value = parseFloat(novoNumero)
        }else if(tecla.textContent === '×') {
            res = eval(exp)
            visor.value = res
            exp = res.toString()
            exp = exp + '*'
            novoNumero = ''
        }else if(tecla.textContent === '÷') {
            res = eval(exp)
            visor.value = res
            exp = res.toString()
            exp = exp + '/'
            novoNumero = ''  
        }else if(tecla.textContent === '+') {
            res = eval(exp)
            visor.value = res
            exp = res.toString()
            exp = exp + tecla.textContent
            novoNumero = ''
        }else if(tecla.textContent === '-') {
            res = eval(exp)
            visor.value = res
            exp = res.toString();
            exp = exp + tecla.textContent
            novoNumero = ''
        }else if (tecla.textContent === '=') {
            res = eval(exp)
            visor.value = res
            exp = res.toString()
            valida = 1
        }
    }

    if( ( !newOp.includes(tecla.textContent) ) && (valida == 1) ) {
        novoNumero = '' + tecla.textContent
        exp = '' + tecla.textContent
        visor.value = parseFloat(novoNumero)
        valida = 0
    } 
})