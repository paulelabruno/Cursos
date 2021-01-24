function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
        //manha
        img.src = 'manha.png'
        document.body.style.background = '#92a8b6'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#de6c21'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#1f2a3a'
    }
}