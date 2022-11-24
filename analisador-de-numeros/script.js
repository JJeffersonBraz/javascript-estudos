let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if(Number(n)>=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inList(n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado a lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for (let pos in valores) {
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
 
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados foi ${soma/valores.length}.</p>`
    }
}