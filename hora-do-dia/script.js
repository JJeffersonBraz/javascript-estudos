function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementsByTagName('img')[0]
    
    var agora = new Date()
    var hora = agora.getHours()
    
    if (hora < 12) {
        mensagem.innerText = `Bom dia! Agora são ${hora} horas.`
        imagem.src = 'img/FotoManha.jpg'
        document.body.style.background = '#f8f876'
    } else if (hora < 18) {
        mensagem.innerText = `Boa tarde! Agora são ${hora} horas.`
        imagem.src = 'img/FotoTarde.jpg'
        document.body.style.background = '#b58e45'
    } else {
        mensagem.innerText = `Boa noite! Agora são ${hora} horas.`
        imagem.src = 'img/FotoNoite.jpg'
        document.body.style.background = '#543d69'
    }
}

