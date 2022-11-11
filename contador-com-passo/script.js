function contar() {
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')
    let passo = document.querySelector('input#passo')
    let res = document.getElementById('res')
    
    if (n1.value == '' || n2.value == '') {
        res.innerHTML = 'Impossível fazer a contagem.'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo "0" é inválido, considerando passo "1".')
            p = 1
        }

        if (i < f) {
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1f449}` 
            }
        } else {
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}` 
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}