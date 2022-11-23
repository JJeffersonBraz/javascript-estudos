let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if(n>=1 && n<=100) {
        return true
    } else {
        alert('Valor inválido!')
        return false
    }
}

function inList(n , l) {
    if(l.indexOf(n) != -1) {
        alert('Valor já adicionado a lista!')
        return false
    } else {
        return true
    }
}

function add() {
    if(isNumber(num.value) && inList(num.value,valores)) {
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado!`
        lista.appendChild(item)
    } else {
        alert('Erro')
    }
    

}