function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoForm = document.querySelector('input#txtano')    

    if (anoForm.value <= 0 || anoForm.value >= anoAtual) {
        alert('[ERRO] Ano de nascimento incorreto')  
    } else {
        var idade = anoAtual - Number(anoForm.value)
        var msg = document.getElementById('res')
        var fsex = document.getElementsByName('sexo')

        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ' '
        
        if (fsex[0].checked) {
            genero = 'homem'

            if (idade < 10) {
                img.setAttribute('src','img/criancaH.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','img/jovemH.jpg')
            } else {
                img.setAttribute('src','img/idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade < 10) {
                img.setAttribute('src','img/criancaM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','img/jovemM.jpg')
            } else {
                img.setAttribute('src','img/idosa.jpg')
            }
        }

        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos!`
        msg.appendChild(img)

        img.style.borderRadius = '100%'
        img.style.padding = '10px 5px'
    }
}