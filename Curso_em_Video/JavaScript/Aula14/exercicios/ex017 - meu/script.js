




function validar(){
    var num = document.getElementById('numero')
    var num = Number(num.value)
    var n = 1
    var res = document.getElementById('tabela')
    var frase = document.getElementById('tabuada')

    if(num == 0){
        window.alert(`Nenhum valor foi inserido, digite um valor válido!`)
    }else{
            res.innerHTML = ''
            res.innerHTML += `<td class="teste">Tabuada do ${num}</td>`
        for (var t = 1;t <= 10;t++){            
            var result = num*n
            res.innerHTML += `<td>${num} * ${t} =</td><td>${result}</td>`
            n++         
        }    
    }
}