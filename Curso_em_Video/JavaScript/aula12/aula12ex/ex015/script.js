function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = `Homem`
            if (idade >= 0 && idade < 12){
                //criança
                gênero = 'um menino'
                img.setAttribute('src', 'h_cri.png')
            } else if (idade <= 18) {
                //adolescente
                gênero = 'um adolescente'
                img.setAttribute('src', 'h_adol.png')
            } else if (idade > 18 && idade < 55){
                //adulto
                gênero = 'um homem'
                img.setAttribute('src', 'h_adul.png')
            } else if (idade >= 55){
                //idoso
                gênero = 'um senhor'
                img.setAttribute('src', 'h_sen.png')
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 12){
                //criança
                gênero = 'uma menina'
                img.setAttribute('src', 'm_cri.png')
            } else if (idade <= 18) {
                //adolescente
                gênero = 'uma adolescente'
                img.setAttribute('src', 'm_adol.png')
            } else if (idade > 18 && idade < 55){
                //adulto
                gênero = 'uma mulher'
                img.setAttribute('src', 'm_adul.png')
            } else if (idade >= 55){
                //idoso
                gênero = 'uma senhora'
                img.setAttribute('src', 'm_sen.png')
            }
        }
        res.style.TextAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}