function calcular() {
    let n1 = document.getElementById('num1');
    let n2 = document.getElementById('num2');
    let etapa = document.getElementById('etapa');
    let res = document.getElementById('resposta');
     if (n1.value.length == 0 || n2.value.length == 0 || etapa.value.length == 0 ){

     window.alert('FALHA: Algum campo está vazio, preencha todos.')
   } else {
        res.innerHTML = `Contando: `
        let i = Number(n1.value)
        let f = Number(n2.value)
        let e = Number(etapa.value)
        
        if (i < f){
            for (let r = i; r <= f; r += e ){
                res.innerHTML += `${r} 👉 `  
            } 
           
        } else {
            for(let r = i; r >= f; r -= e)
            res.innerHTML += `${r} 👉 `
        }
        res.innerHTML += `🚩`         
    }
}
