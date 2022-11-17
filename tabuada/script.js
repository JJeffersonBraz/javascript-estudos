function tabuada(){
    let num = document.getElementById('txtnum')
    let mult = document.getElementById('tabmult')
    let div = document.getElementById('tabdiv')

    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        mult.innerHTML = ''

        for (let c=1 ; c<=10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            mult.appendChild(item)
        }

        div.innerHTML = ''
        for (let c=1 ; c<=10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tab${c}`
            div.appendChild(item)
        }
    }
    
}