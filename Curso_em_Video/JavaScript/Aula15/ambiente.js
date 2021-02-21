

let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log(num)
console.log(`o vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor de 8 está na posição ${pos}`) 
}


function verificar(){
    document.body.style.background = 'red'
}